import React, {useState, useEffect} from 'react'
import './Home.css'
import v1 from "./Assets/back1.mp4"
function Home()
{
  return(
    <>
    <div className='container'>
      <div className='container__video'>
        <video autoPlay muted loop className='video' >
          <source src={v1} type= "video/mp4"/>
        </video>

      </div>

    </div>
    
    
    
    </>

  );


}
export default Home;