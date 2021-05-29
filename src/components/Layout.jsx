import React, { Fragment } from 'react';
import Header from './common/Header'
import Footer from './common/Footer'
const Layout = ({ ...props }) => {
    return (
        <Fragment>
            <Header />
            {props.children}
            <Footer />
        </Fragment>
    );
};

export default Layout;