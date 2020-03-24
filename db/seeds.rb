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
#------------------------CAT AND DOG ROAD TRIP VID------------------------------------
catAndDog= Movie.create({
    title: 'Road Trip',
    description: 'This summers hottest hit is finally on Petflix, 
    check out this kitty and dog on a road trip. Its intense, fun, 
    and has alot of laughs. This movie is suited for all ages.',
})

catAndDogVideo=  EzDownload.open("https://petflix-development.s3.amazonaws.com/catandDogVideo.mp4")

catAndDog.video.attach(io: catAndDogVideo,filename: 'catAndDogVid.mp4', content_type: 'video/mp4')

catAndDogCover = open('https://petflix-development.s3.amazonaws.com/catanddogCover.jpg')

catAndDog.cover.attach(io: catAndDogCover, filename: 'catAndDogCover.jpg')


joinCatAndDogWithDog = Join.create({
    genreId: dogGenre.id,
    movieId: catAndDog.id
})

joinCatAndDogWithCat = Join.create({
    genreId: catGenre.id,
    movieId: catAndDog.id
})

#------------------------Balloon DoG------------------------------------


balloonDog= Movie.create({
    title: 'Balloon Dog',
    description: 'This owner goes above and beyond for his pupper and throws him a balloon party. 
    Watch this pupper go crazy as he chases balloons and has loads of fun'
})

balloonDogVideo=  EzDownload.open("https://petflix-development.s3.amazonaws.com/balloondogVid.mp4")

balloonDog.video.attach(io: balloonDogVideo,filename: 'balloonDog.mp4', content_type: 'video/mp4')

balloonDogCover = open('https://petflix-development.s3.amazonaws.com/balloonDogCover.jpg')

balloonDog.cover.attach(io: balloonDogCover, filename: 'balloonDogCover.jpg')


joinBalloonDogWithDog = Join.create({
    genreId: dogGenre.id,
    movieId: balloonDog.id
})



#------------------------tennis DoG------------------------------------
tennisDog= Movie.create({
    title: 'Tennis Ball Dog',
    description: 'There he is, the chosen one, the one 
    who is suppose to save the word. It is all up to him now, 
    the only way he can save the world is by picking 
    up all the tennis balls in the world. Critics rate it a 10/10, must see'
})

tennisDogVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/tennisDogVid.mp4")

tennisDog.video.attach(io: tennisDogVid,filename: 'tennisDog.mp4', content_type: 'video/mp4')

tennisDogCover = open('https://petflix-development.s3.amazonaws.com/tennisDogCover.jpg')

tennisDog.cover.attach(io: tennisDogCover, filename: 'tennisDogCover.jpg')


jointennisDogWithDog = Join.create({
    genreId: dogGenre.id,
    movieId: tennisDog.id
})

#------------------------lifeguard cat------------------------------------
lifeguardCat= Movie.create({
    title: 'lifeguard kitty',
    description: 'Did someone say lifeguard kitty? watch this hot hunk of a lifeguard save
    people from drowning. He does it oh so puurrrfectly. dont miss tonights episode of lifeguard kitty'
})

lifeguardCatVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/lifeguardcat.mp4")

lifeguardCat.video.attach(io: lifeguardCatVid,filename: 'lifeguardCat.mp4', content_type: 'video/mp4')

lifeguardCatCover = open('https://petflix-development.s3.amazonaws.com/lifeguardCatCover.jpg')

lifeguardCat.cover.attach(io: lifeguardCatCover, filename: 'lifeguardcatCover.jpg')


joinlifeguardCatWithCat = Join.create({
    genreId: catGenre.id,
    movieId: lifeguardCat.id
})

#------------------------PRISON DOGS------------------------------------


prisonDogs= Movie.create({
    title: 'Prison Dogs',
    description: 'Bad dogs Bad dogs Bad Dogs, whatcha gonna do when they come for you. 
        In this documentary we explore the two baddest 
        criminals who ever lived and how they escapred prision. 
        You dont want to mess with these guys unless you had a death wish'
})

prisonDogsVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/prisondogsVideo.mp4")

prisonDogs.video.attach(io: prisonDogsVid,filename: 'prisonDogs.mp4', content_type: 'video/mp4')

prisonDogsCover = open('https://petflix-development.s3.amazonaws.com/prisondogsCover.jpg')

