import React from 'react'
import {styled} from 'styled-components'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import News from './News';

const Wrapper = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;

`
const HomeHeader = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  flex-wrap:wrap;
  margin: 0rem 0rem 0rem 0rem;
  background:#${(props)=>{return props.bg}};
  color:#${(props)=>{return props.color}};
  padding:1rem 5rem;
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
  width:50%;
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
    trasform:scale(1.1);
  }
`
const AppWrapper = styled.div``

const MainHome = () => {
  return (
    <Wrapper>
      <HomeHeader bg="fff" color="111">
        <Title color='111'>MES COLLEGE OF ENGINEERING AND TECHNOLOGY KUNNUKARA</Title>
        <div className='row'>
          <Image className='col-12 col-md-6 col-sm-6' src='http://mescet.ac.in/images/mescet-campus.jpg' />
          <HomeContent className='col-12 col-md-6 col-sm-6'>
            lorem MES College of Engineering And Technology was established in the year 2011 by Muslim Educational Society(Regd). The college is situated on the banks of Periyar river in Kunnukara, North Paravur.The college is approved by AICTE and Govt. of Kerala is affiliated to APJ Abdul Kalam Technological University,Trivandrum. greigjjgirojgior iorgior oigr jgioj rio rig rio jogir goreogj rog orj goirjgor ojgoirejgoriegorj oog ro gorejg or gorj ogr rrrg regregrgr greggwgrg rhh h r wrt rw hrew hjj

            <Button bg="111"> Know more </Button>
          </HomeContent>
        </div>
      </HomeHeader>
      <HomeHeader bg="000" color="ffff">
        <Title color='fff'>EZINE MAGAZINE WEBAPP</Title>
        <ImageApp src='/storyImages/image_2023-05-31T18-11-15.000ZScreenshot (205).png'/>
        <AppContent>rjes roej eoijewoif jewoifjeiojf oewjf ejfiewjfioejwoif ewoi jewoij oewjioew jdd o joejfoij fioe fiosf oie   foijeofjeoifjeoijf oiej ieojfoiejfoiesj foiejofoiejfoefoeskfoesj foiekf oie fjeosjfoief eoijf io oi iofj oi jo foejfesoifjeofjeosjfoiejfoejfiof eijfoiejf fefweijfej fefjiwejf iewjf iewjfioewjifoj ewoifjwiofjweoijfoiejoijeofiejw fje oijewoif jewoifjeiojf oewjf ejfiewjfioejwoif ewoi jewoij oewjioew jdd</AppContent>

        <AppButton bg="2b4eec">Explore Now</AppButton>
      </HomeHeader>
      <News />
    </Wrapper>
  )
}

export default MainHome
