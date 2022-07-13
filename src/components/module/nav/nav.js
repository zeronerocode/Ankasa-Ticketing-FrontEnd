import React from 'react'
import Navi from '../navi'
import NaviV2 from '../naviV2'

const Nav = ({ type }) => {
   if(type === 'notLogged'){
    return(
        <Navi />
    )
   } else {
    return (
        <NaviV2 />
    )
   }
}

export default Nav