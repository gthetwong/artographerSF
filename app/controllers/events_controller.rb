class EventsController < ApplicationController



	def all
		@events = Event.all
	end

end
