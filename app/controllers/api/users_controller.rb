class Api::UsersController < ApplicationController

    def show
        render :show
    end
    
    def create
        @user = User.create(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user.destroy
            render json: {msg: 'account has been deleted'}, status: 200
        else
            render json: {msg: 'unsuccesful deletion'}, status: 501
        end
    end

    private
    
    def user_params
        params.require(:user).permit(:username,:password)
    end
end


#user.rb
# has_many :likes


#likes has_many :users

# User

# Like

# Movie