import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from "../../Context/AuthContext";
const ButtonContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
`
const Button = styled.button`
    flex:1;
    background-color:#${(props)=>{return props.bg}};
    color: #fff;
    padding:7px 0px;
    font-size:1.2rem;
    font-weight:500;
`
const Status = styled.div`
  text-accepted:center;
  background-color:${(props)=>{return props.bg}};
  padding:10px 0px;
  color:#fff;
  font-weight:500;
`

const Story = ({ story, admin }) => {

    const editDate = (createdAt) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date(createdAt);
        var datestring = d.getDate() + " " +monthNames[d.getMonth()] + " ," + d.getFullYear() 
        return datestring
    }
    const [error, setError] = useState();
    const navigate = useNavigate()

    const truncateContent = (content) => {
        const trimmedString = content.substr(0, 73);
        return trimmedString
    }
    const truncateTitle= (title) => {
        const trimmedString = title.substr(0, 69);
        return trimmedString
    }
    const { config } = useContext(AuthContext)
    console.log(config);
    console.log(story);
    const formdata = {};

    const handleAccept = async () => {  
          try {
            await axios.put(`/story/${story.slug}/edit/admin`, formdata, {       
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("authToken")}`,
              }
            })
            if(admin){
              alert("published")
              navigate("/admin");
            }else{
              navigate('/');
            }
          }
          catch (error) {
            console.log(error)
          }
      }

    const handleReject = async () => {

        if (window.confirm("Do you want to delete this post")) {
    
          try {
    
            await axios.delete(`/story/${story.slug}/delete`, {
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("authToken")}`,
              },
            })
            if(admin){
              
              navigate("/admin");
            }else{
              navigate('/');
            }

    
          }
          catch (error) {
            console.log(error)
          }
    
        }
    
      }
    
    return (

        <div className="story-card">
            <Link 
            to={admin?`/story/${story.slug}/admin`:`/story/${story.slug}`}
            className="story-link"
            >

                <img className=" story-image" src={`/storyImages/${story.image}`} alt={story.title} />
                <div className="story-content-wrapper">

                    <h5 className="story-title">
                        
                    {story.title.length > 76 ? truncateTitle(story.title)+"..." : story.title
                    
                    }
                    </h5>

                    <p className="story-text"dangerouslySetInnerHTML={{__html : truncateContent( story.content) +"..."}}>
                        </p>
                    <p className="story-createdAt">{editDate(story.createdAt)} 
                    </p>
                </div>
            </Link>
            {admin?
            <ButtonContainer>
                <Button bg="33d04a" onClick={handleAccept}>Accept</Button>
                <Button bg="d03333" onClick={handleReject}>Reject</Button>
            </ButtonContainer>
            :
            <></>
            }
        </div>

    )
}

export default Story;
