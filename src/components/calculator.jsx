import React from 'react'
//it holds all the data on this components
import { useState } from 'react'
import Display from './display'
import Keypad from './keypad'
import '../App.css'
// import './index.css'




const Calculator = () => {
    const[display,setDisplay]=useState(0) 
    const HandelButtonClick=(e)=>{
        console.log(e.target.value)
        const currentval=e.target.value
        if(display === 0){
            setDisplay(currentval)
        }else{
            setDisplay(prev=>prev + '' + currentval)
        }
     if(currentval == '='){
        let result=eval(display)
        setDisplay(result)
     }else if (currentval == 'AC'){
        setDisplay(0)
     }else if(currentval == 'C'){
        const sval=display+''
        if(sval.length>1){
            setDisplay(sval.substring(0,sval.length-1))
        }else{
            setDisplay(0)
        }
     }
    }
  return (
    <div className='container'>
      <div className='calculator'>
      <Display data={display}/>
      <Keypad onClick={HandelButtonClick}/>
      </div>
    </div>
  )
}

export default Calculator
