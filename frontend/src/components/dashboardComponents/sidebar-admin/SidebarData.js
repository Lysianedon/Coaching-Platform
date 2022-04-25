import axios from 'axios';
import { React, useState, useEffect } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';



function handleLogout({item}) {

    axios.get('http://localhost:8000/logout', {withCredentials: true},)
}

export const SidebarData = [

  {
    title: 'Agenda',
    path: '/dashboard/admin#agenda',
    icon: <FaIcons.FaRegCalendarAlt />,
  },
  {
    title: 'To do list',
    path: '/dashboard/admin#todo',
    icon: <RiIcons.RiTodoLine />
  },
  {
    title: 'Mes ressources',
    path: '/',
    icon: <AiIcons.AiOutlineFolderOpen />
  },
  {
    title: 'Gérer mes coachés',
    path: '/dashboard/admin/list',
    icon: <FiIcons.FiUsers />
  }
  ,
  {
    title: 'Se déconnecter',
    path: '/',
    icon: <RiIcons.RiLogoutBoxRLine
    onClick={handleLogout}/>,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  
];