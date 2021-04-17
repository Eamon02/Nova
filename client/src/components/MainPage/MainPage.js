import React from 'react';
import './MainPage.css';
import '../../App.css'


const MainPage = () => {
  return (
  <div className='container'>
    <h1 className='title'>Astronomical Events</h1>
    <iframe className='calendar' title='calendar' allowtransperancy="yes" scrolling="yes" src="https://in-the-sky.org/widgets/newscal.php?skin=1"></iframe>
  </div>
  )
};



export default MainPage;
