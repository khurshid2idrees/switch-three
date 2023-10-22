import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HeaderTitle from '../components/HeaderTitle';
import { Whoweare } from '../components/Whoweare';
import { Milestone } from '../components/Milestone';
import LogoSlider from '../components/LogoSlider';
import Overview from '../components/Overview'; 

export default function Home() {
  return (
    <>
      <NavBar/>
   <HeaderTitle/>
   <Overview/>
   <Whoweare/>
   <Milestone/>
   <LogoSlider/>
    </>
  )
}
