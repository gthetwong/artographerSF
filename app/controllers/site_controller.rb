class SiteController < ApplicationController
include SessionsHelper

	def index
		Event.load_info
		Event.cleanse
		@events = Event.get_lat
		gon.locations = @events
		
	end

	


end
