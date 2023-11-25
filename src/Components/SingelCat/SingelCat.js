import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function SingelCat({cotigorios , setCotigorios}){


    const link = useParams();
    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/category/${link.name}`).then
        (({data})=>{setCotigorios(data);
        }
        );
    },[]);
    
    const dalite = (id) =>{
      setCotigorios(cotigorios.filter((item,idx)=>{
        return idx !==id
      }))
    }
  return (
    <div>
      <div className="row">
          {cotigorios.map((item, idx) => {
            return (
              <div className="col s12 m3" key={item.id}>
                <div className="card">
                  <div className="card-image">
                    <img src={item.image} />
                    <span className="card-title">{item.price} $</span>
                  </div>
                  <p>{item.title}</p>
                  <div className="card-content">
                  </div>
                  <div className="card-action">
                    <Link to={`/Product/${item.id}`}>ПОДРОБНЕЕ</Link>
                    <button onClick={()=>dalite(idx)} className='btnud'><Link to=''>УДАЛИТ</Link></button>
                    <button className='btnud'><Link to=''>В КОРЗИНУ</Link></button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default SingelCat