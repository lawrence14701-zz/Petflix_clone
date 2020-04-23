import React from "react";
import { Link } from "react-router-dom";

class SliderItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePreview = this.previewMovie.bind(this);
    this.addToList = this.addToList.bind(this);
    this.showLogo = this.showLogo.bind(this);

    this.state = {
      playingPreview: false,
      shouldAddToList: null,
    };

  }

 
  componentDidMount() {
    this.props.getList();
  }

  handleSubmit() {
    const { onOpen, movie } = this.props;
    onOpen(movie);
  }


  addToList(){
  const { addToList, movie, deleteListItem } = this.props;
    const {shouldAddToList} = this.state;
    if(shouldAddToList){
      deleteListItem(movie.id);
      this.setState({ shouldAddToList: false });
    }else{
      addToList(movie.id);
      this.setState({ shouldAddToList: true });
    }
  }

  previewMovie(e) {
    this.props.toggleBillBoard('false'); //stop billboard from playing
    const { playingPreview } = this.state;
    const video = e.target;
    if (!playingPreview) {
      video.play();
      video.muted = false;
      //hovering over one movie set state to hovering
      this.props.hovering()
    } else {
      video.pause();
      video.currenttime = 0;
      video.load();
      video.muted = true;
      this.props.hovering();

    }
    this.setState({ playingPreview: !playingPreview}); //toggles between playing 
  }

  showLogo(){
    const {myList, movie} = this.props;
    const {shouldAddToList} = this.state;
    if(shouldAddToList === null){
      const isInList = myList.filter((item) => item.movie_id === movie.id).length > 0;
      this.setState({shouldAddToList: isInList})
      if(isInList){
        return "fas fa-check-circle";
      } else {
        return 'fas fa-plus-circle"';
      }
    }

    if(this.state.shouldAddToList){
      return 'fas fa-plus-circle"';
    }else{
        return "fas fa-check-circle";
    }
  }
  componentDidUpdate(prevProps,prevState){
    const {movie,myList} = this.props;
    if(prevProps.myList !== myList){
      const checkIfInList = myList.filter((item) => item.movie_id === movie.id).length > 0
      this.setState({shouldAddToList: checkIfInList})
    }
  }


  

  render() {
    
    const { movie, myList, isContentOpen } = this.props; //so if isContentOpen is not null then we want to prevent hover effect and also apply the white border
    console.log(myList)
    const { cover, title, video } = movie;
    const { shouldAddToList} = this.state;
    const checkIfInList = myList.filter((item) => item.movie_id === movie.id).length > 0;
    const isInList = shouldAddToList === null ? checkIfInList : shouldAddToList;
    const duration = `${Math.floor(video.length / 60)} min ${
      video.length % 60
    } sec`;
    return (
      <div className="sliderItem">
        <div className="sliderItemInner">
          <img ref='sliderItem' className="cover" src={cover} />
          <div className="preview">
            <video
              muted
              className="playVideo"
              src={video}
              onMouseEnter={(event) => this.handlePreview(event)}
              onMouseLeave={(event) => this.handlePreview(event)}
            />
            <Link to={`/watch/${movie.id}`}>
              <div className="play">
                <i className="far fa-play-circle"></i>
              </div>
            </Link>
            <div className="info">
              <h3 className="movieTitle">{title}</h3>
              <h3 className="age">TV-14</h3>
              <h3 className="duration">{duration}</h3>
            </div>
            <div className="myList" onClick={this.addToList}>
              <i className={!isInList ? "fas fa-plus-circle": "fas fa-check-circle"}></i>
            </div>
            <button className="openContent" onClick={this.handleSubmit}>
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderItem;
