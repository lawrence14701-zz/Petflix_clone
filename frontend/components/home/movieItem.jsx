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
          <div className="zoom">
            <img className="cover" src={movie.cover} />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
