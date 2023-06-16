import React from 'react'
import {styled} from 'styled-components'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import News from './News';
import '../../Css/deactivateA.css'
const Wrapper = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;

@media (max-width:1001px){
  
}
`
const HomeHeader = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  flex-wrap:wrap;
  margin: 0rem 0rem 0rem 0rem;
  background:#${(props)=>{return props.bg}};
  color:#${(props)=>{return props.color}};
  padding:1rem 2rem;
`
const Title = styled.div`
  font-size:2rem;
  font-weight:600;
  color:#${(props)=>{return props.color}};
  display:block;
  width:100%;
  text-align:center;
  margin:1rem 0rem;
`
const Image = styled.img`
  margin:2rem 0rem;
  flex:1;
  object-fit:cover;
`
const ImageApp = styled.img`
  margin:2rem 0rem;
  width:20%;
  text-align:center;
  box-shadow:0px 1px 5rem #f8f8f819;
  transition:all 0.5s ease;

  &:hover{
    box-shadow:none;
  }
`
const HomeContent = styled.div`
  font-weight:500;
  font-size:1.2rem;
  padding:1rem 1rem;
  flex:1;
  line-height:2;
`
const AppContent = styled.div`
  font-weight:500;
  font-size:1.2rem;
  padding:1rem 1rem;
  line-height:1.5;
  text-align:center;
  font-family:sans-serif;
`
const Button = styled.button`
  display:block;
  padding:1rem 1.5rem;
  background:#${(props)=>{return props.bg}};
  color:#fff;
  font-weight:500;
  font-size:1.1rem;
  margin:1rem 0rem;
`
const AppButton = styled.button`
  display:block;
  padding:1rem 1.5rem;
  background:#000;
  border:1px solid #fff;
  border-radius:2px;
  color:#fff;
  font-weight:500;
  font-size:1.1rem;
  margin:1rem 0rem;
  transition:all 0.3s ease;

  &:hover{
    background:#fff;
    color:#000;
    border:1px solid #000;
    trasform:scale(1.1);
  }
`
const Slider = styled.div`
  padding: 0rem 7%;
  display:flex;
  justify-content:space-between;
  width:100%;
  background: transparent;

  @media (max-width:800px){
    display:none
  }
`
const SliderContent = styled.div`
  padding:1rem 2rem;
  color:#000;
  background: #fff;
  ${'' /* border-right: 1px solid #444;
  border-left: 1px solid #444; */}
  border-bottom:3px solid #f34c40b2;
  font-weight:500;
  font-size:1.3rem;
  transition: 0.2s ease;
  display:block;

  &:hover{
    color:#fff;
    background: #ef3737;
    padding:1rem 2.5rem;
  }
`
const AppWrapper = styled.div``

const MainHome = () => {
  return (
    <Wrapper>
    <Slider>
      <SliderContent>
        <a href='http://mescet.ac.in/nss-technical-cell'>NSS</a>
      </SliderContent>
      <SliderContent>
      <a href='http://mescet.ac.in/management'>MANAGEMENT</a>
      </SliderContent>
      <SliderContent>
      <a href='http://mescet.ac.in/iedc'>IEDC</a>
      </SliderContent>
      <SliderContent>
      <a href='http://mescet.ac.in/association-club'>ASSOCIATION & CLUBS</a>
      </SliderContent>
      <SliderContent>
      <a href='http://mescet.ac.in/'>GALLERY</a>
      </SliderContent>
    </Slider>
      <HomeHeader bg="fff" color="111">
        <Title color='111'>MES COLLEGE OF ENGINEERING AND TECHNOLOGY KUNNUKARA</Title>
        <div className='row'>
          <Image className='col-12 col-md-6 col-sm-6' src='http://mescet.ac.in/images/mescet-campus.jpg' />
          <HomeContent className='col-12 col-md-6 col-sm-6'>
          MES College of Engineering And Technology was established in the year 2011 by Muslim Educational Society(Regd). The college is situated on the banks of Periyar river in Kunnukara, North Paravur.The college is approved by AICTE and Govt. of Kerala is affiliated to APJ Abdul Kalam Technological University,Trivandrum.

            <a href='http://mescet.ac.in/'><Button bg="111"> Know more </Button></a>
          </HomeContent>
        </div>
      </HomeHeader>
      <HomeHeader bg="efefef" color="111">
        <Title color='000'>EZINE MAGAZINE WEBAPP</Title>
        <ImageApp src='/storyImages/idea.png'/>
        <AppContent>Ezine is a online platform for students at mes college of engineering and technology kunnukara. Here you can create and publish your own write up's and article's. Find and read your favorite intellectual and insipiring articles written by our college studens. Here we are presenting the THE EZINE</AppContent>

        <a href='/'><AppButton bg="2b4eec">Explore Now</AppButton></a>
      </HomeHeader>
      <News />
    </Wrapper>
  )
}

export default MainHome
