import React from 'react';
import SignUp from './images/SignUp.png'

const NavBar = () => {
  const navBarStyle = {
    width: '1728px',
    height: '110px',
    backgroundColor: '#F5F3F5',
    position: 'relative', // Set the position of the navbar to relative
    // Add other styles like margin, padding, text color, etc. as needed
  };

  const menuStyle = {
    position: 'absolute',
    right: '650px',
    bottom: '20px',
    display: 'flex', // Setting display to 'flex' to use flex layout
    alignItems: 'flex-start', // Align items at the start (top) of the flex container
    gap: '62px', // Add a gap of 62px between the child elements
  };

  const menuItemStyle1 = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter', 
    fontSize: '24px', 
    fontStyle: 'normal', 
    fontWeight: 400, 
    lineHeight: 'normal',
    width: '110px',
    height: '45px',
    // Add other styles as needed
  }

  const menuItemStyle2 = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter', 
    fontSize: '24px', 
    fontStyle: 'normal', 
    fontWeight: 400, 
    lineHeight: 'normal',
    width: '120px',
    height: '45px',
    // Add other styles as needed
  }

  const menuItemStyle3 = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter', 
    fontSize: '24px', 
    fontStyle: 'normal', 
    fontWeight: 400, 
    lineHeight: 'normal',
    width: '130px',
    height: '45px',
    // Add other styles as needed
  }

  const menuItemStyle4 = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter', 
    fontSize: '24px', 
    fontStyle: 'normal', 
    fontWeight: 400, 
    lineHeight: 'normal',
    width: '97px',
    height: '45px',
    // Add other styles as needed
  }

  const SignUpStyle = {
    backgroundColor: '#344055', // Add the blue background color
    color: '#fff', // Change text color to white for better visibility
    padding: '8px 16px', // Add padding to create the box effect
    borderRadius: '8px', // Add rounded corners to the box
    display: 'flex', // Use flex layout to align the avatar and label
    alignItems: 'center', // Center align the items vertically
    gap: '5px',
  }

  const MenuStyle2 = {
    position: 'absolute',
    right: '400px',
    bottom: '29px',
    display: 'flex', // Setting display to 'flex' to use flex layout
    alignItems: 'center',
    gap: '20px', // Add a gap of 62px between the child elements
    fontFamily: 'Inter',
  }

  const LogInStyle = {
    marginLeft: '20px',
    fontWeight: 700,
  }


  return (
    <div className="navbar" style={navBarStyle}>
      {/* Add your navigation links and content here */}
      <a href="/">Logo</a>

      {/* Menu container */}
      <div style={menuStyle}>
        <a href='/Programs' style={menuItemStyle1}>Programs</a>
        <a href='/Resources' style={menuItemStyle2}>Resources</a>
        <a href='/About' style={menuItemStyle3}>About Us</a>
        <a href='/Connect' style={menuItemStyle4}>Connect</a>
        {/* Add other menu items or components as needed */}
      </div>
    <div style={MenuStyle2}>
        <a style={LogInStyle}>Log In</a>
        <div style={SignUpStyle}>
            <a>Sign Up</a>
            <img 
            src={SignUp}
            alt='Sign Up Avatar'
            style={{marginRight: '8px', width: '24px', height: '24px'}}></img>
        </div>
    </div>

    </div>
  );
};

export default NavBar;
