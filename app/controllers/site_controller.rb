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
		binding.pry
	end

	


end
