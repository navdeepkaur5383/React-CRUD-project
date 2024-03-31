import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addname } from './reduxwork/nameslice'

function Form() {
    const dis=useDispatch()

   
    const [inputdata,setinputdata]=useState({
        name:"",
        english:"",
        hindi:"",
        punjabi:"",
        math:"",
        science:"",
        sst:""
       
    })

    function handleSubmit(e){
e.preventDefault()
if (Object.values(inputdata).some(value => value === '')) {
  alert('Please fill in all input fields');
  return; // Exit the function early if any field is empty
}

dis(addname(inputdata))





    }

   
   
    function handleinput(e){
       const name=e.target.name
       const value=e.target.value 

       console.log(name , value)
       if (name === "name"){
        setinputdata({...inputdata,[name]:value})
       }
       else if(name==="english"){
        setinputdata({...inputdata,[name]:value})
       }
       else if(name==="hindi"){
        setinputdata({...inputdata,[name]:value})
       }
       else if(name==="punjabi"){
        setinputdata({...inputdata,[name]:value})
       }
       else if(name==="math"){
        setinputdata({...inputdata,[name]:value})
       }
       else if(name==="science"){
        setinputdata({...inputdata,[name]:value})
       } else if(name==="sst"){
        setinputdata({...inputdata,[name]:value})
       }
     
      


    }
  
  
    
  return (
    <div>
        <h2>Students Marks</h2>
        <form onSubmit={handleSubmit}>
       
            <input type='text' placeholder='Student Name' name='name' onChange={handleinput} ></input>
            
            <input type='number' placeholder='English Marks' name='english' onChange={handleinput} ></input>
            <input type='number' placeholder='Hindi Marks' name='hindi' onChange={handleinput} ></input>
            <input type='number' placeholder='Punjabi Marks' name='punjabi' onChange={handleinput} ></input>
            <input type='number' placeholder='Math Marks' name='math' onChange={handleinput}></input>
            <input type='number' placeholder='Science Marks' name='science' onChange={handleinput} ></input>
            <input type='number' placeholder='sst Marks' name='sst' onChange={handleinput} ></input>

           

<button type='submit'>save</button>

        </form>
    </div>
  )
}

export default Form