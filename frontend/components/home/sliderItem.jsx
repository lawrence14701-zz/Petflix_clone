import React from "react";
import Slider from "./slider";

class SliderItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {movie} = this.props
      const cover = movie.cover
    return (
      <div className="sliderItem">
        <div className="sliderItemInner">
          <img className="cover" src={cover} />
        </div>
      </div>
    );
  }
}

export default SliderItem;
