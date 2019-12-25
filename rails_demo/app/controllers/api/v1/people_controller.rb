class Api::V1::PeopleController < ApplicationController
  def index
    @people = Person.left_outer_joins(:country, :city, :region).select('people.id, people.name, people.address, 
    cities.name as city_name, regions.name as region_name, countries.name as country_name, people.birthday')
    # @people = Person.all
    # @people = Person.joins(:city)
    render json: @people
  end
end
