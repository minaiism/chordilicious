import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
  //TODO: convert state to useState() (Hooks)
  state = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    picture: ''
  };

  componentClicked = () => {
    console.log('clicked');
  };

  responseFacebook = response => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  render() {
    let facebookContent;
    //TODO: get rid of inline styling (convert to styled components instead)
    if (this.state.isLoggedIn) {
      facebookContent = (
        <div
          style={{
            width: '100%',
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            style={{ borderRadius: '50%' }}
            src={this.state.picture}
            alt={this.state.name}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <h5
              style={{
                padding: '0.3rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '100'
              }}
            >
              <span style={{ fontWeight: 900 }}>{this.state.name}</span>'s
              account
            </h5>
          </div>
        </div>
      );
    } else {
      facebookContent = (
        <FacebookLogin
          appId="2473947552663016"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{facebookContent}</div>;
  }
}

export default Facebook;
