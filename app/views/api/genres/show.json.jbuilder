json.genre do
    json.set! @genre.id do
        json.extract! @genre, :id,:name, :movie_ids
    end
end

json.movies do
    @genre.movies.each do |movie|
        json.set! movie.id do
            json.extract! movie, :id,:title,:description
            json.video url_for(movie.video)
            json.cover url_for(movie.cover)
        end
    end
end
