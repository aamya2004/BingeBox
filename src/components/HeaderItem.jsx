import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderItem = ({name,Icon,path}) => {
  return (
    <div className='text-gray-400 flex items-center gap-3 text-{18px} 
    font-semibold cursor-pointer hover:underline underline-offset-8 
    mb-2 text-white '>
        {/* //name same hone chhie props ke  */}
        <Icon/> 
        {/* <h2 className='' >{name}</h2> */}
        <NavLink to={path} className= 'hover:text-white text-gray-400'>{name}</NavLink>
    </div>
  )
}

export default HeaderItem