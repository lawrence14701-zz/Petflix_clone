import React from "react";



class MovieItem extends React.Component {
  constructor(props) {
    super(props);
  }

render(){
    const {movie} = this.props
    return (
      <div className="sliderItem">
        <div className="sliderItemInner">
          <img className="cover" src={movie.cover} />

          <div className="zoom">
            <img className="zoomCover" src={movie.cover} />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
