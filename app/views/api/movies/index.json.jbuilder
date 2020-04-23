    json.array! @movies do |movie|
        json.extract movie, :id,:description, :title
        json.video url_for(movie.video)
        json.cover url_for(movie.cover)
    end




    

