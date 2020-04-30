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
Watchlist.destroy_all


#----------------DEMO USER------------------

demoUser=User.create({
    username: 'demoUser',
    password: 'password'
})




#--------GENRES--------------------------



catGenre = Genre.create({
    name: 'Cats'
})

hamsterGenre = Genre.create({
    name: 'Hamsters'
})

dogGenre = Genre.create({
    name: 'Dogs'
})



# birdGenere = Genre.create({
#     name: 'Birds'
# })




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
#------------------------cat tries vr ------------------------------------
cat_tries_vr= Movie.create({
    title: 'Cat tries VR',
    description: 'VR is such a cool technology. But do you know what is even cooler? The answer equals a cat using VR. Now that is super cool. Name one thing cooler than that. I dare you.',
})
cat_tries_vr_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/cat_tries_vr.mp4")
cat_tries_vr.video.attach(io: cat_tries_vr_video,filename: 'cat_tries_vr_video.mp4', content_type: 'video/mp4')
cat_tries_vr_cover = open('https://petflix-development.s3.amazonaws.com/cat_tries_vr.jpg')
cat_tries_vr.cover.attach(io: cat_tries_vr_cover, filename: 'cat_tries_vr_cover.jpg')
join_with_cat_genre = Join.create({
    genreId: catGenre.id,
    movieId: cat_tries_vr.id
})
#------------------------the fake girlfriend ------------------------------------
the_fake_girl_friend= Movie.create({
    title: 'The fake girl friend',
    description: 'Watch Michael try his best to find the perfect mate for his owner. A mate as in a girlfriend. Will Michael be successful in his quest to find the best girlfriend?',
})
the_fake_girl_friend_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/the_fake_girl_friend.mp4")
the_fake_girl_friend.video.attach(io: the_fake_girl_friend_video,filename: 'the_fake_girl_friend_video.mp4', content_type: 'video/mp4')
the_fake_girl_friend_cover = open('https://petflix-development.s3.amazonaws.com/the_fake_girl_friend.jpg')
the_fake_girl_friend.cover.attach(io: the_fake_girl_friend_cover, filename: 'the_fake_girl_friend_cover.jpg')
join_with_cat_genre = Join.create({
    genreId: catGenre.id,
    movieId: the_fake_girl_friend.id
})
#------------------------How to be a better purr-son ------------------------------------
how_to_be_a_better_purr_son= Movie.create({
    title: 'how to be a better purr-son',
    description: 'Everyone wants to be a better person, right? But what about being a better purr-son? Well, Michael wants to try and achieve that, so he embarked on a mission to improve his life by doing good deeds. Let us see what happens.',
})
how_to_be_a_better_purr_son_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/how_to_be_a_better_purr_son.mp4")
how_to_be_a_better_purr_son.video.attach(io: how_to_be_a_better_purr_son_video,filename: 'how_to_be_a_better_purr_son_video.mp4', content_type: 'video/mp4')
how_to_be_a_better_purr_son_cover = open('https://petflix-development.s3.amazonaws.com/how_to_be_a_better_purr_son.jpg')
how_to_be_a_better_purr_son.cover.attach(io: how_to_be_a_better_purr_son_cover, filename: 'how_to_be_a_better_purr_son_cover.jpg')
join_with_cat_genre = Join.create({
    genreId: catGenre.id,
    movieId: how_to_be_a_better_purr_son.id
})
#------------------------When cats drink coffee ------------------------------------
when_cats_drink_coffee= Movie.create({
    title: 'When cats drink coffee',
    description: 'Uh oh, it looks like someone had too much coffee and is going to stay up past there bedtime,
    We`ve all been there, had a cup of joe too many. But what if a cat has too much coffee. Uh oh, then we don`t want to know what happens,
    but for extra curious people, check out this episode of cats gone wild when they had a little too much coffee to drink.',
})
when_cats_drink_coffee_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/when_cats_drink_coffee.mp4")
when_cats_drink_coffee.video.attach(io: when_cats_drink_coffee_video,filename: 'when_cats_drink_coffee_video.mp4', content_type: 'video/mp4')
when_cats_drink_coffee_cover = open('https://petflix-development.s3.amazonaws.com/when_cats_drink_coffee.jpg')
when_cats_drink_coffee.cover.attach(io: when_cats_drink_coffee_cover, filename: 'when_cats_drink_coffee_cover.jpg')
join_with_cat_genre = Join.create({
    genreId: catGenre.id,
    movieId: when_cats_drink_coffee.id
})
#------------------------Worlds first cat lifeguard------------------------------------
worlds_first_cat_lifeguard= Movie.create({
    title: 'Worlds first cat lifeguard',
    description: 'Did someone say lifeguard kitty? Watch this hot hunk of a lifeguard save people from drowning. He does it oh so puurrrfectly. Don`t miss tonight`s episode of lifeguard kitty',
})
worlds_first_cat_lifeguard_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/worlds_first_cat_lifeguard.mp4")
worlds_first_cat_lifeguard.video.attach(io: worlds_first_cat_lifeguard_video,filename: 'worlds_first_cat_lifeguard_video.mp4', content_type: 'video/mp4')
worlds_first_cat_lifeguard_cover = open('https://petflix-development.s3.amazonaws.com/worlds_first_cat_lifeguard.jpg')
worlds_first_cat_lifeguard.cover.attach(io: worlds_first_cat_lifeguard_cover, filename: 'worlds_first_cat_lifeguard_cover.jpg')
join_with_cat_genre = Join.create({
    genreId: catGenre.id,
    movieId: worlds_first_cat_lifeguard.id
})
#------------------------Mind control------------------------------------
mind_control= Movie.create({
    title: 'Mind Control',
    description: 'Phil and Michael discover a piece of technology that changes their lives. What will they do with their new-found technology? Will they use it for good or evil. Who knows.',
})
mind_control_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/mind_control.mp4")
mind_control.video.attach(io: mind_control_video,filename: 'mind_control_video.mp4', content_type: 'video/mp4')
mind_control_cover = open('https://petflix-development.s3.amazonaws.com/mind_control.jpg')
mind_control.cover.attach(io: mind_control_cover, filename: 'mind_control_cover.jpg')
join_with_cat_genre = Join.create({
    genreId: catGenre.id,
    movieId: mind_control.id
})
#------------------------The saddest day------------------------------------
the_saddest_day= Movie.create({
    title: 'The saddest day',
    description: 'Aww no one likes a sad kitty; someone needs to help this little guy and turn his frown upside down.
 Follow this little guys adventure and see how he finally learns how to be happy again',
})
the_saddest_day_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/the_saddest_day.mp4")
the_saddest_day.video.attach(io: the_saddest_day_video,filename: 'the_saddest_day_video.mp4', content_type: 'video/mp4')
the_saddest_day_cover = open('https://petflix-development.s3.amazonaws.com/the_saddest_day.jpg')
the_saddest_day.cover.attach(io: the_saddest_day_cover, filename: 'the_saddest_day_cover.jpg')
join_with_cat_genre = Join.create({
    genreId: catGenre.id,
    movieId: the_saddest_day.id
})

