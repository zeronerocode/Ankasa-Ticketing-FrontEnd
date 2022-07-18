import React from 'react'
import Navi from '../navi'
import NaviV2 from '../naviV2'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Nav = ({ type }) => {
   const { user } = useSelector((state) => state.auth);
    return <>{user?.id ? <NaviV2 /> : <Navi />}</>;
}

export default Nav