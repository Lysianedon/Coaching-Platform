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
    title: 'Mes Actions',
    path: '/dashboard/admin#todo',
    key:1,
    icon: <RiIcons.RiTodoLine />,
  },

  {
    title: 'Agenda',
    path: '/dashboard/admin#agenda',
    key:2,
    icon: <FaIcons.FaRegCalendarAlt />,
  },

  {
    title: 'Mes ressources',
    path: '/dashboard/admin#ressources',
    key:3,
    icon: <AiIcons.AiOutlineFolderOpen />
  },
  {
    title: 'Envoyer une ressource',
    path: '/dashboard/admin/envoyerressource ',
    key:3,
    icon: <FiIcons.FiShare2 />
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