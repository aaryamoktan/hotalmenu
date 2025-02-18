import { useState } from 'react'

import img from "./image/logo1.png"
import img2 from "./image/main.jpg"
import Data from './Api'
import "./App.css"
function App() {
  const [cat,setCat] = useState();
 console.log(cat)
  return (
    <>
      <div className='mainContainer'>
        <div className='maintopContainer'>
          <div className='logo'>
            <img src={img} alt="logo" />
          </div>
          <div className='search'>
            <input type="text" placeholder='Search Food' />
          </div>
        </div>
        <div className='mid'>
          <ul>
            <li onClick={()=>
              {
                setCat("all")
              }
            }>All</li>
            <li onClick={()=>
              {
                setCat("breakfast")
              }
            }>Breakfast</li>
            <li onClick={()=>
              {
                setCat("lunch")
              }
            }>Lunch</li>
            <li onClick={()=>
              {
                setCat("dinner")
               
              }
            }>Dinner</li>
          </ul>
        </div>
        <div className='lower'>
        <img src={img2}/>
        <div className='porduct'>
         {Data.map((ele)=>
        {
          const {name,image,price,desc } = ele
          return(
            <>
             <div className='p1'>
           <div className='img'>
            <img src={image} alt="food"/>
           </div>
           <div className='dis'>
            <h3>{name}</h3>
            <p>{desc} </p>
 <p className='pp1'>${price}</p>
           </div>
          </div>
            </>
          )
        })}
         
          
        </div>
        </div>
      </div>


    </>
  )
}

export default App
