import React from "react";
import style from "./slider.css";
import MovieItem from "./movieItem";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

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
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.updateSliderState.bind(this));
    }
  }

  updateSliderItems(baseShowItem = this.state.showItems) {
    let { totalItems, startId } = this.state;

    let centerDataId = [];
    for (let i = 0; i < baseShowItem; i++) {
      let x = startId + i;
      if (x < totalItems) {
        centerDataId.push(x);
      } else {
        centerDataId.push(x - totalItems);
      }
    }

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

    let rightDataId = [];
    for (let i = 0; i < baseShowItem + 1; i++) {
      let x = startId + baseShowItem + i;
      if (x < totalItems - baseShowItem + baseShowItem) {
        rightDataId.push(x);
      } else {
        rightDataId.push(x - totalItems);
      }
    }
    // console.log("left", leftDataId);
    // console.log("center", centerDataId);
    // console.log("right", rightDataId);
    let selectIds = [...leftDataId, ...centerDataId, ...rightDataId];
    let sliderItems = [];

    const { movies } = this.props;
    if (movies.length) {
      selectIds.map(e => {
        sliderItems.push(movies[e]);
      });
    }
    this.setState({
      sliderItems
    });
    // console.log(sliderItems)
  }

  updateSliderState() {
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
    let mv = 100 / showItems;
    this.setState({
      showItems,
      mv
    });
  }

  leftArrowClick() {
    console.log("left");
    const { showItems, startId, totalItems, mv } = this.state;
    let reducePrev = startId - showItems;
    let resetStartId = 0;
    if (reducePrev < 0) {
      resetStartId = reducePrev + totalItems;
    } else {
      resetStartId = reducePrev;
    }
    this.setState({
      startId: resetStartId,
      moving: true
    });
    setTimeout(() => {
      this.updateSliderItems();
    }, 400);
  }

  rightArrowClick() {
    console.log("right");
    const { showItems, startId, totalItems, mv } = this.state;
    let plusNext = startId + showItems;
    let resetStartId = 0;
    if (plusNext >= totalItems) {
      resetStartId = plusNext - totalItems;
    } else {
      resetStartId = plusNext;
    }
    this.setState({
      startId: resetStartId,
      moving: true
    });

    setTimeout(() => {
      this.updateSliderItems();
    }, 400);
  }

  render() {
    const { sliderItems, moving } = this.state;
    const sliderClass = cx({
      slider: true,
      moving
    });
    const { title } = this.props;
    const rowOfMovies = sliderItems.map(movie => {
      return <MovieItem key={movie.id} movie={movie} />;
    });
    return (
      <>
        <div className={style.wrapper}>
          <h1 className={style.pageHead}>{title}</h1>
          <div className={style.slider}>
            <div className={style.sliderMask} ref="slider">
              {rowOfMovies}
            </div>

            <div
              className={style.leftArrow}
              ref="leftArrow"
              onClick={this.handleOnLeftArrowClick}
            >
              <i className="fas fa-chevron-left"></i>
            </div>

            <div
              className={style.rightArrow}
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