#------------------------Dog reviews food------------------------------------
dog_reviews_food= Movie.create({
    title: 'Dog reviews food',
    description: 'Tuker`s wife came over for a play date and Tuker wanted his first taste test as husband and wife. Disclaimer: All foods used in this video are safe for dogs, in moderation. Before feeding these foods to your dog, always test them in small amounts. Each pup is different',
})
dog_reviews_food_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/dog_reviews_food.mp4")
dog_reviews_food.video.attach(io: dog_reviews_food_video,filename: 'dog_reviews_food_video.mp4', content_type: 'video/mp4')
dog_reviews_food_cover = open('https://petflix-development.s3.amazonaws.com/dog_reviews_food.jpg')
dog_reviews_food.cover.attach(io: dog_reviews_food_cover, filename: 'dog_reviews_food_cover.jpg')
join_with_dog_genre = Join.create({
    genreId: dogGenre.id,
    movieId: dog_reviews_food.id
})
#------------------------burger police----------------------------------

burger_police = Movie.create({
  title: "Burger Police",
  description: "Watch out criminals, the greatest pawlice is back and he's coming for your burgers."})
burger_police_video = EzDownload.open("https://petflix-development.s3.amazonaws.com/burger_police.mp4")
burger_police.video.attach(io: burger_police_video, filename: "burger_police_video.mp4", content_type: "video/mp4")
burger_police_cover = open("https://petflix-development.s3.amazonaws.com/burger_police.jpg")
burger_police.cover.attach(io: burger_police_cover, filename: "burger_police_cover.jpg")

