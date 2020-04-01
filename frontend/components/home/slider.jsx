import React from "react";
import SliderItem from "./sliderItem";

class Slider extends React.Component {
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
  }
  leftArrowClick() {
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
      moving: true
    });

    $(slider).css({
      transform: "translate3d(-" + mv + "%,0,0)"
    });
    setTimeout(() => {
      $(slider).css({
        transform: "translate3d(-1" + mv + "%,0,0)"
      });
    }, 750);

    setTimeout(() => {
      this.setState({
        moving: false
      });
      this.updateSliderItems();
    }, 750);
  }

  rightArrowClick() {
    const { showItems, startId, totalItems, mv, click } = this.state;
    let plusNext = startId + showItems;
    let resetStartId = 0;
    let slider = this.refs.slider;
    if (plusNext >= totalItems) {
      resetStartId = plusNext - totalItems;
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
        transform: "translate3d(-100%, 0, 0)"
      });
      setTimeout(() => {
        $(slider).css({
          transform: "translate3d(-1" + mv + "%, 0, 0)"
        });
      }, 750);
    } else {
      $(slider).css({
        transform: "translate3d(-2" + mv + "%, 0, 0)" //why does this only get applied the first time and not after?
      });
      setTimeout(() => {
        $(slider).css({
          transform: "translate3d(-2" + mv + "%, 0, 0)"
        });
      }, 750);
      setTimeout(() => {
        this.setState({
          moving: false
        });
        this.updateSliderItems();
      }, 750);
    }
  }
  render() {
    const { title } = this.props;
    const { sliderItems, click, moving } = this.state;
    return (
      <div className="wrapper">
        <h1 className="pageHead">{title}</h1>
        <div className="slider">
          <div
            className={moving ? "moving sliderMask" : "sliderMask"}
            ref="slider"
          >
            {sliderItems.map((e, i) => {
              return <SliderItem key={i} movie={e} />;
            })}
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
    );
  }
}

export default Slider;
