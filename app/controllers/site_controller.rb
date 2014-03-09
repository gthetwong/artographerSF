class SiteController < ApplicationController
include SessionsHelper

	def index
		if Event.all.empty? == false
			Event.load_info
		else
			Event.cleanse
		  Event.load_info
		end

		@events = Event.get_lat
		gon.locations = @events
		
	end

	


end