prisonDogs.cover.attach(io: prisonDogsCover, filename: 'prisondogCover.jpg')


joinprisonDogsWithDog = Join.create({
    genreId: dogGenre.id,
    movieId: prisonDogs.id
})



#------------------------Sad Cat------------------------------------

sadCat= Movie.create({
    title: 'The Sad Cat',
    description: 'Aww no one likes a sad kitty, someone needs to help this little guy and turn his frown upside down.
    Follow this lil guys adventure and see how he finally learns how to be happy again '
})

sadCatVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/sadcatVideo.mp4")

sadCat.video.attach(io: sadCatVid,filename: 'sadCat.mp4', content_type: 'video/mp4')

sadCatCover = open('https://petflix-development.s3.amazonaws.com/sadcatCover.jpg')

sadCat.cover.attach(io: sadCatCover, filename: 'sadcatCover.jpg')


joinsadCatWithCat = Join.create({
    genreId: catGenre.id,
    movieId: sadCat.id
})


#------------------------Cat MOM------------------------------------

catMom= Movie.create({
    title: 'Cat Mom',
    description: 'Prince Michael steps in to help a group of ducklings cross the road and turns into their Mother.
 '
})

catMomVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/catMom.mp4")

catMom.video.attach(io: catMomVid,filename: 'catMom.mp4', content_type: 'video/mp4')

catMomCover = open('https://petflix-development.s3.amazonaws.com/catMomCover.jpg')

catMom.cover.attach(io: catMomCover, filename: 'catMomCover.jpg')


joincatMomWithCat = Join.create({
    genreId: catGenre.id,
    movieId: catMom.id
})


#------------------------Coffee cat------------------------------------


coffeeCat= Movie.create({
    title: 'Coffee cat',
    description: 'Uh oh it looks like someone had too much coffee adn is going to stay up past there bedtime,
    Weve all been there, had a cup of joe too many. But what if a cat has too much coffee. Uh oh, then we dont want to know what happens,
    but for people who are extra curious, check out this episode of cats gone wild when they had a little too much coffee to drink.
 '
})

coffeeCatVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/coffeCatVid.mp4")

coffeeCat.video.attach(io: coffeeCatVid,filename: 'coffeeCat.mp4', content_type: 'video/mp4')

coffeeCatCover = open('https://petflix-development.s3.amazonaws.com/coffeeCatCover.jpg')

coffeeCat.cover.attach(io: coffeeCatCover, filename: 'coffeeCatCover.jpg')


joincoffeeCatWithCat = Join.create({
    genreId: catGenre.id,
    movieId: coffeeCat.id
})


#-------------------Piper Bird----------------------
piperBird= Movie.create({
    title: 'Piper',
    description: 'Uh oh it looks like someone had too much coffee adn is going to stay up past there bedtime,
    Weve all been there, had a cup of joe too many. But what if a cat has too much coffee. Uh oh, then we dont want to know what happens,
    but for people who are extra curious, check out this episode of cats gone wild when they had a little too much coffee to drink.
 '
})

piperBirdVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/piperMovie.mp4")

piperBird.video.attach(io: piperBirdVid,filename: 'piperBird.mp4', content_type: 'video/mp4')

piperBirdCover = open('https://petflix-development.s3.amazonaws.com/pipercover.jpg')

piperBird.cover.attach(io: piperBirdCover, filename: 'piperBirdCover.jpg')


joinpiperBirdWithbird = Join.create({
    genreId: birdGenere.id,
    movieId: piperBird.id
})


#------------PIGEONS------------------------------------

pigeons= Movie.create({
    title: 'Piper',
    description: 'Uh oh it looks like someone had too much coffee adn is going to stay up past there bedtime,
    Weve all been there, had a cup of joe too many. But what if a cat has too much coffee. Uh oh, then we dont want to know what happens,
    but for people who are extra curious, check out this episode of cats gone wild when they had a little too much coffee to drink.
 '
})

pigeonsVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/Pigeons+-+Cute+animation+cartoon.mp4")

pigeons.video.attach(io: pigeonsVid,filename: 'pigeons.mp4', content_type: 'video/mp4')

pigeonsCover = open('https://petflix-development.s3.amazonaws.com/pegions.jpg')

pigeons.cover.attach(io: pigeonsCover, filename: 'pigeonsCover.jpg')


