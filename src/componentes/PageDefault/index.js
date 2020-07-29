import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

export default props => (
    <div>
        <Menu />
        {props.children}
        <Footer />
    </div>
)