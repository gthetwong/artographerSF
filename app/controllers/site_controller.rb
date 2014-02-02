require 'google/api_client'
require 'typhoeus'
class SiteController < ApplicationController


	def index
		# result = client.execute(:api_method => service.events.insert,
  #                   :parameters => {'calendarId' => 'primary'},
  #                   :body_object => event,
  #                   :headers => {'Content-Type' => 'application/json'})


		request = Typhoeus::Request.get("https://www.googleapis.com/calendar/v3/calendars/orougreqvdjcj9iagjhj0qllt6bqj87f%40import.calendar.google.com/events?key=AIzaSyBqZaycQIS6AsKqeI7x3TS_tfu-bvZw050", :params => {:key => 'artographersf'})
		@request=JSON.parse(request.body)
		
	end
end
