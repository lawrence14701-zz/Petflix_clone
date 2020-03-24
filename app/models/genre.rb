class Genre < ApplicationRecord

    validates :name, presence: true


    has_many(
        :movies_genres,
        class_name: 'Join',
        foreign_key: :genreId,
        inverse_of: :genre,
        primary_key: :id
    )

     has_many(
        :movies,
        through: :movies_genres,
        source: :movie
    )
        
    
    
end