class Api::MoviesController < ApplicationController

    def show
        @movie= Movie.find(params[:id])
        render :show
    end

    def index
       searchFor = params[:search].downcase.capitalize
       if searchFor == 'Cats' || searchFor == "Dogs" || searchFor === 'Hamsters' || searchFor === 'Birds'
            @movies = Genre.find_by_name(searchFor).movies
            render :index
       else
           @movies = Movie.where("title LIKE #{searchFor}%")
           render :index
       end

    end

end