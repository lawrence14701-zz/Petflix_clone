 import React from "react";
import {Link} from 'react-router-dom';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchOn: [true, false, false]
    };
    this.switchOnOff = this.switchOnOff.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  demoUser(e) {
    e.preventDefault();
    const demoUser = {
      username: "demoUser",
      password: "password"
    };
    this.props.processForm(demoUser);
    this.props.history.push(`/browse`);
  }

  switchOnOff(index) {
    let switches = [false, false, false];
    return () => {
      switches[index] = true;
      this.setState({ switchOn: switches });
    };
  }

  render() {
    return (
      <>
        <header className="showcase">
          <div className="showcase-top">
            <img src={window.logo} alt="logo" />
            <Link to="/login" className="btn btn-rounded">
              Sign In
            </Link>
          </div>
          <div className="showcase-content">
            <h1>See what's next</h1>
            <p>Watch anywhere. Cancel anytime</p>
            <a href="" className="btn btn-xl" onClick={this.demoUser}>
              Click here for a Demo
              <i className="fas fa-chevron-right btn-icon"></i>
            </a>
          </div>
        </header>

        <section className="tabs">
          <div className="container">
            <div
              id="tab-1"
              className={
                this.state.switchOn[0] ? "tab-item tab-border" : "tab-item"
              }
              onClick={this.switchOnOff(0)}
            >
              <i className="fas fa-paw fa-3x"></i>
              <p className="hide-sm">Cancel Anytime</p>
            </div>
            <div
              id="tab-2"
              className={
                this.state.switchOn[1] ? "tab-item tab-border" : "tab-item"
              }
              onClick={this.switchOnOff(1)}
            >
              <i className="fas fa-bone fa-3x"></i>
              <p className="hide-sm">Watch Anywhere</p>
            </div>
            <div
              id="tab-3"
              className={
                this.state.switchOn[2] ? "tab-item tab-border" : "tab-item"
              }
              onClick={this.switchOnOff(2)}
            >
              <i className="fas fa-dog fa-3x"></i>
              <p className="hide-sm">Pick your price</p>
            </div>
          </div>
        </section>

        <section className="tab-content">
          {/* TAB ONE CONTENT */}
          <div className="container">
            <div
              id="tab-1-content"
              className={
                this.state.switchOn[0] ? "tab-item-content" : "hide-tab-item"
              }
            >
              <div className="tab-1-content-inner">
                <div>
                  <p className="text-lg text-center">Watch everywhere.</p>
                  <p className="text-center">
                    Stream unlimited pet movies and pet TV shows on your phone,
                    tablet, laptop, and TV without paying more.
                  </p>
                </div>
                <img className='tab-image' src={window.tabContentOne} alt="content-1" />
              </div>
            </div>

            {/* TAB TWO CONTENT */}
            <div
              id="tab-2-content"
              className={
                this.state.switchOn[1] ? "tab-item-content" : "hide-tab-item"
              }
            >
              <div className="tab-2-content-inner">
                <div>
                  <p className="text-lg text-center">
                    Browse the latest pet films.
                  </p>
                  <p className="text-center">
                    Search through endless amounts of pet films until you find
                    the right one.
                  </p>
                </div>
                <img className='tab-image' src={window.tabContentTwo} alt="content-1" />
              </div>
            </div>

            {/* TAB 3 CONTENT */}
            <div
              id="tab-3-content"
              className={
                this.state.switchOn[2] ? "tab-item-content" : "hide-tab-item"
              }
            >
              <div className="text-center">
                <p className="text-lg">
                  Choose one plan and watch everything on Petflix.
                </p>
                <a href="#" className="btn btn-lg" onClick={this.demoUser}>
                  Click for A Demo
                </a>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Pupperino</th>
                    <th>Purrfect</th>
                    <th>Pugtastic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monthly price after free month ends</td>
                    <td>$1.00</td>
                    <td>$2.00</td>
                    <td>$3.00</td>
                  </tr>
                  <tr>
                    <td>Puppies in HD</td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Puppies in Ultra HD</td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Screens you can watch puppies on at the same time</td>
                    <td>1</td>
                    <td>2</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Watch on your laptop, TV, phone and tablet</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Unlimited short films of pets</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Cancel anytime</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>First month free</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>Designed by Lawrence Nicastro</p>
          <div className="footer-cols">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/lawrencenicastro">
                  <span>LinkedIn </span>
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
}

export default WelcomePage;
