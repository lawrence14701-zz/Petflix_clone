Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    namespace :api, defaults: {format: :json} do      
      resources :users, only: [:create,:show]
      resource :session, only: [:create,:destroy]

      resources :genres, only: [:show,:index]

      resources :movies, only: [:show]
    end



    root to: "static_pages#root"
end
