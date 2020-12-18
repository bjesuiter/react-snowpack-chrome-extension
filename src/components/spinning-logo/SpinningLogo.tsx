import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './SpinningLogo.css';

function SpinningLogo() {
	return <img src={logo} className="spinning-logo" alt="logo" />;
}

export default SpinningLogo;