join_with_dog_genre = Join.create({
  genreId: dogGenre.id,
  movieId: burger_police.id,
})


#------------------------Dog reacts to giant mouse------------------------------------
dog_reacts_to_giant_mouse= Movie.create({
    title: 'Dog reacts to giant mouse',
    description: 'Another hilarious round of Tukers`s priceless reactions! This time he takes on a giant caterpillar and a giant mouse! Who will win this round?'
})
dog_reacts_to_giant_mouse_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/dog_reacts_to_giant_mouse.mp4")
dog_reacts_to_giant_mouse.video.attach(io: dog_reacts_to_giant_mouse_video,filename: 'dog_reacts_to_giant_mouse_video.mp4', content_type: 'video/mp4')
dog_reacts_to_giant_mouse_cover = open('https://petflix-development.s3.amazonaws.com/dog_reacts_to_giant_mouse.jpg')
dog_reacts_to_giant_mouse.cover.attach(io: dog_reacts_to_giant_mouse_cover, filename: 'dog_reacts_to_giant_mouse_cover.jpg')
join_with_dog_genre = Join.create({
    genreId: dogGenre.id,
    movieId: dog_reacts_to_giant_mouse.id
})

#------------------------Taking my dog to the beach------------------------------------
taking_my_dog_to_the_beach= Movie.create({
    title: 'Taking my dog to the beach',
    description: 'Tuker just loves teh water so today we took him for a special surprise trip to the neach and he loved every minute of it!'
})
taking_my_dog_to_the_beach_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/taking_my_dog_to_the_beach.mp4")
taking_my_dog_to_the_beach.video.attach(io: taking_my_dog_to_the_beach_video,filename: 'taking_my_dog_to_the_beach_video.mp4', content_type: 'video/mp4')
taking_my_dog_to_the_beach_cover = open('https://petflix-development.s3.amazonaws.com/taking_my_dog_to_the_beach.jpg')
taking_my_dog_to_the_beach.cover.attach(io: taking_my_dog_to_the_beach_cover, filename: 'taking_my_dog_to_the_beach_cover.jpg')
join_with_dog_genre = Join.create({
    genreId: dogGenre.id,
    movieId: taking_my_dog_to_the_beach.id
})


#------------------------Dog reunion------------------------------------
dog_reunion= Movie.create({
    title: 'Dog reunion',
    description: 'We have made it our goal for Tucker to be close to all his litter mates and have decided to have an annual family reunion party. This is our very first reunion party for Tucker and his relatives.'
})
dog_reunion_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/dog_reunion.mp4")
dog_reunion.video.attach(io: dog_reunion_video,filename: 'dog_reunion_video.mp4', content_type: 'video/mp4')
dog_reunion_cover = open('https://petflix-development.s3.amazonaws.com/dog_reunion.jpg')
dog_reunion.cover.attach(io: dog_reunion_cover, filename: 'dog_reunion_cover.jpg')
join_with_dog_genre = Join.create({
    genreId: dogGenre.id,
    movieId: dog_reunion.id
})

