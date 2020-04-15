# ReadMe

<img src="app/assets/images/logo.png"  width="200" height="125" />

* Petflix is a Netflix clone made with React, Redux, and Rails. Users can browse short videos of pets, such as cats, organized in genres.

# Live site demo
* Demo: [Link](https://petflix-clone.herokuapp.com/#/)

# Video Demo
* will post a video when i am done

# Tech Stack
* The app was made using Ruby on Rails for the backend, PostgreSQL for the backend database, React/Redux for the frontend, and Amazon AWS S3 for cloud storage of image and video files.

# MVPs
* Movie carousel and hovering over videos
* Search Bar 
* custom controls for playing movies
* My List 


# Movie carousel and hovering over videos
<!-- blank line -->
![Alt Text](./app/assets/images/slider.gif)
<!-- blank line -->
## Information about this feature
* Netlix's iconic movie carousel incorporates an infinite scroll. In other words, the user can click indefinitely on an arrow and never reach an endpoint on the slider. Instead, the movies wrap around from the beginning. 
* To implement this, it took some ingenuity in planning my code. First, I organized my movie data into a 2d array, with three sections: left, center, right. The center section will be the movies I am displaying on the page. The left and right sections are movies that I hid using CSS. The right/left movies get pushed into the center, depending on the arrow clicked.