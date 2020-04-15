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
* Lastly, I used react refs and applied CSS styling to create that transition animation when moving from the right or left.
## Code for this feature 
```javascript
//code snippet for left click
    const { showItems, startId, totalItems, mv } = this.state;
    let reducePrev = startId - showItems;
    let resetStartId = 0;
    let slider = this.refs.slider;
    if (reducePrev < 0) {
      resetStartId = reducePrev + totalItems;
    } else {
      resetStartId = reducePrev;
    }
    this.setState({
      startId: resetStartId,
      moving: true,
    });
    //mv represents how much I'm going to slide my movie to the right or left
    $(slider).css({
      transform: "translate3d(-" + mv + "%, 0, 0)", 
    });
    setTimeout(() => {
      $(slider).css({
        transform: "translate3d(-1" + mv + "%, 0, 0)",
      });
    }, 750);
    setTimeout(() => {
      this.setState({
        moving: false,
      });
      this.updateSliderItems();
    }, 750);
```
```javascript
//Snippet of Movie Function Slider
//centerDataId represents the movies I will be showing, I used the ids of the movies
let centerDataId = [];
    for (let i = 0; i < baseShowItem; i++) {
      let x = startId + i;
      if (x < totalItems) {
        centerDataId.push(x);
      } else {
        centerDataId.push(x - totalItems);
      }
    }
//leftDataId represents the movies that are left of centerDataId but are hidden
    let leftDataId = [];
    for (let i = 0; i < baseShowItem + 1; i++) {
      let x = startId - i - 1;
      if (x >= 0) {
        leftDataId.push(x);
      } else {
        leftDataId.push(x + totalItems);
      }
    }
    leftDataId.reverse();

//Similar to leftDataId, but hidden on the right side
    let rightDataId = [];
    for (let i = 0; i < baseShowItem + 1; i++) {
      let x = startId + baseShowItem + i;
      if (x < totalItems - baseShowItem + baseShowItem) {
        rightDataId.push(x);
      } else {
        rightDataId.push(x - totalItems);
      }
    }
    let selectIds = [...leftDataId, ...centerDataId, ...rightDataId];
    let sliderItems = [];
//pushing movie objects into an array by using the IDS
    const { movies } = this.props;
    if (movies.length) {
      selectIds.map((e) => {
        sliderItems.push(movies[e]);
      });
    }
    //my sliderItems represent all the movies in the slider. Im using my state to easily access the movies
    this.setState({
      sliderItems,
    });
```