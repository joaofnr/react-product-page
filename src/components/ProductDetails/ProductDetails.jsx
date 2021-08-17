import React, { Component } from 'react'
import './style.css'
class ProductDetails extends Component{
    render(){
        let imgSelectedIndex = 0
        const imgPath = `${process.env.PUBLIC_URL}/assets/img`
        const productImages = [
            {
                thumb:`${imgPath}/product-thumb-1.png`,
                image:`${imgPath}/product-1.png`
            },
            {
                thumb:`${imgPath}/product-thumb-2.png`,
                image:`${imgPath}/product-2.png`
            },
            {
                thumb:`${imgPath}/product-thumb-3.png`,
                image:`${imgPath}/product-3.png`
            }
        ]
        return (
            <div className="product-details">
                <div className="product-details-info">
                    <h1>REMOVABLE POCKET LACOON HOODIE</h1>
                    <img
                        className='product-details-image-mobile' 
                        alt='REMOVABLE POCKET LACOON HOODIE'
                        src={`${imgPath}/product-1.png`} />
                    <p>Crafted from ultra soft and shiny lamb shearling, this eye-catching piece showcases the season’s rope motif. Here, they attach the removable front pocket and hood on a loose-fitting shape inspired by the classic sweatshirt. The top is unlined, with a tonal finish on the inside and an elasticated cuff and waist.</p>
                    <p className="product-price">
                        $350
                    </p>
                    <p className="product-size">
                        <span className="product-size-selected">
                            <span>S</span> &nbsp;/&nbsp; </span>
                        <span>
                            <span>M</span> &nbsp;/&nbsp; </span>
                        <span>
                            <span>L</span>
                        </span>
                    </p>
                    <ul className="product-images">
                        {productImages.map((item, index) => {
                            return(
                                <li 
                                key={index}
                                className={
                                    imgSelectedIndex === index 
                                    ?'product-selected-thumb' 
                                    :'product-thumb'
                                    }
                                >
                                    <img
                                    alt='Product'
                                    src={item.thumb} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="product-details-image">
                    <img 
                        alt='REMOVABLE POCKET LACOON HOODIE'
                        src={`${imgPath}/product-1.png`} />
                </div>
            </div>
        )
    }
}

export default ProductDetails