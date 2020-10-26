import React, { Component } from 'react';
import Login from './Login';
import { Oaths } from './Oaths';
import '../../styles/login.scss';
import Nav1 from './Nav1';


class Loginform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pos: false,
            issignup: false,
            glog: 0,
            greg: 0,
        }
    }

    googleauthentication = (name, email) => {
        let username = email.replace(/@[^@]+$/, '');
        fetch(this.props.backend_url + '/gauth', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                username: username
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'sucess') {
                    this.props.loaduser(data);
                    this.props.signclick('home');
                }
                else {
                    this.setState({ greg: 1, glog: 1 });
                }
            })
            .catch(err => console.log('error fetching token'))
    }


    render() {
        return (
            <>
                <Nav1/>
                <div className = 'loginform-container'> 
                    <div className="wrapper">
                        <div className={`login-text expand ll`}>
                            <div className={`text show-hide fl`}>
                                <div className='show-hide'>
                                    <div className={`leftside showhide`}>
                                        <Login glog={this.state.glog} backend_url={this.props.backend_url} loaduser={this.props.loaduser} signclick={this.props.signclick} />
                                    </div>
                                </div>
                                <div className='mid show-hide'>
                                    <div className='vl'></div>
                                    <h3 className='lh'>OR</h3>
                                </div>
                                <div className={`show-hide rightside`}>
                                    <Oaths googleauthentication={this.googleauthentication} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Loginform;
