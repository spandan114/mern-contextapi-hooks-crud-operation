import React,{useState,useEffect,useContext} from 'react'
import {
    ListGroup,
    ListGroupItem,
    Button,
 } from 'reactstrap';
import { Link } from 'react-router-dom';
import {GlobalContext} from '../context/Globalstate'

export const Userlist = () => {

    const [data,setData] = useState([])
    const {state,dispatch} = useContext(GlobalContext)
    
 
     useEffect(()=>{
        fetch("/fetchall",{
            headers: {
                "Accept": "application/json; odata=verbose"
            }
        }).then(res=>res.json())
        .then(result=>{
            dispatch({type:"FETCH",payload:result.data})
            setData(result.data)
        })
     },[dispatch])

    //  useEffect(() => {
    //      if(data){
    //         deleteuser()
    //      }
    //  }, [data])


     const deleteuser = (id) =>{
         
        fetch(`/delete/${id}`,{
            method:"delete",
            headers: {
                "Accept": "application/json; odata=verbose"
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)

            const newData = data.filter(item=>{
                return item._id !== result._id
            })
           //dispatch({type:"FETCH",payload:newData})
            setData(newData)
        })

     }

       

    return (
        
        <ListGroup className="mt-3">
           {
              data? data.map(item=>{
                  
                   return(

                 <ListGroupItem className="d-flex" key={item._id} >
                     <p>{item.name}</p>
                      <div className="ml-auto">
                          <Link to={"/edit/"+item._id} className="btn btn-warning mr-1">Edit</Link>
                           <Button className="btn btn-danger" onClick={()=>deleteuser(item._id)}>Delete</Button>
                     </div>
                 </ListGroupItem>
                 
                     )}):"Loading..."
           } 
        </ListGroup>
        
    )
}
