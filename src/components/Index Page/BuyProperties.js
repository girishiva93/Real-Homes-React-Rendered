import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class BuyProperties extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Buy_houses: []
//     };
//   }
//   componentDidMount() {
//     axios
//       .get(" http://localhost:8000/Buy_houses")
//       .then(response => {
//         return response.data;
//       })
//       .then(data => {
//         console.log(data);
//         this.setState({
//           Buy_houses: data.slice(0, 3)
//         });
//       });
//   }
//   render() {
//     const Buy_houses = this.state.Buy_houses;
//     const Buy_houseslist = Buy_houses.length ? (
//       <>
//         {Buy_houses.map(Buy_houses => (
//           <div className="col-md-3" key={Math.random()}>
//             <div className="card-properties">
//               <div className="card-image">
//                 <img src={"img/" + Buy_houses.image} alt="..." />
//                 <div className="card-image_hover">
//                   <Link className="animated fadeInUp" to={Buy_houses.path}>
//                     View Property
//                   </Link>
//                 </div>
//               </div>
//               <div className="properties-detail">
//                 <h3>{Buy_houses.title}</h3>
//                 <p>{Buy_houses.description}</p>
//                 <div className="properties-room">
//                   <span className="bedroom">
//                     Bedroom
//                     <br />
//                     <i class="fas fa-bed" style={{ width: "35px" }}></i>
//                     {Buy_houses.bedroom}
//                   </span>
//                   <span className="bathroom">
//                     Bathroom
//                     <br />
//                     <i class="fas fa-shower" style={{ width: "35px" }}></i>
//                     {Buy_houses.bathroom}
//                   </span>
//                   <span className="area">
//                     Area
//                     <br />
//                     <i class="fas fa-layer-group" style={{ width: "35px" }}></i>
//                     {Buy_houses.area}
//                     <span className="properties-unit">
//                       {Buy_houses.area_unit}
//                     </span>
//                   </span>
//                 </div>
//                 <div className="properties-price">
//                   For Buy
//                   <br />
//                   <span>{Buy_houses.price}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </>
//     ) : (
//       <div className="center">No Post to Display</div>
//     );
//     return (
//       <section className="recent-properties">
//         <div className="container">
//           <h6 className="rp-subtitle">Recent</h6>
//           <h1 className="rp-title">Properties</h1>
//           <p className="rp-description">
//             Check out some of our latest properties to Buy.
//           </p>
//           <div className="go_property">
//             <div className="latest_properties">
//               <h2>Latest Properties</h2>
//             </div>
//             <div className="view_property">
//               <span className="view_all">
//                 <Link to="/property">All Property></Link>
//               </span>
//             </div>
//           </div>
//           <div className="row">{Buy_houseslist}</div>
//         </div>
//       </section>
//     );
//   }
// }
  render() {
    return (
      <React.Fragment>
        <section className="recent-properties">
          <div className="container">
            <h6 className="rp-subtitle">Recent</h6>
            <h1 className="rp-title">Properties</h1>
            <p className="rp-description">
              Check out some of our latest properties to buy.
            </p>
            <div className="go_property">
              <div className="latest_properties">
                <h2>Latest Properties</h2>
              </div>
              <div className="view_property">
                <span className="view_all">
                  <Link to="../Real Homes(Property Page)/index.html">
                    All Property>
                  </Link>
                </span>
              </div>
            </div>
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
                      <Link className="animated fadeInUp" to="/merrick">
                        View Property
                      </Link>
                    </div>
                  </div>
                  <div className="properties-detail">
                    <h3>Home in Merrick Way</h3>
                    <p>
                      Enchanting three bedroom, three bath home with spacious
                      one bedroom, one bath…
                    </p>
                    <div className="properties-room">
                      <span className="bedroom">
                        Bedroom
                        <br />
                        <i class="fas fa-bed" style={{ width: "35px" }}></i>3
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
                          class="fas fa-layer-group"
                          style={{ width: "35px" }}
                        ></i>
                        4300<span className="properties-unit"> Sq Ft</span>
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
                      <Link className="animated fadeInUp" to="/coralGables">
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
                        <i class="fas fa-bed" style={{ width: "35px" }}></i>3
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
                          class="fas fa-layer-group"
                          style={{ width: "35px" }}
                        ></i>
                        4300<span className="properties-unit"> Sq Ft</span>
                      </span>
                    </div>
                    <div className="properties-price">
                      For Sale
                      <br />
                      <span>$825,000 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-properties">
                  <div className="card-image">
                    <img
                      className="property-03"
                      src="img/property-03.jpg"
                      alt="..."
                    />
                    <div className="card-image_hover">
                      <Link
                        className="animated fadeInUp"
                        to="/HollywoodBoulevard"
                      >
                        View Property
                      </Link>
                    </div>
                  </div>
                  <div className="properties-detail">
                    <h3>Villa on Hollywood Boulevard</h3>
                    <p>
                      The very best waterfront location in Harbor Islands
                      complete with private dock…
                    </p>
                    <div className="properties-room">
                      <span className="bedroom">
                        Bedroom
                        <br />
                        <i class="fas fa-bed" style={{ width: "35px" }}></i>3
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
                          class="fas fa-layer-group"
                          style={{ width: "35px" }}
                        ></i>
                        4300<span className="properties-unit"> Sq Ft</span>
                      </span>
                    </div>
                    <div className="properties-price">
                      For Sale
                      <br />
                      <span>$740,000 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 responsive_only">
                <div className="card-properties">
                  <div className="card-image">
                    <img
                      className="property-04"
                      src="img/property-04(extra).jpg"
                      alt="..."
                    />
                    <div className="card-image_hover">
                      <Link
                        className="animated fadeInUp"
                        to="/traditionalRestaurant"
                      >
                        View Property
                      </Link>
                    </div>
                  </div>
                  <div className="properties-detail">
                    <h3>Traditional Food Restaurant</h3>
                    <p>
                      We are an award winning and very unique concept inspired
                      by street…
                    </p>
                    <div className="properties-room">
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
                          class="fas fa-layer-group"
                          style={{ width: "35px" }}
                        ></i>
                        4300<span className="properties-unit"> Sq Ft</span>
                      </span>
                    </div>
                    <div className="properties-price">
                      For Sale
                      <br />
                      <span>$600,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
