import React from "react";

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleEnter = this.hoverEffect.bind(this);
    this.state = {
      hover: false
    };
  }

  hoverEffect() {
    console.log("working");
  }

  render() {
    const { hover } = this.state;
    const { movie } = this.props;
    return (
      <div className="sliderItem">
        <div className="sliderItemInner">
          <img className={hover ? 'cover play': 'cover'} src={movie.cover} onMouseEnter={this.handleEnter} />
        </div>
      </div>
    );
  }
}

export default MovieItem;
