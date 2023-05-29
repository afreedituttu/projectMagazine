import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SkeletonStory from "../Skeletons/SkeletonStory";
import CardStory from "../StoryScreens/CardStory";
import NoStories from "../StoryScreens/NoStories";
import Pagination from "../GeneralScreens/Pagination";
import "../../Css/Home.css"

import { useNavigate } from "react-router-dom"
const AdminHome = () => {
  const search = useLocation().search
  const searchKey = new URLSearchParams(search).get('search')
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [Fetch, setFetch] = useState(true);

  useEffect(() => {
    const getStories = async () => {

      setLoading(true)
      try {
        let serverData;
        if(Fetch){
        serverData = await axios.get(`/story/getAllStories?search=${searchKey || ""}&page=${page}&admin=true`)
      }else{
        serverData= await axios.get(`/story/getAllStories?search=${searchKey || ""}&page=${page}`)
        }
        const { data } = serverData;
        setStories(data.data)
        setPages(data.pages)

        setLoading(false)
      }
      catch (error) {
        setLoading(true)
      }
    }
    getStories()
  }, [setLoading, search, page, navigate, Fetch])


  useEffect(() => {
    setPage(1)
  }, [searchKey])


  return (
    <div className="Inclusive-home-page">
      {loading ?

        <div className="skeleton_emp">
          {
            [...Array(6)].map(() => {
              return (
                // theme dark :> default : light
                <SkeletonStory key={uuidv4()} />
              )
            })}
        </div>

        :
        <div>
          <select onChange={(e)=>{
            setFetch(!Fetch)
            }}
          
          >
            {Fetch?
            <>
            <option selected value="pending">Pending</option>
            <option value="all">all</option>
            </>
            :
            <>
            <option value="pending">Pending</option>
            <option selected value="all">all</option>
            </>
            }
          </select>
          <div className="story-card-wrapper">
            {stories.length !== 0 ?
              stories.map((story) => {
                return (
                  <CardStory key={uuidv4()} story={story} admin="true"/>
                )
              }) : <NoStories />
            }
            {/* <img className="bg-planet-svg" src="planet.svg" alt="planet" />
            <img className="bg-planet2-svg" src="planet2.svg" alt="planet" />
            <img className="bg-planet3-svg" src="planet3.svg" alt="planet" /> */}

          </div>

          <Pagination page={page} pages={pages} changePage={setPage} />

        </div>

      }
      <br />
    </div>

  )

};

export default AdminHome;