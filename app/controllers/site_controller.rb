class SiteController < ApplicationController
include SessionsHelper

	def index
		if Event.all.empty? 
			Event.load_info
		else
			Event.cleanse
		  Event.load_info
		end

		@events_locations = Event.get_lat
		gon.locations = @events_locations
		@events_marker_info = Event.marker_data
		gon.marker_info = @events_marker_info

	end

	


end
