import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

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

const Story = ({ story, admin }) => {

    const editDate = (createdAt) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date(createdAt);
        var datestring = d.getDate() + " " +monthNames[d.getMonth()] + " ," + d.getFullYear() 
        return datestring
    }

    const truncateContent = (content) => {
        const trimmedString = content.substr(0, 73);
        return trimmedString
    }
    const truncateTitle= (title) => {
        const trimmedString = title.substr(0, 69);
        return trimmedString
    }
    
    return (

        <div className="story-card">
            <Link 
            to={admin?`/admin/detail/${story.slug}`:`/story/${story.slug}`} 
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
                <Button bg="33d04a" >Accept</Button>
                <Button bg="d03333" >Reject</Button>
            </ButtonContainer>
            :
            <></>
            }
        </div>

    )
}

export default Story;
