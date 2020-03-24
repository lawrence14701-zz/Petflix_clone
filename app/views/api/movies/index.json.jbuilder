@movies.each do |movie|
    json.set! movie.id do
        json.extract! movie, :id,:title,:description
        json.Url url_for(movie.video)
end