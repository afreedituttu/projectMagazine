import React, { useEffect, useState } from 'react'
import {styled} from 'styled-components'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Carder from './Card'
import axios from 'axios'


const Wrapper = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  padding:1rem 5rem;
`
const CardWrapper = styled.div`
    width:100%;
    padding:2rem 2rem;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`
const Error = styled.div`
    width:50%;
    background:red;
    padding:1rem 1rem;
`

const DeleteNews = () => {
    const [error, setError] = useState();
    const [newses, setNewses] = useState([]);

    useEffect(()=>{
        console.log('from data');
        async function getAllNews(){
            console.log('from get all news');
            try{
                const data = await axios.post('/news/getnews');
                console.log('from data', data);
                setNewses(data.data.newses)
            }catch(err){
                setError('Error')
            }
        }
        getAllNews();
    },[])

  return (
    <Wrapper>
    {error?<Error>{error}</Error>:""}
        <CardWrapper>
        {
            newses.map((value)=>{
                return <Carder admin="true" id={value._id} title={value.title} desc={value.desc} image={`/storyImages/${value.image}`} />
            })
        }
        </CardWrapper>
    </Wrapper>
  )
}

export default DeleteNews
