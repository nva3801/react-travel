import React, { Fragment } from 'react';
import { Footer, Header } from '../components/layout';
import { Intro, List } from "../modules/OrderManagement"

const OrderManagement = () => {
    return (
        <Fragment>
            <Header></Header>
            <Intro></Intro>
            <List></List>
            <Footer></Footer>
        </Fragment>
    );
};

export default OrderManagement;