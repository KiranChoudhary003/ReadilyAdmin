import React from 'react'
import Wrapper from './style'
import dashboard from '../../assets/Dashboard.png'
import userManagement from '../../assets/UserManagement.png'
import socialLogin from '../../assets/SocialLogin.png'
import content from '../../assets/ContentOption.png'
import logout from '../../assets/logOut.png'
import { useNavigate } from 'react-router-dom'

const Menu = () => {

    const navigate = useNavigate()

    const handleChange = (path) => {
        navigate(path)
    }

    return (
        <Wrapper>
            <div className='menu-bar'>
                <div className='heading'>
                    <h1>Menu</h1>
                </div>
                <div className='content'>
                    <div className='dashboard' onClick={() => {handleChange('/')}}>
                        <img src={dashboard} alt="Dashboard" />
                        <span>Dashboard</span>
                    </div>
                    <div className='usermanagement' onClick={() => {handleChange('/userManagement')}}>
                        <img src={userManagement} alt="User Management" />
                        <span>User Management</span>
                    </div>
                    <div className='sociallogin' onClick={() => {handleChange('/socialLogin')}}>
                        <img src={socialLogin} alt="Social Login" />
                        <span>Social Login</span>
                    </div>
                    <div className='contentOption' onClick={() => {handleChange('/contentOption')}}>
                        <img src={content} alt="Content Option" />
                        <span>Content Option</span>
                    </div>
                    <div className='logout'>
                        <img src={logout} alt='Logout' />
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Menu
