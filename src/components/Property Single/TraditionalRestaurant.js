import React, { Component } from "react";
import "../../css/PorpertySingle css/style.css";
import "../../css/PorpertySingle css/responsive.css";
import { Link } from "react-router-dom";

export default class PropertySingle extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <section id="property-single">
        <div className="container">
          <div className="property-topic">
            <div className="property-name">
              <h2>Traditional Food Restaurant</h2>
              <p>Sunset Drive, Miami, FL, USA</p>
              <p className="location">Home > Miami</p>
            </div>
            <div className="property-price">
              <p>
                For Sale
                <br />
                <span>$600,000</span>
              </p>
            </div>
          </div>
          <div className="property-image">
            <figure className="house-image">
              <img src="img/property-04(extra).jpg" alt="..." />
            </figure>
          </div>

          <div className="content">
            <div className="content-left">
              <div className="property-background">
                <h2>Traditional Food Restaurant</h2>
                <div className="property-interior">
                  <span className="bathroom">
                    Bathroom
                    <br />
                    <i class="fas fa-shower" style={{ width: "35px" }}></i>3
                  </span>
                  <span className="area">
                    Area
                    <br />
                    <i
                      className="fal fa-vector-square"
                      style={{ width: "35px" }}
                    ></i>
                    950<span className="properties-unit"> Sq Ft</span>
                  </span>
                  <span className="calender">
                    Year Built
                    <br />
                    <i
                      className="fas fa-calendar-alt"
                      style={{ width: "35px" }}
                    ></i>
                    2017
                  </span>
                </div>
                <div className="property-description">
                  <h3>Description</h3>
                  <p>
                    We are an award winning and very unique concept inspired by
                    street food – Burgers + Kebabs and have elevated it to a
                    modern day experience. Using the freshest of ingredients,
                    custom meat blends, and unique flavors we pride ourselves on
                    sourcing the highest quality products and carefully crafting
                    each plate for an unforgettable experience.
                  </p>
                </div>
                <div className="additional-description">
                  <h4>Additional Description</h4>
                  <p>
                    <strong> DINING AREA:</strong> Breakfast Counter/Bar,
                    Living/Dining Combo
                  </p>
                  <p>
                    <strong> DOORS & WINDOWS:</strong> Bay Window
                  </p>
                  <p>
                    <strong> ENTRY LOCATION:</strong> Mid Level
                  </p>
                  <p>
                    <strong> EXTERIOR CONSTRUCTION:</strong> Wood
                  </p>
                  <p>
                    <strong> FIREPLACE FUEL:</strong> Pellet Stove
                  </p>
                  <p>
                    <strong> FIREPLACE LOCATION:</strong> Living Room
                  </p>
                  <p>
                    <strong> FLOORS:</strong> Raised Foundation, Vinyl Tile,
                    Wall-to-Wall Carpet, Wood
                  </p>
                </div>
              </div>
            </div>

            <div className="content-right">
              <div className="agent-background">
                <figure className="agent-image">
                  <img src="img/agent-4.jpg" alt="..." />
                </figure>

                <div className="agent-name">
                  <Link to="#">Melissa William</Link>
                </div>

                <div className="agent-contact">
                  <p>
                    Office:<Link to="#">+54 356 945234</Link>
                  </p>
                  <p>
                    Mobile:<Link to="#">+54 356 945234</Link>
                  </p>
                  <p>
                    Fax:<Link to="#">+54 356 945234</Link>
                  </p>
                  <p className="whatsapp">
                    WhatsApp:<Link to="#">+54 356 945234</Link>
                  </p>
                  <p>
                    Email:<Link to="#"> agents@example.com</Link>
                  </p>
                </div>
              </div>
              <div className="featured-right">
                <h3>Featured Properties</h3>

                <div className="row">
                  <div className="col-md-3">
                    <div className="card-properties">
                      <div className="card-image">
                        <img
                          className="property-01"
                          src="img/property-01.jpg"
                          alt="..."
                        />
                        <div className="card-image_hover">
                          <Link
                            className="animated fadeInUp"
                            to="../Property Single/merrick-way.html"
                          >
                            View Property
                          </Link>
                        </div>
                      </div>
                      <div className="properties-detail">
                        <h3>Home in Merrick Way</h3>
                        <p>
                          Enchanting three bedroom, three bath home with
                          spacious one bedroom, one bath…
                        </p>
                        <div className="properties-room">
                          <span className="bedroom">
                            Bedroom
                            <br />
                            <i
                              className="fad fa-bed-alt"
                              style={{ width: "35px" }}
                            ></i>
                            3
                          </span>
                          <span className="bathroom">
                            Bathroom
                            <br />
                            <i
                              className="fal fa-shower"
                              style={{ width: "35px" }}
                            ></i>
                            3
                          </span>
                          <span className="area">
                            Area
                            <br />
                            <i
                              className="fal fa-vector-square"
                              style={{ width: "35px" }}
                            ></i>
                            4300
                            <span className="properties-unit"> Sq Ft</span>
                          </span>
                        </div>

                        <div className="properties-price">
                          For Sale
                          <br />
                          <span>$540,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card-properties">
                      <div className="card-image">
                        <img
                          className="property-02"
                          src="img/property-02.jpg"
                          alt="..."
                        />
                        <div className="card-image_hover">
                          <Link
                            className="animated fadeInUp"
                            to="../Property Single/coral-gables.html"
                          >
                            View Property
                          </Link>
                        </div>
                      </div>
                      <div className="properties-detail">
                        <h3>Villa in Coral Gables</h3>
                        <p>
                          Enjoy serenity of Deering Bay whole day from this
                          spectacular North and…
                        </p>
                        <div className="properties-room">
                          <span className="bedroom">
                            Bedroom
                            <br />
                            <i
                              className="fad fa-bed-alt"
                              style={{ width: "35px" }}
                            ></i>
                            3
                          </span>
                          <span className="bathroom">
                            Bathroom
                            <br />
                            <i
                              className="fal fa-shower"
                              style={{ width: "35px" }}
                            ></i>
                            3
                          </span>
                          <span className="area">
                            Area
                            <br />
                            <i
                              className="fal fa-vector-square"
                              style={{ width: "35px" }}
                            ></i>
                            4300
                            <span className="properties-unit"> Sq Ft</span>
                          </span>
                        </div>

                        <div className="properties-price">
                          For Sale
                          <br />
                          <span>$540,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
