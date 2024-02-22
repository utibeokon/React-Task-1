import React from 'react'
import UKBTC from './image/UKBTC.jpg'

export default function Task(){
    return(
        
        <> 
        <div className='parent_div'>
        <div className='image'> 
        <img src={UKBTC} alt='cardimage'  width="100%" height="200vh"/>
        </div>
        <div className='wrapper'>
       <h1 >Fire Up Your Motivation</h1>
       <p>when striving towards a goal, you must <br></br>focus on what you want to obtain and <br></br>avoid the impulse to go back to what you<br></br> know and to what is comfortable</p>
       <p className='kyle'>by Kyle Patterson</p>
       <button className='btn'>Read article</button>     
        </div>
        </div>
        <div></div>
        </>
        

    )
}