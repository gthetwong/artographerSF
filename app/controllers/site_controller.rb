class SiteController < ApplicationController

	def index
		Event.cleanse
		Event.load_info
		@events = Event.get_lat
		gon.locations = @events

		end
end
