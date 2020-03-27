import React from "react";
import MovieItem from "./movieItem";

class VideoRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnLeftArrowClick = this.leftArrowClick.bind(this);
    this.handleOnRightArrowClick = this.rightArrowClick.bind(this);

    this.state = {
      moving: false,
      mv: 0,
      startId: 0,
      showItems: 1,
      totalItems: 0,
      sliderItems: []
    };
  }

  componentDidMount() {
    const { movies } = this.props;
    this.updateSliderState();
    this.setState({
      totalItems: movies.length
    });
  }

  componentWillMount() {
    $(window).on("resize", this.updateSliderState.bind(this));
  }

  updateSliderItems(baseShowItem = this.state.showItems) {
      const {movies} = this.props;
    let { totalItems, startId } = this.state;

    //centerData represents the movies that are currently showing on the slider
    let centerDataId = [];
    for (let i = 0; i < baseShowItem; i++) {
      let x = startId + i;
      if (x < totalItems) {
        centerDataId.push(x);
      } else {
        centerDataId.push(x - totalItems);
      }
    }

    //leftData represents the movies to the left of the slider that are not showing
    let leftDataId = [];
    for (let i = 0; i < baseShowItem + 1; i++) {
      let x = startId - i - 1;
      if (x >= 0) {
        leftDataId.push(x);
      } else {
        leftDataId.push(totalItems + x);
      }
    }
    leftDataId.reverse();

    //rightData represents the movies to the right of the slider that are not showing
    let rightDataId = [];
    for (let i = 0; i < baseShowItem + 1; i++) {
      let x = startId + baseShowItem + i;
      if (x < totalItems - baseShowItem + baseShowItem) {
        rightDataId.push(x);
      } else {
        rightDataId.push(x - totalItems);
      }
    }
    rightDataId.reverse();


    // console.log("left", leftDataId);
    // console.log("center", centerDataId);
    // console.log("right", rightDataId);

    let selectIds = [...leftDataId,...centerDataId,...rightDataId];
    let sliderItem = [];

    if(movies.length){
        selectIds.map((e) => {
            sliderItem.push(movies[e])
        })
    }

    this.setState({

    })
  }

  updateSliderState() {
    //create a dynamic slider that changes as window size changes
    let windowWidth = window.innerWidth;
    let showItems = 1;
    if (windowWidth > 1800) {
      showItems = 6;
    } else if (windowWidth > 1260) {
      showItems = 5;
    } else if (windowWidth > 980) {
      showItems = 4;
    } else if (windowWidth > 768) {
      showItems = 3;
    } else if (windowWidth > 600) {
      showItems = 2;
    }
    let mv = 100 / showItems; //what is this for? why divide by 100?
    this.setState({
      showItems,
      mv
    });
  }

  leftArrowClick() {
    const { showItems, startId, totalItems, mc } = this.state;
    let reducePrev = startId + showItems;
    let resetStartId = 0;
    if(reducePrev < 0){
        resetStartId = totalItems - reducePrev;
    } else {
        resetStartId = reducePrev;
    }
    this.updateSliderItems();
  }
  rightArrowClick() {
     const { showItems, startId, totalItems, mc } = this.state;
     let plusNext = startId + showItems;
     let resetStartId = 0;
     if (plusNext >= totalItems) {
       resetStartId = plusNext - totalItems;
     } else {
       resetStartId = plusNext;
     }
     this.updateSliderItems();
  }

  render() {
    const { title, movies } = this.props;
    const rowOfMovies = this.state.sliderItems.map(movie => {
      return <MovieItem key={movie.id} movie={movie} />;
    });
    return (
      <>
        <div className="wrapper">
          <h1 className="page-head">{title}</h1>
          <div className="slider">
            <div className="slider-mask">{rowOfMovies}</div>
            <div
              className="leftArrow arrow"
              ref="leftArrow"
              onClick={this.handleOnLeftArrowClick}
            >
              <i className="fas fa-chevron-left"></i>
            </div>
            <div
              className="rightArrow arrow"
              ref="RightArrow"
              onClick={this.handleOnRightArrowClick}
            >
              <i className="fas fa-chevron-right"></i>{" "}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VideoRow;
