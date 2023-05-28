import { useState } from "react";
import axios from "axios";
import { styled } from 'styled-components'
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display:flex;
  justify-content:center;
`
const LoginBox = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:5rem 1rem;
`
const LoginHeader = styled.div`
  width:100%;
  padding:20px 0px;
  background:#0063a5;
  text-align:center;
  font-weight:600;
  font-size:1.2rem;
  color:#fff;
`
const LoginBody = styled.div`
  background:#f9f9f9;
  width:100%;
  height:auto;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  padding:5%;
`
const Input = styled.input`
  width:80%;
  padding:10px 5px;
  font-weight:500;
  margin:0.5rem 0rem;
`
const LoginButton = styled.button`
  width:80%;
  padding:15px 0px;
  margin:0.5rem 0rem;
  color:#fff;
  background:#33d04a;;
`
const Error = styled.div`
  width:100%;
  background:#ef4134;
  text-align:center;
  padding:10px 0px;
  color:#fff;
  font-weight:500;
  margin:5px 0px;
`
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function loginHandler(e){

    e.preventDefault();
    
    try{
    
      const { data } = axios.post(
        '/admin/login',
        {email, password}
      )

      localStorage.setItem("authToken", data.token);
      
      setTimeout(()=>{
        navigate("/admin")
      }, 1600)
    
    }catch(err){

      setError("Some Error Occured")
      navigate('/admin/login')

    }
  }

  return (
    <div>
      <Wrapper>
        <LoginBox>
          <LoginHeader>LOGIN DASHBOARD</LoginHeader>
          {error?<Error>{error}</Error>:""}
          <LoginBody>
          <form onSubmit={loginHandler}>
            <Input placeholder='email'/>
            <Input placeholder='password'/>
            <LoginButton>LOGIN</LoginButton>
          </form>
          </LoginBody>
        </LoginBox>
      </Wrapper>
    </div>
  )
}

export default Login
