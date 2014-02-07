class User < ActiveRecord::Base

	has_many :outings
	has_many :events, through: :outings



	has_secure_password
	before_save :create_remember_token

	private
		def create_remember_token
			self.remember_token = SecureRandom.urlsafe_base64
		end
end
