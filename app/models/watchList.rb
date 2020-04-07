class Watchlist < ApplicationRecord

    validates :userId, :movieId, presence: true

    belongs_to :user
    
    belongs_to :movie

    
end