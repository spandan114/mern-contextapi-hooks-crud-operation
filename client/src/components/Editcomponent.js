import React,{useEffect,useContext, useState} from 'react'
import { Form,
    FormGroup,
    Label,
    Input,
    Button
 } from 'reactstrap';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import {GlobalContext} from '../context/Globalstate'
import {useHistory} from 'react-router-dom'

export const Editcomponent = () => {
    const history = useHistory()
    const {id} = useParams()
    const [name,setName]=useState(null)
    const {state,dispatch} = useContext(GlobalContext)

    useEffect(()=>{
        
          fetch(`/fetch/${id}`,{
            headers: {
                "Accept": "application/json; odata=verbose"
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
             setName(result.name)
        })  
        
     },[id])

     

    const editUser = () => {
        fetch(`/update/${id}`,{
            method:"put",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            //dispatch({type:"UPDATE",payload:result})
            console.log("data inserted successfully")
            history.push('/')
           })
           .catch(err=>{
            console.log(err)
        })
  }

    return (
        <>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" 
                placeholder="Enter name"
                value={name || ""}
                onChange={(e)=>setName(e.target.value)}
                ></Input>
            </FormGroup>
            <Button type="submit" className="btn btn-success" onClick={() => editUser()} >Submit</Button>
            <Link to="/" className="btn btn-danger ml-2" >Cancel</Link>
            </>
    )
}
