class Person < ApplicationRecord
  belongs_to :city
  belongs_to :region
  belongs_to :country
end
