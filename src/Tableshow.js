import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addname, removename } from './reduxwork/nameslice'
import { Link } from 'react-router-dom'

function Tableshow() {
  const dis=useDispatch()
    const sel=useSelector((state)=>state.name)
 function handleRemove(dat){
  dis(removename(dat))

 }
 function handleEdit(){

 }
  
  return (
    <div>
        <table>
        <th>S.no.</th>
            <th>Name</th>
            <th>English Marks</th>
            <th>Hindi Marks</th>
            <th>Punjabi Marks</th>
              <th>Math Marks</th>
            <th>Science Marks</th>
            <th>S.S.T Marks</th>
            


       {
        sel.map((data,index)=>
        <tr key={index}>
          <td>{index+1}</td>
            <td>{data.name}</td>
            <td>{data.english}</td>
            <td>{data.hindi}</td>
            <td>{data.punjabi}</td>
            <td>{data.math}</td>
            <td>{data.science}</td>
            <td>{data.sst}</td>
                        
<td><button onClick={()=>handleRemove(index+1)} >Remove</button></td>
<td><Link to={`/edit/${index+1}`}><button>Edit</button></Link></td>
        </tr>
       
        )
       }
        </table>
        
    </div>
  )
}

export default Tableshow