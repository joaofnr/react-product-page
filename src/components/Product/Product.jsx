import React, { Component } from 'react'
import AddToBasketButton from '../AddToBasketButton'
import ProductDetails from '../ProductDetails/ProductDetails'
import './style.css'

class Product extends Component{
    render(){
        return (
            <section className="product">
                <ProductDetails />
                <AddToBasketButton />
            </section>
        )
    }
}

export default Product