#------------------------Dog reacts to invisible food------------------------------------
dog_reacts_to_invisible_food= Movie.create({
    title: 'Dog reacts to invisible food',
    description: 'Tucker always loves his taste test videos. This time I pulled a fast one on him and gave him invisible food. His reactions are always priceless!'
})
dog_reacts_to_invisible_food_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/dog_reacts_to_invisible_food.mp4")
dog_reacts_to_invisible_food.video.attach(io: dog_reacts_to_invisible_food_video,filename: 'dog_reacts_to_invisible_food_video.mp4', content_type: 'video/mp4')
dog_reacts_to_invisible_food_cover = open('https://petflix-development.s3.amazonaws.com/dog_reacts_to_invisible_food.jpg')
dog_reacts_to_invisible_food.cover.attach(io: dog_reacts_to_invisible_food_cover, filename: 'dog_reacts_to_invisible_food_cover.jpg')
join_with_dog_genre = Join.create({
    genreId: dogGenre.id,
    movieId: dog_reacts_to_invisible_food.id
})
#------------------------Cat and dog road trip------------------------------------
cat_and_dog_road_trip= Movie.create({
    title: 'Cat and dog road trip',
    description: 'Prince Michael and his new friend, Bob, set out for a road trip in the breand new film Cat and dog road trip'
})
cat_and_dog_road_trip_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/cat_and_dog_road_trip.mp4")
cat_and_dog_road_trip.video.attach(io: cat_and_dog_road_trip_video,filename: 'cat_and_dog_road_trip_video.mp4', content_type: 'video/mp4')
cat_and_dog_road_trip_cover = open('https://petflix-development.s3.amazonaws.com/cat_and_dog_road_trip.jpg')
cat_and_dog_road_trip.cover.attach(io: cat_and_dog_road_trip_cover, filename: 'cat_and_dog_road_trip_cover.jpg')
join_with_dog_genre = Join.create({
    genreId: dogGenre.id,
    movieId: cat_and_dog_road_trip.id
})
join_with_cat_genre = Join.create({
    genreId: catGenre.id,
    movieId: cat_and_dog_road_trip.id
})
#------------------------pip-----------------------------------
pip = Movie.create({
    title: 'Pip',
    description: 'An animated short film presented by Southeastern Guide Dogs -- A heart warming tale for underdogs everywhere, Pip is a short stroy of a small dog with a big dream - to become a guide god. Does she have what it takes?'
})
pip_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/pip.mp4")
pip.video.attach(io: pip_video,filename: 'pip_video.mp4', content_type: 'video/mp4')
pip_cover = open('https://petflix-development.s3.amazonaws.com/pip.jpg')
pip.cover.attach(io: pip_cover, filename: 'pip_cover.jpg')
join_with_dog_genre = Join.create({
    genreId: dogGenre.id,
    movieId: pip.id
})
#------------------------Jubilee-----------------------------------
jubilee = Movie.create({
    title: 'Jubilee',
    description: 'After a sudden brust of wind in Buckingham palace, the Queen`s hat gets carried away from London. Fortunately, a trustworthy guard and a playful corgi run after it!'
})
jubilee_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/jubilee.mp4")
jubilee.video.attach(io: jubilee_video,filename: 'jubilee_video.mp4', content_type: 'video/mp4')
jubilee_cover = open('https://petflix-development.s3.amazonaws.com/jubilee.jpg')
jubilee.cover.attach(io: jubilee_cover, filename: 'jubilee_cover.jpg')
join_with_dog_genre = Join.create({
    genreId: dogGenre.id,
    movieId: jubilee.id
})
#------------------------dogs vs cats-----------------------------------

dogs_vs_cats= Movie.create({
    title: 'Dogs vs cats',
    description: 'Let the battle begin. Watch this short clip of a showdown between our favorite companions, dogs and cats. Who will come out victorious?'
})
dogs_vs_cats_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/dogs_vs_cats.mp4")
dogs_vs_cats.video.attach(io: dogs_vs_cats_video,filename: 'dogs_vs_cats_video.mp4', content_type: 'video/mp4')
dogs_vs_cats_cover = open('https://petflix-development.s3.amazonaws.com/dogs_vs_cats.jpg')
dogs_vs_cats.cover.attach(io: dogs_vs_cats_cover, filename: 'dogs_vs_cats_cover.jpg')
join_with_dog_genre = Join.create({
    genreId: dogGenre.id,
    movieId: dogs_vs_cats.id
})
join_with_cat_genre = Join.create({
    genreId: catGenre.id,
    movieId: dogs_vs_cats.id
})


