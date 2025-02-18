import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from "styled-components"
import img from "./image/logo1.png"
import img2 from "./image/main.jpg"
import Data from './Api'
import "./App.css"
function App() {

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
            <li>All</li>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
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
