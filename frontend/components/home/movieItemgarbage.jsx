import React from "react";



class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.handOnEnter = this.onEnter.bind(this);
    this.handOnLeave = this.onLeave.bind(this);
    // this.state = {
    //   hover: false
    // };
  }
  onEnter(){
    let item = this.refs.movieItem;
    let xRight = (window.width - (item.offset.left) + item.outerWidth()) < 70;
    let xLeft = item.offset.left < 70;

    let dir;
    if(xRight){
      dir = '-25%'
    } else if (xLeft){
      dir='25'
    } else{
      dir = '25'
    }

    $(item).css({
      'transform': 'translate3d(0,0,0) scale(1)',
      'z-index': '5'
    })
     $(this.refs.zoom).css({
       'transform': "translate3d(0,0,0) scale(.5)",
       "z-index": "5",
       'transition': "all .4s ease"
     });
    $(this.refs.coverFake).css({
      'transform': 'translate3d(0,0,0)',
      'opacity': '0',
      'transition-delay': '.2s',
      'transition': 'all .8s ease'
    })
  }

  onLeave(){
    $(this.refs.zoom).css({
      'transform': 'translate3d(0,0,0) scale(.5)',
      'z-index': '5',
    })
      $(this.refs.coverFake).css({
      'transform': 'translate3d(0,0,0)',
      'opacity': '0',
      'transition-delay': '0s',
      'transition': 'all .4=8s ease'
    })
    setTimeout(() => {
      $(this.refs.zoom).removeAttr('style')
      $(this.refs.coverFake).removeAttr('style')
    }, 800);
  }

  

render(){
    const {movie} = this.props;
    return (
      <div className="sliderItem" ref='movieItem' onMouseEnter={this.handOnEnter} onMouseLeave={this.handOnLeave}>
        <div className="sliderItemInner">
          <img className="cover" src={movie.cover} />

          <div className="zoom" ref='zoom'>
            <img className='zoomCover2' src={movie.cover} />
            <img className="zoomCover" src={movie.cover} ref='coverFake'/>
  
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
