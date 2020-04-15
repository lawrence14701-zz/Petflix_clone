class Api::WatchlistsController < ApplicationController

    #undefined method `watchlists' for nil:NilClass
    def index
        #watchlist_movies = current_user.movies # return an array of Movies
        @watchlists = current_user.watchlists
        render 'api/watchlists/index'
        # @watchlist = Watchlist.where(user_id: current_user.id) # return an array of WatchLists
    end

    def show
        @watchlist = Watchlist.find(params[:id])
        render :show
    end

    def create
        @watchlist = Watchlist.new(watchlist_params)
        @watchlist.user_id = current_user.id
        if @watchlist.save
          render :create
        else
          render json: {message: 'Unable to save watchlist create'}, status: 500 # Internal Server Error
        end
    end

    def destroy
        @watchlist = Watchlist.find(params[:id])
       if @watchlist.destroy
        render :destroy
       else
            render json: {message: 'Unable to delete selected movie'}, status: 500
       end
         
    end


    def watchlist_params
        params.require(:watchlist).permit(:movie_id)
    end

end
