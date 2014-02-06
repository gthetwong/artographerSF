class SiteController < ApplicationController

	def index
		Event.load_info
		@events = Event.get_lat
		gon = @events
		end
end
