import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdContactPhone} from 'react-icons/md'
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';

const nav = () => {
  return (
    <nav>
      <a href="#home" className='active'> <AiOutlineHome /></a>
      <a href="#about"> <AiOutlineUser /></a>
      <a href="#contact"> <MdContactPhone/></a>
      <a href="#experience"> <BiBook /></a>
      <a href="#portfolio"> < BiMessageSquareDetail /></a>
    </nav>
  )
}

export default nav
