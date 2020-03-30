import React from "react";
import style from './slider.css';



class MovieItem extends React.Component {
  constructor(props) {
    super(props);
  }

render(){
    const {movie} = this.props
    return (
          <div className={style.sliderItem}>
            <div className={style.sliderItemInner}>
              <img className={style.cover} src={movie.cover} />
            </div>
          </div>
    );
  }
}

export default MovieItem;
