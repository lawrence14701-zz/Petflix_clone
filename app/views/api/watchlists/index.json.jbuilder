
json.movieIds do
  @watchlists.each do |watchlist|
    json.extract! watchlist, :movie_id
  end
end




