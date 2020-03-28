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



#------------------------The cat who caught the laser ------------------------------------
the_cat_who_caught_the_laser= Movie.create({
    title: 'The cat who caught the laser',
    description: 'Whats more impossible than catching a laser? Nothing...nothing at all. Watch Michael the cat do the impossible. That is catch a laser of course. But did he really catch the laser or is it all a dream?',
})
the_cat_who_caught_the_laser_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/the_cat_who_caught_the_laser.mp4")
the_cat_who_caught_the_laser.video.attach(io: the_cat_who_caught_the_laser_video,filename: 'the_cat_who_caught_the_laser_video.mp4', content_type: 'video/mp4')
the_cat_who_caught_the_laser_cover = open('https://petflix-development.s3.amazonaws.com/the_cat_who_caught_the_laser.jpg')
the_cat_who_caught_the_laser.cover.attach(io: the_cat_who_caught_the_laser_cover, filename: 'the_cat_who_caught_the_laser_cover.jpg')
join_with_cat_genre = Join.create({
    genreId: catGenre.id,
    movieId: the_cat_who_caught_the_laser.id
})
#------------------------Gone Fishing ------------------------------------
gone_fishing= Movie.create({
    title: 'Gone fishing',
    description: 'Michael and his owner take a trip to the lake. Will Michael get lucky and catch a big one? Or will his arch-nemesis outdo him? Only one way to find out? Watch this short film of our little gray cat going fishing!',
})
gone_fishing_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/gone_fishing.mp4")
gone_fishing.video.attach(io: gone_fishing_video,filename: 'gone_fishing_video.mp4', content_type: 'video/mp4')
gone_fishing_cover = open('https://petflix-development.s3.amazonaws.com/gone_fishing.jpg')
gone_fishing.cover.attach(io: gone_fishing_cover, filename: 'gone_fishing_cover.jpg')
join_with_cat_genre = Join.create({
    genreId: catGenre.id,
    movieId: gone_fishing.id
})
#------------------------are you my mother ------------------------------------
are_you_my_mother= Movie.create({
    title: 'Are you my mother',
    description: 'Oh no, it looks like Michael got himself in another sticky situation. This time he got himself in a position where a bunch of duckies thinks he`s his mommy. What will Michael do? Will he be able to take care of the duckies, or will the duckies make him go crazy? Guess we will just have to find out and see what happens.',
})
are_you_my_mother_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/are_you_my_mother.mp4")
are_you_my_mother.video.attach(io: are_you_my_mother_video,filename: 'are_you_my_mother_video.mp4', content_type: 'video/mp4')
are_you_my_mother_cover = open('https://petflix-development.s3.amazonaws.com/are_you_my_mother.jpg')
are_you_my_mother.cover.attach(io: are_you_my_mother_cover, filename: 'are_you_my_mother_cover.jpg')
join_with_cat_genre = Join.create({
    genreId: catGenre.id,
    movieId: are_you_my_mother.id
})
#------------------------worlds most obedient cat ------------------------------------
worlds_most_obedient_cat= Movie.create({
    title: 'Worlds most obedient cat',
    description: 'Are dogs man`s best friend still? How can we be sure when there are cats like Michael. In this short film, Michael helps his owner, who is sick. I mean, if that is not being a pal, then I don`t know what is. Good for Michael.',
})
worlds_most_obedient_cat_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/worlds_most_obedient_cat.mp4")
worlds_most_obedient_cat.video.attach(io: worlds_most_obedient_cat_video,filename: 'worlds_most_obedient_cat_video.mp4', content_type: 'video/mp4')
worlds_most_obedient_cat_cover = open('https://petflix-development.s3.amazonaws.com/worlds_most_obedient_cat.jpg')
worlds_most_obedient_cat.cover.attach(io: worlds_most_obedient_cat_cover, filename: 'worlds_most_obedient_cat_cover.jpg')
join_with_cat_genre = Join.create({
    genreId: catGenre.id,
    movieId: worlds_most_obedient_cat.id
})
#------------------------How to make a cat video ------------------------------------
how_to_make_a_cat_video= Movie.create({
    title: 'How to make a cat video',
    description: 'Have you always wondered why Michael the cat looks so good? How are those animations so crisp and perfect? Well, in this episode, you will find out how Aaron, the owner, creates amazing films with his cat. Just watch him do it, its amazing!',
})
how_to_make_a_cat_video_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/how_to_make_a_cat_video.mp4")
how_to_make_a_cat_video.video.attach(io: how_to_make_a_cat_video_video,filename: 'how_to_make_a_cat_video_video.mp4', content_type: 'video/mp4')
how_to_make_a_cat_video_cover = open('https://petflix-development.s3.amazonaws.com/how_to_make_a_cat_video.jpg')
how_to_make_a_cat_video.cover.attach(io: how_to_make_a_cat_video_cover, filename: 'how_to_make_a_cat_video_cover.jpg')
join_with_cat_genre = Join.create({
    genreId: catGenre.id,
    movieId: how_to_make_a_cat_video.id
})