import axios from 'axios';
import { React, useState, useEffect } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as FiIcons from 'react-icons/fi';



function handleLogout({item}) {

    axios.get('http://localhost:8000/logout', {withCredentials: true},)
}

export const SidebarData = [

  {
    title: 'To do list',
    path: '/products',
    icon: <RiIcons.RiTodoLine />
  },

  {
    title: 'Agenda',
    path: '/Agenda',
    icon: <FaIcons.FaRegCalendarAlt />,
  },

  {
    title: 'Mes ressources',
    path: '/',
    icon: <AiIcons.AiOutlineFolderOpen />
  },

  {
    title: 'Se déconnecter',
    path: '/',
    icon: <RiIcons.RiLogoutBoxRLine
    onClick={handleLogout}/>,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  
];