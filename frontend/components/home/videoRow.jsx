import React from "react";

class VideoRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, movies } = this.props;
    const rowOfMovies = movies.map(movie => {
      return (
        <React.Fragment key={movie.id}>
          <div className="slider-item">
            <div className="slider-item-inner"></div>
          </div>
        </React.Fragment>
      );
    });
    return (
      <>
        <div className="wrapper">
          <div className="whole-slider">
            <h1 className="page-head">{title}</h1>
            {rowOfMovies}
          </div>
        </div>
      </>
    );
  }
}

export default VideoRow;
