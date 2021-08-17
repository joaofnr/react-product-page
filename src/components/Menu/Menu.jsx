import React, { Component } from 'react';
import './style.css'

class Menu extends Component{
    render(){
        return (
            <section className="main-menu">
                <p className="logo">
                    YO<br/>NO.
                </p>
                <ul className="navigation">
                    <li>Search</li>
                    <li>Info</li>
                    <li>Collection</li>
                    <li className="active">Shop</li>
                </ul>
                <ul className="social">
                    <li>In</li>
                    <li>Fb</li>
                    <li>Tw</li>
                </ul>
            </section>
        )
    }
}

export default Menu