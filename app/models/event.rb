class Event < ActiveRecord::Base
	has_many :outings
	has_many :users, through: :outings





	def self.load_info
		#loads all info on page request

		t_request = Typhoeus::Request.get("https://www.googleapis.com/calendar/v3/calendars/orougreqvdjcj9iagjhj0qllt6bqj87f@import.calendar.google.com/events?key=AIzaSyDvaaalnZCpnuNonahsZF3RSctJ6wRSdgE")
		@parsed = JSON.parse(t_request.body)
		request = []
		@parsed["items"].each do |events|
			if events["start"]["dateTime"] != nil
				end_date = events["start"]["dateTime"]
				event = (end_date.to_date)-1
		 			if event < Date.today
		 			else
		 				request << events
		 			end
		 	end
		end
		request.sort_by! {|x| x["start"]["dateTime"]}

		request.each do |events|
			unless Event.where(name: events["summary"]).exists?
			 	new_event = Event.new
			 	new_event.name = events["summary"]
			 	new_event.location = events["location"]
			 	new_event.time = events["start"]["dateTime"]
			 	new_event.closing = events["end"]["dateTime"]

			 	doc = Nokogiri::HTML(events["description"]) 
				image_tag = doc.at_css('img') 
					unless image_tag.nil? || image_tag.attribute("src").value.length > 255
						img_src = image_tag.attribute("src")
					end
				new_event.image = img_src.to_s
				doc.search('img').remove
				sdoc = doc.to_s.delete("\n")
				new_event.description = sdoc
			 	new_event.save			
			end
		end	
	end

	def self.get_lat
		@marker_coords = {}
		marker_array = []
		i = 0
			for x in Event.all[0...-1] do 
				#unless location is nil or does not include an @ symbol
				unless x.location == nil || x.location.include?("@")==false
					#the raw address will be the second half of the split after the @ symbol
					address_raw = x.location.split("@").last
					#substitute any spaces for pluses
					address = address_raw.gsub(/[ ]/,"+")
					#make a typhoeus request using the new concatenated address to the geolocator
					t_request = Typhoeus::Request.get("http://maps.googleapis.com/maps/api/geocode/json?address=#{address}&sensor=false")
					#push the parsed body of the request into the marker array
					marker_array << JSON.parse(t_request.body)
					#since Google geolocator only allows 5 requests to be made at once, we need a rescue
						begin
							#create a key using the name of the event(the gallery show title) and a value of that show's location coords
							@marker_coords[x.name] =  marker_array[i]["results"][0]["geometry"]["location"]
						rescue
						ensure
							#ensure that the iterator gets incremented
							i += 1
						end
				end
			end
		@marker_coords
	end

	def self.cleanse
		#If the event's closing date has already passed, delete the event from the model collection
		events = Event.all
		events.each do |event|
			if event.closing.to_date < Date.today
				event.destroy
		 	end
		end
	end


	def self.marker_data
		events = Event.all
		event_array = []
		events.each do |event|
			container= {}
			container[:name] = event.name

			container[:location] = event.location
			container[:time] = event.time
			container[:image] = event.image
			event_array.push(container)
		end
		event_array
	end

end
