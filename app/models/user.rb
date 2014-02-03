class User < ActiveRecord::Base

	has_many :user_events
	has_many :users, through: :user_events



	has_secure_password
	before_save :create_remember_token

	private
		def create_remember_token
			self.remember_token = SecureRandom.urlsafe_base64
		end
end
