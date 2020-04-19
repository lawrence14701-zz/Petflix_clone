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
    #     if params[:search].blank?  
    #        render json: ["empty field"], status: 401 and return 
    #     else
    #         @parameter = params[:search].downcase  
    #         @results = Store.all.where("lower(name) LIKE :search", search: @parameter)  
    #     end
    # end
end