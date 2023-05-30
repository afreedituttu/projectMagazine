import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../../Css/Header.css'
import { RiPencilFill } from 'react-icons/ri'
import { FaUserEdit } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { BsBookmarks } from 'react-icons/bs'
import SkeletonElement from '../Skeletons/SkeletonElement';
import { AuthContext } from '../../Context/AuthContext';

const AdminHeader = () => {
    const bool = localStorage.getItem("authToken") ? true : false
    const [auth, setAuth] = useState(bool)
    const { activeUser } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {

        setAuth(bool)
        setTimeout(() => {
            setLoading(false)
        }, 1600)

    }, [bool])


    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate('/login')
    };

    return (
      <header>
            <div className="averager">
              <Link to="/" className="logo">
                <h5>
                  E-ZINE ADMIN DASHBOARD
                </h5>
              </Link>
              <div className='header_options'>
                <div className="auth_options">
                  <Link className='addStory-link' to="/admin">HOME</Link>
                  <div className='header-profile-wrapper '>
                    <button className='addStory-link custom-btn' onClick={handleLogout}> <BiLogOut className='logoutLogo' />  Logout</button>
                  </div>
                </div>
              </div>
            </div>
      </header>
  )
}

export default AdminHeader
