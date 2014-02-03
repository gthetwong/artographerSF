class UserEvents < ActiveRecord::Base
  belongs_to :event
  belongs_to :user
end
