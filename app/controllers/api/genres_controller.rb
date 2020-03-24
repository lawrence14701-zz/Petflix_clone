class Api::GenresController < ApplicationController

    def show
        @genre = Genre.find(params[:id])
        render :show
    end

    def index
        @genres = Genre.all
        render :index
    end
    
end