import React from "react";
import MovieItem from "./movieItem";
import classNames from "classnames";

class VideoRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnLeftArrowClick = this.leftArrowClick.bind(this);
    this.handleOnRightArrowClick = this.rightArrowClick.bind(this);

    this.state = {
      moving: false,
      click: false,
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
      totalItems: movies.length,
      sliderItems: movies
    });
  }

  componentWillMount() {
    if (typeof window !== "undefined") {
      $(window).on("resize", this.updateSliderState.bind(this));
    }
  }

  updateSliderItems(baseShowItem = this.state.showItems) { //how many items are we showing
    const { movies } = this.props;
    let { totalItems, startId } = this.state;

    //centerData represents the movies that are currently showing on the slider
    debugger
    let centerDataId = [];
    for (let i = 0; i < baseShowItem; i++) { //3
      let x = startId + i;
      if (x < totalItems) {
        centerDataId.push(x);
      } else {
        centerDataId.push(x - totalItems);
      }
    }

    //leftData represents the movies to the left of the slider that are not showing
    let leftDataId = [];
    for (let i = 0; i < baseShowItem + 1; i++) { //+1
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
    for (let i = 0; i < baseShowItem + 1 ; i++) { 
        debugger
        console.log(x)
      let x = startId + baseShowItem + i; //4
      if (x < totalItems - baseShowItem + baseShowItem) { 
            rightDataId.push(x);
          } else {
            rightDataId.push(x - totalItems);
          }
    }
    console.log('totalMovies',movies.length)
    console.log("left", leftDataId);
    console.log("center", centerDataId);
    console.log("right", rightDataId);

    let selectIds = [...leftDataId, ...centerDataId, ...rightDataId]; //a reorganization of indexes in our movie array
    console.log('allmovies',selectIds)
    let sliderItems = [];

    if (movies.length) {
      selectIds.map(e => {
        sliderItems.push(movies[e]);
      });
    }

    this.setState({ sliderItems });
  }

  updateSliderState() {
    //create a dynamic slider that changes as window size changes
    let windowWidth = window.innerWidth;
    let showItems = 1;
    if (windowWidth > 1800) {
      showItems = 4  //6; //change later when i put more movies in
    } else if (windowWidth > 1260) {
      showItems = 4
    } else if (windowWidth > 980) {
      showItems = 4;
    } else if (windowWidth > 768) {
      showItems = 3;
    } else if (windowWidth > 600) {
      showItems = 2;
    }
    let mv = 100 / showItems; //make our css transition dynamic 
    this.setState({
      showItems,
      mv
    });
  }

  leftArrowClick() {
    const { showItems, startId, totalItems, mc, mv } = this.state;
    let reducePrev = startId + showItems;
    let resetStartId = 0;
    let slider = this.refs.slider; //what does this do

    if (reducePrev < 0) {
      resetStartId = totalItems - reducePrev;
    } else {
      resetStartId = reducePrev;
    }
    this.setState({
      startId: resetStartId,
      moving: true
    });
    $(slider).css({
      transform: "translate3d(-" + mv + "%,0,0)"
    });
    setTimeout(() => {
      //cant transform translate for 750ms
      $(slider).css({
        transform: "translate3d(-1" + mv + "%,0,0)"
      });
    }, 750);
    setTimeout(() => {
        this.setState({
            moving:false,
        })
      // timer set between button clicks
      this.updateSliderItems();
    }, 7500);
  }
  rightArrowClick() {
    debugger
    const { showItems, startId, totalItems, mv, click } = this.state;
    let plusNext = startId + showItems;  
    let resetStartId = 0;
    let slider = this.refs.slider; //what does this do
    if (plusNext >= totalItems) { //if you overflow the row
      resetStartId = 0;// plusNext - totalItems; 
    } else {
      resetStartId = plusNext;
    }
    this.setState({
      startId: resetStartId,
      moving: true,
      click: true
    });

    if (!click) { 
      $(slider).css({
        transform: "translate3d(-100%,0,0)"
      });
      setTimeout(() => {
        //cant transform translate for 750ms
        $(slider).css({
          transform: "translate3d(-1" + mv + "%,0,0)"
        });
      }, 750);
    } else {
      $(slider).css({
        transform: "translate3d(-2" + mv + "%,0,0)"
      });
      setTimeout(() => {
        //cant transform translate for 750ms
        $(slider).css({
          transform: "translate3d(-1" + mv + "%,0,0)"
        });
      }, 750);
    }

    setTimeout(() => {
      this.setState({
        moving: false
      });
      this.updateSliderItems();
    }, 750);
  }

  render() {
    const { sliderItems, moving, click } = this.state;
    const sliderClass = classNames({
      sliderMask: true,
      moving
    });
    const { title, movies } = this.props;
    console.log(sliderItems)
    const rowOfMovies = sliderItems.map(movie => {
      return <MovieItem movie={movie} />;
    });
    return (
      <>
        <div className="wrapper">
          <h1 className="page-head">{title}</h1>
          <div className="slider">
            <div className={sliderClass} ref="slider">
              {rowOfMovies}
            </div>
            {click && (
              <div
                className="leftArrow arrow"
                ref="leftArrow"
                onClick={this.handleOnLeftArrowClick}
              >
                <i className="fas fa-chevron-left"></i>
              </div>
            )}

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
