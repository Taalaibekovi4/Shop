import axios from 'axios'
import React, { useEffect,  } from 'react'
import { Link } from 'react-router-dom'

function Main({produc, setProduc, cart, setCart, cotigorios, setCotigorios}) {

  useEffect(()=>{
    axios ('https://fakestoreapi.com/products').then
    (({data})=>{setProduc(data)});
    axios('https://fakestoreapi.com/products/categories').then
    (({data})=>{setCotigorios(data)
    }
    );
  },[])

 
  const dalite = (id) =>{
    setProduc(produc.filter((item,idx)=>{
      return idx !==id
    }))
  }

  const baycart = (obj) =>{
    const idx = cart.findIndex((item)=>item.id === obj.id);
    if(idx === -1){
      setCart([...cart, {
        ...obj,
        count:1
      }])
     }else{
      cart[idx].count++
      setCart([...cart])
     }
    }
  return (
    <div>
      <div className="container">
        <div className="row">
          {produc.map((item, idx) => {
            return (
              <div className="col s12 m3" key={item.id}>
                <div className="card">
                  <div className="card-image">
                    <img src={item.image} />
                    <div className="block__dollar">
                    <span className="dollar">{item.price} $</span>
                    </div>
                  </div>
                  <p>{item.title.substr(0, 30)}</p>
                  <div className="card-content">
                  </div>
                  <div className="card-action">
                    <Link to={`/Product/${item.id}`}>ПОДРОБНЕЕ</Link>
                    <button onClick={()=>dalite(idx)} className='btnud'><Link to=''>УДАЛИТ</Link></button>
                    <button onClick={()=>baycart(item)} className='btnud'><Link to=''>В КОРЗИНУ</Link></button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Main