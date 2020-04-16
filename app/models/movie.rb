class Movie < ApplicationRecord

    validates :title, :description, presence: true


    has_many :watchlists
    has_and_belongs_to_many :users, join_table: :watchlists



    has_one_attached :video
    has_one_attached :cover



    has_many(
        :movies_genres,
        class_name: 'Join',
        foreign_key: :movieId,
        inverse_of: :movie,
        primary_key: :id
    )

    has_many(
        :genres,
        through: :movies_genres,
        source: :genre
    )

    
end