#------------------------tame to ur hamster-----------------------------------

tame_your_hamster = Movie.create({
    title: 'Tame your hamster',
    description: 'This is just my personal method for taming hamsters which has worked for me, I hope you can find some of these tips userful for taming your new hamster.'
})
tame_your_hamster_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/tame_your_hamster.mp4")
tame_your_hamster.video.attach(io: tame_your_hamster_video,filename: 'tame_your_hamster_video.mp4', content_type: 'video/mp4')
tame_your_hamster_cover = open('https://petflix-development.s3.amazonaws.com/tame_your_hamster.jpg')
tame_your_hamster.cover.attach(io: tame_your_hamster_cover, filename: 'tame_your_hamster_cover.jpg')

join_with_hamster_genre = Join.create({
    genreId: hamsterGenre.id,
    movieId: tame_your_hamster.id
})


#------------------------pancakes-----------------------------------

pancakes = Movie.create({
    title: 'Pancakes',
    description: 'How to make yummy hamster pancakes topped with banana and honey! Enjoy more tiny hamster food in the Hamster Kitchen mini cooking series.'
})
pancakes_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/pancakes.mp4")
pancakes.video.attach(io: pancakes_video,filename: 'pancakes_video.mp4', content_type: 'video/mp4')
pancakes_cover = open('https://petflix-development.s3.amazonaws.com/pancakes.jpg')
pancakes.cover.attach(io: pancakes_cover, filename: 'pancakes_cover.jpg')

join_with_hamster_genre = Join.create({
    genreId: hamsterGenre.id,
    movieId: pancakes.id
})

#------------------------hamster wars-----------------------------------

hamster_wars = Movie.create({
  title: "Hamster Wars",
  description: "In a galaxy far far away, the galactic hamster empire fights for control of the milky way system. Its up to one hamster to stop them and save the galaxy.",
})
hamster_wars_video = EzDownload.open("https://petflix-development.s3.amazonaws.com/hamster_wars.mp4")
hamster_wars.video.attach(io: hamster_wars_video, filename: "hamster_wars_video.mp4", content_type: "video/mp4")
hamster_wars_cover = open("https://petflix-development.s3.amazonaws.com/hamster_wars.jpg")
hamster_wars.cover.attach(io: hamster_wars_cover, filename: "hamster_wars_cover.jpg")

join_with_hamster_genre = Join.create({
  genreId: hamsterGenre.id,
  movieId: hamster_wars.id,
})

#------------------------Candy apples-----------------------------------

candy_apples = Movie.create({
    title: 'Candy Apples',
    description: 'Learn how to make these yummy miniature candy apples that are safe for your hamsteres to eat'
})
candy_apples_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/candy_apples.mp4")
candy_apples.video.attach(io: candy_apples_video,filename: 'candy_apples_video.mp4', content_type: 'video/mp4')
candy_apples_cover = open('https://petflix-development.s3.amazonaws.com/candy_apples.jpg')
candy_apples.cover.attach(io: candy_apples_cover, filename: 'candy_apples_cover.jpg')

join_with_hamster_genre = Join.create({
    genreId: hamsterGenre.id,
    movieId: candy_apples.id
})


#------------------------harry potter hamster-----------------------------------

harry_potter_hamster = Movie.create({
    title: 'Hamster Potter',
    description: 'We love hamsters and we love Harry Potter so we decided to mix the two. Enjoy!'
})
harry_potter_hamster_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/harry_potter_hamster.mp4")
harry_potter_hamster.video.attach(io: harry_potter_hamster_video,filename: 'harry_potter_hamster_video.mp4', content_type: 'video/mp4')
harry_potter_hamster_cover = open('https://petflix-development.s3.amazonaws.com/harry_potter_hamster.jpg')
harry_potter_hamster.cover.attach(io: harry_potter_hamster_cover, filename: 'harry_potter_hamster_cover.jpg')

