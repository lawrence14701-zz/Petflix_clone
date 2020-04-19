  
json.extract @movie, :id, :title, :description
json.video url_for(movie.video)
json.cover url_for(movie.cover)