import React, { Component } from 'react'
import './style.css'

class NewArrival extends Component{
    render(){
        const imgPath = `${process.env.PUBLIC_URL}/assets/img`
        const products = [
            {
                name:'Fur Blouson',
                img:  `${imgPath}/FurBlouson.png`
            },
            {
                name:'Blouson',
                img:  `${imgPath}/Hoodie.png`
            },
            {
                name:'Handbag',
                img:  `${imgPath}/Handbag.png`
            },
            {
                name:'LV Trainer Sneaker',
                img:  `${imgPath}/Shoe.png`
            },
            {
                name:'Bag',
                img:  `${imgPath}/Bag.png`
            }
        ]
        return (
            <section className="new-arrival">
                <h2 className="new-arrival-title">
                    New<br />
                    Arrival
                </h2>
                <ul className="new-arrival-products">
                    {products.map((item, index) => {
                        return(
                            <li 
                            key={index}
                            className="new-arrival-item">
                                <img
                                 alt={item.name}
                                 src={item.img} />
                                
                                <p>{item.name}</p>

                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export default NewArrival