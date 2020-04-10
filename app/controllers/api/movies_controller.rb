class Api::MoviesController < ApplicationController

    def show
        @movie= Movie.find(params[:id])
        render :show
    end

    def index
        @genre = Genre.find(params[:genre_id])
        @movies = @genre.movies
        render :index
    end

    # def search
    #    search_text = params[:search_text]
    #    Movie.where('title like ?', "%#{search_text}%")
    #    SELECT * from movies where title like %search_text%
    # end



end