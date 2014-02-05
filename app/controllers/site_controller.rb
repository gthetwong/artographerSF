class SiteController < ApplicationController

	def index
		Event.load_info
		@events = Event.all
		gon.events = @events
		end
		
end
