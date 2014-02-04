require 'google/api_client'
require 'typhoeus'
require 'date'
require 'nokogiri'
class SiteController < ApplicationController


	def index
		request = Typhoeus::Request.get("https://www.googleapis.com/calendar/v3/calendars/orougreqvdjcj9iagjhj0qllt6bqj87f%40import.calendar.google.com/events?key=AIzaSyBqZaycQIS6AsKqeI7x3TS_tfu-bvZw050", :params => {:key => 'artographersf'})
		parsed = JSON.parse(request.body)
		@request = []

		parsed["items"].each do |events|
			if events["end"]["dateTime"] != nil
			end_date = events["end"]["dateTime"]
			event = end_date.to_date
		 	
		 		if event > Date.today
		 			@request << events
		 		end
		 	end
		 end
		 # puts "@@@@@@@@@@#{@request} @@@@@@@@@@@@"
		 @request.sort_by! {|x| x["start"]["dateTime"]}
		 @request.each do |events|
			 event = Event.all.where(:name => events["summary"])

			 if event!=nil
			 	new_event = Event.new
			 	new_event.name = events["summary"]
			 	new_event.location = events["location"]
			 	new_event.time = events["start"]["dateTime"]
			 	new_event.closing = events["end"]["dateTime"]
			 	new_event.description = events["description"]
			 	new_event.save			
			end
		end
		# Add new models,
		# add crossover with users

		end
end
