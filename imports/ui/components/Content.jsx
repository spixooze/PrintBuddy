import React from 'react';

import LoginContainer from "../containers/LoginContainer";

export default class Content extends React.Component {
    componentDidMount() {

    }
    popLoginModal() {
        $('#login-modal').openModal('open');
    }
    render() {
        return (
            <div className="start-page">
                <div className="row">
                    <div className="col s12 m12 l12 grid-example content-first" id="first-row">
                        <h1>Welcome to PrintBuddy</h1>
                        <a href="/register"className="waves-effect waves-light btn-large sign-up">SIGN UP</a>
                        <h5><a onClick={this.popLoginModal}>Already have an account? Sign in here.</a></h5>
                        <div className="arrow bounce">
                            <a className="fa fa-arrow-down fa-2x" href="#second-row"></a>
                        </div>
                    </div>
                    <div className="row two">
                        <div className="col m6 s12 grid-example content-second left" id="second-row">
                            <div className="text-wrapper left">
                                <h4>Heading</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className="img-wrapper hide-on-large-only">
                                        <img src="https://static.pexels.com/photos/7075/people-office-group-team.jpg"/>
                                    </div>
                            </div>
                            <div className="arrow bounce">
                                <a className="fa fa-arrow-down fa-2x" href="#third-row"></a>
                            </div>
                        </div>
                        <div className="col m6 s12 grid-example content-second right hide-on-med-and-down">
                            <div className="img-wrapper right">
                                <img src="https://static.pexels.com/photos/7075/people-office-group-team.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="row two">
                        <div className="col m6 s12 grid-example content-second left hide-on-med-and-down" id="third-row">
                            <div className="img-wrapper left">
                                <img src="https://static.pexels.com/photos/48734/pexels-photo-48734.jpeg" />
                            </div>
                        </div>
                        <div className="col m6 s12 grid-example content-second right">
                            <div className="text-wrapper right">
                                <h4>Heading</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="arrow bounce">
                                <a className="fa fa-arrow-down fa-2x" href="#fourth-row"></a>
                            </div>
                        </div>
                    </div>
                    <div className="row two">
                        <div className="col m6 s12 grid-example content-second left" id="fourth-row">
                            <div className="text-wrapper left">
                                <h4>Heading</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>

                        </div>
                        <div className="col m6 s12 grid-example content-second right hide-on-med-and-down">
                            <div className="img-wrapper right" >
                                <img src="https://static.pexels.com/photos/33488/navigation-car-drive-road.jpg"/>
                            </div>
                        </div>
                        <div className="arrow bounce">
                            <a className="fa fa-arrow-down fa-2x" href="#fifth-row"></a>
                        </div>
                    </div>
                </div>
                <div id="login-modal" className="modal login-modal">
                    <div className="modal-content">
                        <LoginContainer/>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
            </div>
        );
    }
}
