import React, { Component } from "react";

//imports needed for the redux store mapping
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//import action for this component
import { fetchServices } from "../actions/fetchServices";

class Services extends Component {
  //--------- life-cycle functions
  //   componentDidMount() {
  //     //
  //     fetchTestimonials();
  //   }

  render() {
    return (
      <section className="articles">
        <h1> Services</h1>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper.
        </p>
        {this.props.fetchServices.map((service) => {
          return (
            <div className="cards" key={service}>
              <div>
                <div className="icons">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <p className="content-title">Aenean quis</p>
                  <p>{service}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

//-----------------mapping
function mapStateToProps(state) {
  return {
    fetchServices: state.FETCH_SERVICES.fetchServices,
  };
}

function matchDispatchToProps(dispatch) {
  //match the action imported to a new prop
  return bindActionCreators({ fetchServicesAction: fetchServices }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Services);
