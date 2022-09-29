import React from 'react';
import {GrHomeRounded} from 'react-icons/gr'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { TbBrandMessenger } from 'react-icons/tb';
import {IoExitOutline} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'
import { NavLink } from 'react-router-dom';
import './NavbarIcon.css'
import { useDispatch, useSelector } from 'react-redux';
import { delInitialUser, selectUsers } from '../../store/slices/usersSlice/usersSlice';

function NavbarIcon() {
    const dipsatch = useDispatch()

    return(
        <div className='navbarIcon'>
            <NavLink to='/inst'><GrHomeRounded size='23px' /></NavLink>
            <NavLink to='chat'><TbBrandMessenger size='25px' /></NavLink>
            <NavLink to='add-img'><BiMessageSquareAdd size='25px' /></NavLink>
            <NavLink to='profile'>
            <CgProfile size='25px' />
            </NavLink>
            <NavLink to='/' onClick={() => dipsatch(delInitialUser())}><IoExitOutline size='25px' /></NavLink>
        </div>
    )
}

export default NavbarIcon