join_with_hamster_genre = Join.create({
    genreId: hamsterGenre.id,
    movieId: harry_potter_hamster.id
})

#------------------------hamster things-----------------------------------

hamster_things = Movie.create({
    title: 'Hamster things',
    description: 'We imagined an alternate reality where Stranger Things stars a cast of tiny rescue hamsters.'
})
hamster_things_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/hamster_things.mp4")
hamster_things.video.attach(io: hamster_things_video,filename: 'hamster_things_video.mp4', content_type: 'video/mp4')
hamster_things_cover = open('https://petflix-development.s3.amazonaws.com/hamster_things.jpg')
hamster_things.cover.attach(io: hamster_things_cover, filename: 'hamster_things_cover.jpg')

join_with_hamster_genre = Join.create({
    genreId: hamsterGenre.id,
    movieId: hamster_things.id
})



#------------------------hundred years of hamsters-----------------------------------

hundred_years_of_hamsters = Movie.create({
    title: 'Hundred Years of Hamsters',
    description: 'Hamster beauty has changed alot over the past 100 years. Well, not really, but it`s always fun to watch a hamster`s cheeks puff up with each carrot bite'
})
hundred_years_of_hamsters_video =  EzDownload.open("https://petflix-development.s3.amazonaws.com/hundred_years_of_hamsters.mp4")
hundred_years_of_hamsters.video.attach(io: hundred_years_of_hamsters_video,filename: 'hundred_years_of_hamsters_video.mp4', content_type: 'video/mp4')
hundred_years_of_hamsters_cover = open('https://petflix-development.s3.amazonaws.com/hundred_years_of_hamsters.jpg')
hundred_years_of_hamsters.cover.attach(io: hundred_years_of_hamsters_cover, filename: 'hundred_years_of_hamsters_cover.jpg')

join_with_hamster_genre = Join.create({
    genreId: hamsterGenre.id,
    movieId: hundred_years_of_hamsters.id
})



#------------------------Strawberry choco hearts----------------------------------

strawberry_choco_hearts = Movie.create({
  title: "Strawberry Choco hearts",
  description: "A super simple recipe for chocolate-dipped strawberry hearts. Watch this hamster eat this treat!",
})
strawberry_choco_hearts_video = EzDownload.open("https://petflix-development.s3.amazonaws.com/strawberry_choco_hearts.mp4")
strawberry_choco_hearts.video.attach(io: strawberry_choco_hearts_video, filename: "strawberry_choco_hearts_video.mp4", content_type: "video/mp4")
strawberry_choco_hearts_cover = open("https://petflix-development.s3.amazonaws.com/strawberry_choco_hearts.jpg")
strawberry_choco_hearts.cover.attach(io: strawberry_choco_hearts_cover, filename: "strawberry_choco_hearts_cover.jpg")

join_with_hamster_genre = Join.create({
  genreId: hamsterGenre.id,
  movieId: strawberry_choco_hearts.id,
})

#------------------------my new hamster----------------------------------

my_new_hamster = Movie.create({
  title: "My new hamster",
  description: "Welcome Butterscotch, the syrian hamster. He was born in September 2018 and his favorite food is chocolate drops. Watch the new hamster settle into his home.",
})
my_new_hamster_video = EzDownload.open("https://petflix-development.s3.amazonaws.com/my_new_hamster.mp4")
my_new_hamster.video.attach(io: my_new_hamster_video, filename: "my_new_hamster_video.mp4", content_type: "video/mp4")
my_new_hamster_cover = open("https://petflix-development.s3.amazonaws.com/my_new_hamster.jpg")
my_new_hamster.cover.attach(io: my_new_hamster_cover, filename: "my_new_hamster_cover.jpg")

