class Event < ActiveRecord::Base
	has_many :user_events
	has_many :users, through: :user_events


	def self.load_info
		t_request = Typhoeus::Request.get("https://www.googleapis.com/calendar/v3/calendars/orougreqvdjcj9iagjhj0qllt6bqj87f%40import.calendar.google.com/events?key=AIzaSyBqZaycQIS6AsKqeI7x3TS_tfu-bvZw050", :params => {:key => 'artographersf'})
		@parsed = JSON.parse(t_request.body)
		
		request = []
		
		@parsed["items"].each do |events|
			if events["end"]["dateTime"] != nil
			end_date = events["end"]["dateTime"]
			event = end_date.to_date
		 	
		 		if event > Date.today
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
					 unless image_tag.nil?
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


end
