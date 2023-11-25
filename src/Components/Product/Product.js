import axios from 'axios';
import React, { useEffect, useState  } from 'react'
import { Link, useParams } from 'react-router-dom'

function Product({production,setProduction}) {

    

    const link = useParams();
    useEffect (()=>{
        axios(`https://fakestoreapi.com/products/${link.id}`).then
        (({data})=>setProduction(data)
        )
    },[])

  return (
    <div>
        <div className="container">
                    <h2  className='h2w'>{production.title}</h2>
                <hr />
                <div className="imbl">
                  <img className='imbl__img' src={production.image} alt="" />
                  <div className="block__title">
                      <p className='p12'>{production.description}</p>
                      <p className='p12'>{production.category}</p>
                  </div>
              </div>
              <hr />
              <div className="block_row">
                  <div className="block__dollar">
                      <p className='dollar'>{production.price}$</p>
                  </div>
                  {/* <div className="pl">
                      <button className="min">➖</button>
                      <input className='pl_input' type="text" />
                      <button className="plus">➕</button>
                    </div> */}
              </div>
              <div className="btn__kup">
                  <button className="btn"><Link to='/Main'>Купить</Link></button>
              </div>
        </div>
    </div>
  )
}

export default Product