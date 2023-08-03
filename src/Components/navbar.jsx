import React from 'react';

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

  const LogInStyle = {
    width: '100px',
    height: '38px',
    position: 'absolute',
    right: '261px',
    bottom: '31px',
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  }

  return (
    <div className="navbar" style={navBarStyle}>
      {/* Add your navigation links and content here */}
      <a href="/">Logo</a>

      {/* Menu container */}
      <div style={menuStyle}>
        <a style={menuItemStyle1}>Programs</a>
        <a style={menuItemStyle2}>Resources</a>
        <a style={menuItemStyle3}>About Us</a>
        <a style={menuItemStyle4}>Connect</a>
        {/* Add other menu items or components as needed */}
      </div>
    <div>
        <p style={LogInStyle}>Log In</p>
    </div>

    </div>
  );
};

export default NavBar;
