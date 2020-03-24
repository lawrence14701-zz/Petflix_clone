class Api::SessionsController < ApplicationController
    
    before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.nil?
            render json: ["Sorry, we can't find an account with this username or password. Please try again or create a new account."], status: 401
        else
            login(@user)
            render "api/users/show"
        end
    end

    def destroy
        logout
        render json: ["logout successful"], status: 200
    end

end