join_with_hamster_genre = Join.create({
  genreId: hamsterGenre.id,
  movieId: my_new_hamster.id,
})

#------------------------waterpark----------------------------------

waterpark = Movie.create({
  title: "Water Park",
  description: "These cute syrian hamsters, Joe and Pixie, got to the water park. There is a sandy beach with sun and an umbrella, a large pool and water slides. A wonderful place for a vacation!",
})
waterpark_video = EzDownload.open("https://petflix-development.s3.amazonaws.com/waterpark.mp4")
waterpark.video.attach(io: waterpark_video, filename: "waterpark_video.mp4", content_type: "video/mp4")
waterpark_cover = open("https://petflix-development.s3.amazonaws.com/waterpark.jpg")
waterpark.cover.attach(io: waterpark_cover, filename: "waterpark_cover.jpg")

join_with_hamster_genre = Join.create({
  genreId: hamsterGenre.id,
  movieId: waterpark.id,
})

#------------------------hamsters great escape----------------------------------

hamsters_great_escape = Movie.create({
  title: "Hamsters great escape",
  description: "Mission Impossible in progress. Watch this little hamster do the impossible and escape from his cage. They call him bond, james bond.",
})
hamsters_great_escape_video = EzDownload.open("https://petflix-development.s3.amazonaws.com/hamsters_great_escape.mp4")
hamsters_great_escape.video.attach(io: hamsters_great_escape_video, filename: "hamsters_great_escape_video.mp4", content_type: "video/mp4")
hamsters_great_escape_cover = open("https://petflix-development.s3.amazonaws.com/hamsters_great_escape.jpg")
hamsters_great_escape.cover.attach(io: hamsters_great_escape_cover, filename: "hamsters_great_escape_cover.jpg")

join_with_hamster_genre = Join.create({
  genreId: hamsterGenre.id,
  movieId: hamsters_great_escape.id,
})


#------------------------puppy meets kitten----------------------------------

puppy_meets_kitten = Movie.create({
  title: "Puppy Meets Kitten",
  description: "Check out this puppy meeting a kitten for the first time, what is the worst that can happen"
})
puppy_meets_kitten_video = EzDownload.open("https://petflix-development.s3.amazonaws.com/puppy_meets_kitten.mp4")
puppy_meets_kitten.video.attach(io: puppy_meets_kitten_video, filename: "puppy_meets_kitten_video.mp4", content_type: "video/mp4")
puppy_meets_kitten_cover = open("https://petflix-development.s3.amazonaws.com/puppy_meets_kitten.jpg")
puppy_meets_kitten.cover.attach(io: puppy_meets_kitten_cover, filename: "puppy_meets_kitten_cover.jpg")

join_with_dog_genre = Join.create({
  genreId: dogGenre.id,
  movieId: puppy_meets_kitten.id,
})

join_with_cat_genre = Join.create({
  genreId: catGenre.id,
  movieId: puppy_meets_kitten.id,
})

#------------------------beach rescue----------------------------------

beach_rescue = Movie.create({
  title: "Beach Rescue",
  description: "Just a regular day at the beach with a twist. What will happen?"})
beach_rescue_video = EzDownload.open("https://petflix-development.s3.amazonaws.com/beach_rescue.mp4")
beach_rescue.video.attach(io: beach_rescue_video, filename: "beach_rescue_video.mp4", content_type: "video/mp4")
beach_rescue_cover = open("https://petflix-development.s3.amazonaws.com/beach_rescue.jpg")
beach_rescue.cover.attach(io: beach_rescue_cover, filename: "beach_rescue_cover.jpg")

join_with_dog_genre = Join.create({
  genreId: dogGenre.id,
  movieId: beach_rescue.id,
})







#----------- watchlists --------------

Watchlist.create({
    user_id: demoUser.id,
    movie_id: catch_me_if_you_can_2.id
})

Watchlist.create({
    user_id: demoUser.id,
    movie_id: taking_my_dog_to_the_beach.id
})
