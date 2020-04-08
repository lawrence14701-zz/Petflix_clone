json.partial! '/api/genres/genre', genre: @genre




json.movies do
    debugger
    @genre.movies.each do |movie|
        json.set! movie.id do
            json.extract! movie, :id,:title,:description
            json.video url_for(movie.video)
            json.cover url_for(movie.cover)
        end
    end
end
