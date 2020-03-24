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




end