import axios from 'axios'
import React, { useState } from 'react'
import {styled} from 'styled-components'

const Card = styled.div`
    width:80%;
    display:flex;
    border:1px solid #333;
    margin:1rem 0rem;
`
const CardImage = styled.img`
    flex:2;
    width:10%;
`
const CardContent = styled.div`
    flex:8;
    padding:1rem;
`
const CardTitle = styled.h2`
    font-size:1.2rem;
`
const CardBody = styled.div``
const Delete = styled.button`
    width:100%;
    padding:1rem 0rem;
    color:#fff;
    background:red;
`
const Warn = styled.div`
    width:100%;
    background:${(props)=>{return props.bg}};
    padding:1rem 1rem;
`

const Carder = (props) => {
    const [message, setMessage] = useState();
    const [error, setError] = useState();
    async function deleteHandler(){
        const id = props.id;
        try{
            const data = await axios.post(`/news/deletenews/${id}`);
            if(data.data.success){
                setTimeout(()=>{
                    setMessage('Deleted');
                }, 2000)
            }else{
                throw new Error("server error")
            }
        }catch(err){
            console.log(err);
            setTimeout(()=>{
                setError('Error');
            }, 2000)
        }
    }
  return (
    <Card>
        {error?<Warn bg="">{error}</Warn>:""}
        {message?<Warn bg="">{message}</Warn>:""}
        <CardImage src={props.image} />
        <CardContent>
           <CardTitle>{props.title}</CardTitle>
           <CardBody>{props.desc}</CardBody>
           {props.admin?<Delete onClick={deleteHandler}>delete</Delete>:""}
        </CardContent>
    </Card>
  )
}

export default Carder
