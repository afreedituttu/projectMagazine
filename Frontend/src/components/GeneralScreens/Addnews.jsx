import axios from 'axios'
import React, { useState } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  padding:2rem 0rem;
  font-family:sans-serif;
` 
const FormContainer = styled.form`
  width:50%;
  box-shadow:0.5rem 1rem 3rem #23232340;
` 
const Input = styled.input`
  width:100%;
  padding:0.3rem 1rem;
  border-radius:3px;
  border:1px solid #333;

  &::file-selector-button{
    background:#51515136;
    padding:1rem 0rem;
    width:80%;
    color:#000;
    border:none;
    out-line:none;
  }
`
const Button = styled.button`
  width:100%;
  padding:1rem 2.5rem;
  margin:1rem 0rem;
  background:#000;
  color:#fff;
  border-radius:3px;
`
const Header = styled.div`
  padding:1rem 1rem;
  background:#1968de;
  color:#fff;
  font-size:2rem;
  font-weight:600;
`
const FormBody = styled.div`
  padding:2rem 1rem
`
const Title = styled.h2`
  font-size:1.5rem;
  padding:0.5rem 0rem;
  font-weight:400;
`
const Warn = styled.div`
  width:100%;
  background:#${(props)=>{return props.bg}};
  padding: 1rem 1rem;
  color:#fff;
  font-size:1.5rem;
  font-weight:500;
`

const Addnews = () => {
  const [ title, setTitle ] = useState();
  const [ desc, setDesc ] = useState();
  const [ file, setFile ] = useState();
  const [ success, setSuccess ] = useState();
  const [ error, setError ] = useState();

  const clearvalues = ()=>{
    setTitle('');
    setDesc('');
    setFile('');
  }

  async function SubmitHandler(e){
    e.preventDefault();
    const form = new FormData();
    form.append('title', title)
    form.append('desc', desc)
    form.append('image', file)

    try{
      const data = await axios.post('/news/addnews',form);
      if(data.data.success){
        setError('');
        setSuccess('');
        setTimeout(()=>{
          setSuccess('Added News');
          clearvalues();
        }, 2000)
      }else{
        throw new Error('server error');
      }
    }catch(err){
      console.log(err);
      setError('');
      setSuccess('');
      setTimeout(()=>{
        setError('error')
        clearvalues();
      }, 2000);
      setError('');
    }
  }
  return (
      <Wrapper>
        <FormContainer onSubmit={SubmitHandler}>
          {error?<Warn bg="ef4134">{error}</Warn>:""}
          {success?<Warn bg="2cdc43">{success}</Warn>:""}
          <Header>ADD NEWS</Header>
          <FormBody>
            <Title>Title</Title>
            <Input placeholder='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <Title>Description</Title>
            <Input placeholder='description' value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
            <Title>Image</Title>
            <Input type='file' name='image' onChange={(e)=>{setFile(e.target.files[0])}}/>
            <Button type='submit'>Add</Button>
          </FormBody>
        </FormContainer>
      </Wrapper>
    )
}

export default Addnews
