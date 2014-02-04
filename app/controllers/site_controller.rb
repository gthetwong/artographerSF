class SiteController < ApplicationController

	def index
		Event.load_info
		end
		
end
