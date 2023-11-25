import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import SingelCat from '../SingelCat/SingelCat'


function Cotigor({sungel, setSungel}) {
  const [cotigorios , setCotigorios] = useState ([])

  
    useEffect(()=>{
      axios(`https://fakestoreapi.com/products/categories`).then
      (({data})=>setCotigorios(data))
    },[])

  return (
    <div>
        <div className="container">
          <ul>
            {cotigorios.map((item)=>{
              return(
                <div>
                <button className='btn'><Link to={`/SingelCat/${item}`}>{item}</Link></button>
                <Routes>
                  <Route path='SingelCat/:name'element={<SingelCat sungel={sungel} setSungel={setSungel}/>}/>
                </Routes>
                </div>
              )
            })}
          </ul>
      </div>
    </div>
  )
}

export default Cotigor