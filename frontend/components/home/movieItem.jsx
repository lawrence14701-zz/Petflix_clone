import React from "react";



class MovieItem extends React.Component {
  constructor(props) {
    super(props);
  }

render(){
    const {movie} = this.props
    return (
          <div className="slider-item">
            <div className="slider-item-inner">
              <img className="cover" src={movie.cover} />
            </div>
          </div>
    );
  }
}

export default MovieItem;
