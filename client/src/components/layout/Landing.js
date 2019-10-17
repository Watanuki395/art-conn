import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
//import ContactUs from './components/layout/ContactUs';

class Landing extends Component {

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing"> 
        <div className="dark-overlay landing-inner text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-3 mb-4">
                            Connecting Art Arround the World
                        </h1>
                        <p className="lead">
                            Crea un portafolio de proyectos, conecta con personas increibles y comparte tu experiencia.
                        </p>
                        <hr/>
                        <Link to="/register" 
                        className="btn btn-lg btn-info mr-2">
                        Sign Up
                        </Link>
                        <Link to="/login" 
                        className="btn btn-lg btn-light">
                        Login
                        </Link>
                        <footer className="page-footer orange">
                            <div className="container">
                              <div className="row">
                                <div className="col l6 s12">
                                  <h5 className="text-white">Bio</h5>
                                  <p className="text-white text-lighten-4">We are a team of entrepreneurs working on this project. Any feedback or support would help to continue the development on this project.</p>


                                </div>
                                <div className="col l3 s12">
                                  <h5 className="text-white">Artcon</h5>
                                  <ul>
                                    <li><a className="text-white" href="#!">Sobre Nosotros</a></li>
                                    <li><a className="text-white" href="#!">Contactanos</a></li>
                                    <li><a className="text-white" href="#!">Soporte</a></li>
                                    <li><a className="text-white" href="#!">Ayuda</a></li>
                                  </ul>
                                </div>
                                <div className="col l3 s12" >
                                  <h5 className="text-white">Contactanos</h5>
                                  <ul>
                                    <li><a className="text-white" align="left" href="#!"><i className="fab fa-facebook"/> Facebook</a></li>
                                    <li><a className="text-white" align="left" href="#!"><i className="fab fa-instagram"/> Instagram</a></li>
                                    <li><a className="text-white" align="left" href="#!"><i className="fab fa-twitter"/>Twitter</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </footer>
                    </div>     
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);