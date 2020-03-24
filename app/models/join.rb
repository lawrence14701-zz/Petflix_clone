class Join < ApplicationRecord



    belongs_to(
        :movie,
        class_name: 'Movie',
        foreign_key: :movieId,
        inverse_of: :movies_genres,
        primary_key: :id
    )

    belongs_to(
        :genre,
        class_name: 'Genre',
        foreign_key: :genreId,
        inverse_of: :movies_genres,
        primary_key: :id
    )
    
    
end
