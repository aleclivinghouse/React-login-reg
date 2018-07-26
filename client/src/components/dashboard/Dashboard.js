import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profileActions';
import { Link } from 'react-router-dom';


class Dashboard extends Component{
  //getCurrentrRofile  triggers the GET_PROFILE reducer
  componentDidMount(){
    this.props.getCurrentProfile();
  }
  render(){
    const { user } = this.props.auth;
    const { profile, loading} = this.props.profile;


    let dashboardContent;
    if(profile === null || loading){
      dashboardContent = <h4>Loading...</h4>;
    } else {
    //check if logged in user has profile data
    if(Object.keys(profile).length > 0){
        dashboardContent = <h4>TODO: DISPLAY PROFILE</h4>
      } else {
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome { user.name }</p>
            <p>You have not yet set up a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
                Create Profile
            </Link>
          </div>
        );
      }
    }

    return(
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
                {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//WE need to bring in the profile state and the auth state
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