joinpigeonsWithbird = Join.create({
    genreId: birdGenere.id,
    movieId: pigeons.id
})


#--------------MCDONALDS DOGS-----------


mcdonaldsDogs= Movie.create({
    title: 'Piper',
    description: 'Uh oh it looks like someone had too much coffee adn is going to stay up past there bedtime,
    Weve all been there, had a cup of joe too many. But what if a cat has too much coffee. Uh oh, then we dont want to know what happens,
    but for people who are extra curious, check out this episode of cats gone wild when they had a little too much coffee to drink.
 '
})

mcdonaldsDogsVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/Dogs+Eating+their+First+McDonald's+HAPPY+MEAL!!.mp4")

mcdonaldsDogs.video.attach(io: mcdonaldsDogsVid,filename: 'mcdonaldsDogs.mp4', content_type: 'video/mp4')

mcdonaldsDogsCover = open('https://petflix-development.s3.amazonaws.com/mcdonalds.jpg')

mcdonaldsDogs.cover.attach(io: mcdonaldsDogsCover, filename: 'mcdonaldsDogsCover.jpg')


joinmcdonaldsDogsWithdog = Join.create({
    genreId: dogGenre.id,
    movieId: mcdonaldsDogs.id
})


#--------------Strawberry-------------------

strawberry= Movie.create({
    title: 'Piper',
    description: 'Uh oh it looks like someone had too much coffee adn is going to stay up past there bedtime,
    Weve all been there, had a cup of joe too many. But what if a cat has too much coffee. Uh oh, then we dont want to know what happens,
    but for people who are extra curious, check out this episode of cats gone wild when they had a little too much coffee to drink.
 '
})

strawberryVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/Choco+Bananas+HAMSTER+KITCHEN.mp4")

strawberry.video.attach(io: strawberryVid,filename: 'strawberry.mp4', content_type: 'video/mp4')

strawberryCover = open('https://petflix-development.s3.amazonaws.com/bananacover.jpg')

strawberry.cover.attach(io: strawberryCover, filename: 'strawberryCover.jpg')


joinstrawberryWithhamster = Join.create({
    genreId: hamsterGenre.id,
    movieId: strawberry.id
})

#-----------------christmas--------------------

christmas= Movie.create({
    title: 'Piper',
    description: 'Uh oh it looks like someone had too much coffee adn is going to stay up past there bedtime,
    Weve all been there, had a cup of joe too many. But what if a cat has too much coffee. Uh oh, then we dont want to know what happens,
    but for people who are extra curious, check out this episode of cats gone wild when they had a little too much coffee to drink.
 '
})

christmasVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/Christmas+Pudding+HAMSTER+KITCHEN.mp4")

christmas.video.attach(io: christmasVid,filename: 'christmas.mp4', content_type: 'video/mp4')

christmasCover = open('https://petflix-development.s3.amazonaws.com/christmascover.jpg')

christmas.cover.attach(io: christmasCover, filename: 'christmasCover.jpg')


joinchristmasWithhamster = Join.create({
    genreId: hamsterGenre.id,
    movieId: christmas.id
})













mouseHunt= Movie.create({
    title: 'mouse hunt',
    description: 'Uh oh it looks like someone had too much coffee adn is going to stay up past there bedtime,
    Weve all been there, had a cup of joe too many. But what if a cat has too much coffee. Uh oh, then we dont want to know what happens,
    but for people who are extra curious, check out this episode of cats gone wild when they had a little too much coffee to drink.
 '
})

mouseHuntVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/MouseHunt.mp4")

mouseHunt.video.attach(io: mouseHuntVid,filename: 'mouseHunt.mp4', content_type: 'video/mp4')

mouseHuntCover = open('https://petflix-development.s3.amazonaws.com/mousehuntCover.jpg')

mouseHunt.cover.attach(io: mouseHuntCover, filename: 'mouseHuntCover.jpg')


joinmouseHuntWithhamster = Join.create({
    genreId: hamsterGenre.id,
    movieId: mouseHunt.id
})






pancakes= Movie.create({
    title: 'mouse hunt',
    description: 'Uh oh it looks like someone had too much coffee adn is going to stay up past there bedtime,
    Weve all been there, had a cup of joe too many. But what if a cat has too much coffee. Uh oh, then we dont want to know what happens,
    but for people who are extra curious, check out this episode of cats gone wild when they had a little too much coffee to drink.
 '
})

pancakesVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/Pancakes+HAMSTER+KITCHEN.mp4")

pancakes.video.attach(io: pancakesVid,filename: 'pancakes.mp4', content_type: 'video/mp4')

pancakesCover = open('https://petflix-development.s3.amazonaws.com/pancakeCover.jpg')

pancakes.cover.attach(io: pancakesCover, filename: 'pancakesCover.jpg')


joinpancakesWithhamster = Join.create({
    genreId: hamsterGenre.id,
    movieId: pancakes.id
})








strawberry= Movie.create({
    title: 'mouse hunt',
    description: 'Uh oh it looks like someone had too much coffee adn is going to stay up past there bedtime,
    Weve all been there, had a cup of joe too many. But what if a cat has too much coffee. Uh oh, then we dont want to know what happens,
    but for people who are extra curious, check out this episode of cats gone wild when they had a little too much coffee to drink.
 '
})

strawberryVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/strawberryvideo.mp4")

strawberry.video.attach(io: strawberryVid,filename: 'strawberry.mp4', content_type: 'video/mp4')

strawberryCover = open('https://petflix-development.s3.amazonaws.com/strawberrycover.jpg')

strawberry.cover.attach(io: strawberryCover, filename: 'strawberryCover.jpg')


joinstrawberryWithhamster = Join.create({
    genreId: hamsterGenre.id,
    movieId: strawberry.id
})







theBirds= Movie.create({
    title: 'mouse hunt',
    description: 'Uh oh it looks like someone had too much coffee adn is going to stay up past there bedtime,
    Weve all been there, had a cup of joe too many. But what if a cat has too much coffee. Uh oh, then we dont want to know what happens,
    but for people who are extra curious, check out this episode of cats gone wild when they had a little too much coffee to drink.
 '
})

theBirdsVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/%5BHD%5D+Pixar+-+For+The+Birds+Original+Movie+from+Pixar.mp4")

theBirds.video.attach(io: theBirdsVid,filename: 'theBirds.mp4', content_type: 'video/mp4')

theBirdsCover = open('https://petflix-development.s3.amazonaws.com/thebirds.jpg')

theBirds.cover.attach(io: theBirdsCover, filename: 'theBirdsCover.jpg')


jointheBirdsWithhamster = Join.create({
    genreId: birdGenere.id,
    movieId: theBirds.id
})









angryBird= Movie.create({
    title: 'mouse hunt',
    description: 'Uh oh it looks like someone had too much coffee adn is going to stay up past there bedtime,
    Weve all been there, had a cup of joe too many. But what if a cat has too much coffee. Uh oh, then we dont want to know what happens,
    but for people who are extra curious, check out this episode of cats gone wild when they had a little too much coffee to drink.
 '
})

angryBirdVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/Angry+Birds+Blues+The+Cutest+Weapon+-+S1+Ep12.mp4")

angryBird.video.attach(io: angryBirdVid,filename: 'angryBird.mp4', content_type: 'video/mp4')

angryBirdCover = open('https://petflix-development.s3.amazonaws.com/sprungOut.jpg')

angryBird.cover.attach(io: angryBirdCover, filename: 'angryBirdCover.jpg')


joinangryBirdWithhamster = Join.create({
    genreId: birdGenere.id,
    movieId: angryBird.id
})







cuteBird= Movie.create({
    title: 'mouse hunt',
    description: 'Uh oh it looks like someone had too much coffee adn is going to stay up past there bedtime,
    Weve all been there, had a cup of joe too many. But what if a cat has too much coffee. Uh oh, then we dont want to know what happens,
    but for people who are extra curious, check out this episode of cats gone wild when they had a little too much coffee to drink.
 '
})

cuteBirdVid=  EzDownload.open("https://petflix-development.s3.amazonaws.com/Angry+Birds+Blues+Trap+-+a+-+Geddon+-+S1+Ep7.mp4")

cuteBird.video.attach(io: cuteBirdVid,filename: 'cuteBird.mp4', content_type: 'video/mp4')

cuteBirdCover = open('https://petflix-development.s3.amazonaws.com/trapgeddon.jpg')

cuteBird.cover.attach(io: cuteBirdCover, filename: 'cuteBirdCover.jpg')


joincuteBirdWithhamster = Join.create({
    genreId: birdGenere.id,
    movieId: cuteBird.id
})