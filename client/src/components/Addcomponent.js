import React,{useState} from 'react'
import {
    FormGroup,
    Label,
    Input,
    Button,
 } from 'reactstrap';
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom';


export const Addcomponent = () => {
    const history = useHistory()
    const [name,setName] = useState("")


    const AddUser = () => {
        fetch('/adduser',{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
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
                value={name}
                onChange={(e)=>setName(e.target.value)}
                ></Input>
            </FormGroup>
            <Button type="submit" className="btn btn-success" onClick={() => AddUser()}  >Submit</Button>
            <Link to="/" className="btn btn-danger ml-2" >Cancel</Link>
            </>
    )
}
