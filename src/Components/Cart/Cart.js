import React from 'react'
import { Link } from 'react-router-dom';

function Cart({cart, setCart}) {

  const minis = (id)=>{
    const idx = cart.findIndex((item)=>item.id === id);
    if(cart[idx].count>1){
      cart[idx].count--;
      setCart([...cart])
     }else{
      setCart(cart.filter((item)=>{
        return item.id !== id
      })
      )
     }
  }
  const pluse = (id)=>{
    const idx = cart.findIndex((item)=>item.id === id);
    if(cart[idx].count>0){
      cart[idx].count ++;
      setCart([...cart])
     }else{
      setCart(cart.filter((item)=>{
        return item.id !== id
      })
      )
     }
  }




  const delitet = (id) =>{
    setCart(cart.filter((item,idx)=>{
      return idx !==id
    }))
  }
  

  return (
    <div>
        <div className="container">
          {cart.length===0 ?<p className='cartp'>вы нечего не выбрали <button className='btncart'><Link to="/Main">Выбрать</Link></button></p>:
          <>
          
          <table>
          <thead>
            <tr>
              <th>Названия</th>
              <th>Количество</th>
              <th>Цена</th>
            </tr>
          </thead>
            <tbody>
            {cart.map((item,idx)=>{
                return(
                  <tr>
                    <td>
                        {item.title}
                    </td>
                    <td>
                        <button onClick={()=>minis(item.id)} className="min">➖</button>
                        {item.count}
                        <button onClick={()=>pluse(item.id)} className="plus">➕</button>
                    </td>
                    <td>
                        {(item.price * item.count).toFixed(1)} $
                    </td>
                    <td>
                      <button onClick={()=>delitet(idx)}>Удалить</button>
                    </td>
                  </tr>
                )
            })}
            </tbody>
          </table>
          <p>
            Итог: {cart.reduce((acc, rec) => acc + rec.price * rec.count ,0  ).toFixed(1)} $
          </p>
          </>
          }
        </div>
    </div>
  )
}

export default Cart