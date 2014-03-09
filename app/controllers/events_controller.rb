class EventsController < ApplicationController

	def all
		@events = Event.all
	end

  def create
    id = params[:id]
    user = current_user
    event = Event.find(id)
    user.events << event
    redirect_to root_path
    flash[:saved] = "You saved the event!"
  end

end
