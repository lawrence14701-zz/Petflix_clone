# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Movie.destroy_all
Join.destroy_all
Genre.destroy_all
User.destroy_all


#----------------DEMO USER------------------

demoUser=User.create({
    username: 'username',
    password: 'password'
})



#--------GENRES--------------------------



catGenre = Genre.create({
    name: 'Cats'
})

dogGenre = Genre.create({
    name: 'Dogs'
})


hamsterGenre = Genre.create({
    name: 'Hamsters'
})

birdGenere = Genre.create({
    name: 'Birds'
})





#------------------------Catch me if you can 2------------------------------------

catch_me_if_you_can_2= Movie.create({
    title: 'Catch me if you can 2',
    description: 'The sequel to everyone`s favorite short film, Catch me if you can. The gray cat is back at it again, helping his neighbor babysit her kittens. Watch the mischief unfold as Michael, the cat, tries to keep the situation under control.',
})
catch_me_if_you_can_2_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/catch_me_if_you_can_2.mp4")
catch_me_if_you_can_2.video.attach(io: catch_me_if_you_can_2_video,filename: 'catch_me_if_you_can_2_video.mp4', content_type: 'video/mp4')
catch_me_if_you_can_2_cover = open('https://petflix-development.s3.amazonaws.com/catch_me_if_you_can_2.jpg')
catch_me_if_you_can_2.cover.attach(io: catch_me_if_you_can_2_cover, filename: 'catch_me_if_you_can_2_cover.jpg')
joinCatAndDogWithCat = Join.create({
    genreId: catGenre.id,
    movieId: catch_me_if_you_can_2.id
})

#------------------------Catch me if you can ------------------------------------
catch_me_if_you_can= Movie.create({
    title: 'Catch me if you can',
    description: 'The sequel to everyone`s favorite short film, Catch me if you can. The gray cat is back at it again, helping his neighbor babysit her kittens. Watch the mischief unfold as Michael, the cat, tries to keep the situation under control.',
})
catch_me_if_you_can_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/catch_me_if_you_can.mp4")
catch_me_if_you_can.video.attach(io: catch_me_if_you_can_video,filename: 'catch_me_if_you_can_video.mp4', content_type: 'video/mp4')
catch_me_if_you_can_cover = open('https://petflix-development.s3.amazonaws.com/catch_me_if_you_can.jpg')
catch_me_if_you_can.cover.attach(io: catch_me_if_you_can_cover, filename: 'catch_me_if_you_can_cover.jpg')
joinCatAndDogWithCat = Join.create({
    genreId: catGenre.id,
    movieId: catch_me_if_you_can.id
})