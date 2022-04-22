import axios from 'axios';
import { React, useState, useEffect } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as FiIcons from 'react-icons/fi';
import * as BiIcons from 'react-icons/bi';

export const NavbarData = [

  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
  },
  {
    title: 'Qui suis-je ?',
    path: '/presentation',
    icon: <RiIcons.RiUserSettingsLine />
  },
  {
    title: 'Coaching',
    path: '/coaching',
    icon: <BiIcons.BiBookOpen />
  },
  {
    title: 'Login',
    path: '/login',
    icon: <RiIcons.RiLogoutBoxRLine />
  }
  ,
  {
    title: 'Contact',
    path: '/contact',
    icon: <AiIcons.AiOutlineContacts
    />
  },
  {
    title: 'Questionnaire',
    path: '/questionnaire/starter',
    icon: <RiIcons.RiQuestionAnswerLine
    />
  },

  
];