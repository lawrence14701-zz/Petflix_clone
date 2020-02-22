import React from 'react';




class WelcomePage extends React.Component {

        ".tab-item"



    render(){
        var self = this
        return (
          <>
            <header className="showcase">
              <div className="showcase-top">
                {/* $$$TODO add logo */}
                <h1>Petflix</h1>
                <a href="" className="btn btn-rounded">
                  Sign In
                </a>
              </div>
              <div className="showcase-content">
                <h1>See what's next</h1>
                <p>watch anywhere. Cancel anytime</p>
                <a href="" className="btn btn-xl">
                  watch free for 30 days{" "}
                  <i className="fas fa-chevron-right btn-icon"></i>
                </a>
              </div>
            </header>

            <section className="tabs">
              <div className="container">
                <div id="tab-1" className="tab-item tab-border">
                  <i className="fas fa-door-open fa-3x"></i>
                  <p className="hide-sm">Cancel Anytime</p>
                </div>
                <div id="tab-2" className="tab-item">
                  <i className="fas fa-tablet-alt fa-3x"></i>
                  <p className="hide-sm">Watch Anywhere</p>
                </div>
                <div id="tab-3" className="tab-item">
                  <i className="fas fa-tags fa-3x"></i>
                  <p className="hide-sm">Pick your price</p>
                </div>
              </div>
            </section>

            <section className="tab-content">
              {/* TAB ONE CONTENT */}
              <div className="container">
                <div id="tab-1-content" className="tab-content-item show">
                  <div className="tab-2-content-inner">
                    <div>
                      <p className="text-lg text-center">Watch everywhere.</p>
                      <p className="text-center">
                        Stream unlimited movies and TV shows on your phone,
                        tablet, laptop, and TV without paying more.
                      </p>
                    </div>
                    <img src={window.tabContentOne} alt="content-1" />
                  </div>
                </div>

                {/* TAB TWO CONTENT */}
                <div id="tab-2-content" className="tab-content-item show">
                  <div className="tab-2-content-inner">
                    <div>
                      <p className="text-lg text-center">Watch everywhere.</p>
                      <p className="text-center">
                        Stream unlimited movies and TV shows on your phone,
                        tablet, laptop, and TV without paying more.
                      </p>
                    </div>
                    <img src={window.tabContentOne} alt="content-1" />
                  </div>
                </div>

                {/* TAB 3 CONTENT */}
                <div id="tab-3-content" class="tab-content-item">
                  <div class="text-center">
                    <p class="text-lg">
                      Choose one plan and watch everything on Netflix.
                    </p>
                    <a href="#" class="btn btn-lg">
                      Watch Free For 30 Days
                    </a>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Basic</th>
                        <th>Standard</th>
                        <th>Premium</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Monthly price after free month ends on 6/19/19</td>
                        <td>$8.99</td>
                        <td>$12.99</td>
                        <td>$15.99</td>
                      </tr>
                      <tr>
                        <td>HD Available</td>
                        <td>
                          <i class="fas fa-times"></i>
                        </td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Ultra HD Available</td>
                        <td>
                          <i class="fas fa-times"></i>
                        </td>
                        <td>
                          <i class="fas fa-times"></i>
                        </td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Screens you can watch on at the same time</td>
                        <td>1</td>
                        <td>2</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td>Watch on your laptop, TV, phone and tablet</td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Unlimited movies and TV shows</td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Cancel anytime</td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>First month free</td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                        <td>
                          <i class="fas fa-check"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <footer className="footer">
              <p>Questions call 347-617-2607</p>
              <div className="footer-cols">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/lawrencenicastro">
                      <span>LinkedIn </span>
                      <i class="fab fa-linkedin"></i>
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