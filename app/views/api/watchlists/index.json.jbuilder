@watchlists.each do |watchlist|
    json.extract! watchlist, :id, :user_id
    json.set! :movie do
        json.extract watchlist.movie, :id, :title, :description
        json.video url_for(watchlist.movie.video)
        json.cover url_for(watchlist.movie.cover)
    end
end