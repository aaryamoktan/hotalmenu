import { useState } from 'react'
import img from "./image/logo1.png"
import img2 from "./image/main.jpg"
import Data from './Api'
import "./App.css"
function App() {
  const [search,setSearch] = useState();
  const [ff,setFF] = useState(Data);
  const menuCAt = [...new Set(Data.map((val)=> val.category))] ;
  const filterItems = (cat)=>
  {
  const newItems = Data.filter((newval)=>newval.category===cat)
  setFF(newItems)
  }
  const hello = ()=>
  {
    setFF(search)
    console.log(search)
  }
console.log(ff)
  return (
    <>
      <div className='mainContainer'>
        <div className='maintopContainer'>
          <div className='logo'>
            <img src={img} alt="logo" />
          </div>
          <div className='search'>
            <input type="text" placeholder='Search Food' onChange={(e)=>
              {
                setSearch(e.target.value)
              }
            } />
        
          </div>
        </div>
        <div className='mid'>
          <ul>
            {menuCAt.map(val=>(
              <li onClick={(e)=>
              {
              
                filterItems(val)
              }
              } >{val}</li>
            ))}
            <li onClick={()=>
              {
                setFF(Data)
              }
            }>All</li>
          </ul>
        </div>
        <div className='lower'>
        <img src={img2}/>
        <div className='porduct'>
         {ff&&ff.map((ele)=>
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
export default App;
