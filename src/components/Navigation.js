import React from 'react';
import { Link } from 'react-router-dom';

const Navigation= () => {

  return (
    <section className='nav-section'>
        <div>
        <Link to='/'><img className='logo' src='./assets/images/logo-symbol-vit-liten.png' alt='Logo of the website, reads AT, which stands for Alex Thelander' /></Link>
        </div>
        <nav className='nav'>
            <Link to='/' className="back">Tillbaka</Link>
        </nav>
    </section>
  );
};

export default Navigation;
