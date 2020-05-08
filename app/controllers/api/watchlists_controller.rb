class Api::WatchlistsController < ApplicationController

    def index
        @watchlists = current_user.watchlists
        render 'api/watchlists/index'
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
        @watchlist = Watchlist.find_by(user_id:[current_user.id], movie_id:[params[:id]])
       if @watchlist.destroy
        render json: { id: params[:id]}, status: 200
       else
            render json: {message: 'Unable to delete selected movie'}, status: 500
       end
    end
         
    


    def watchlist_params
        params.require(:watchlist).permit(:movie_id)
    end

end
