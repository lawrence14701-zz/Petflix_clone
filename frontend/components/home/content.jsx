import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
       const movie = this.props.movie;
       const { cover, description, title } = movie;

    return (
      <div className="content">
        <div className="content__background">
          <div className="content__background__shadow" />
          <div
            className="content__background__image"
            style={{ "background-image": `url(${cover})` }}
          />
        </div>
        <div className="content__area">
          <div className="content__area__container">
            <div className="content__title">{title}</div>
            <div className="content__description">
              {description}
            </div>
          </div>
          <button className="content__close">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Content;
