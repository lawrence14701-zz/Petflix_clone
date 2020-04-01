import React from "react";
import SliderItem from "./sliderItem";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnLeftArrowClick = this.leftArrowClick.bind(this);
    this.handleOnRightArrowClick = this.rightArrowClick.bind(this);
  }

  leftArrowClick(){
console.log('left')
  }

  rightArrowClick(){
console.log("right");

  }

  render() {
    const { title, movies } = this.props;
    return (
      <div className="wrapper">
        <h1 className="pageHead">{title}</h1>
        <div className="slider">
          <div className="sliderMask">
            {movies.map((e, i) => {
              return <SliderItem key={i} movie={e} />;
            })}
          </div>
          <div className="leftArrow arrow" ref="leftArrow" onClick={this.handleOnLeftArrowClick}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="rightArrow arrow" ref="rightArrow" onClick={this.handleOnRightArrowClick}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
