import React from 'react'
import './Welcome.css'




const Welcome = () => {



  return (
  <div className='welcm'>
    <img src='/imgs/logo_m3.svg' alt='app_logo' />
    
    
    <div className='users'>


<div className="user-card">
 <header>
        <h2>Dr. Potié</h2>
        <p>Otolaryngologist</p>
    </header>
        <div class="infos">
 <p>Doctor</p>
</div>
 
</div>


<div className="user-card">
 <header>
        <h2>Dr. Mezzina</h2>
        <p>Orthopedist</p>
    </header>
        <div class="infos">
 <p>Doctor</p>
</div>
 
</div>






<div className="user-card">
 <header>
        <h2>Mr. Voinot</h2>
        <p>Cardiac patient</p>
    </header>
        <div class="infos">
 <p>Patient</p>
</div>
 
</div>

<div className="user-card">
 <header>
        <h2>Mr. Gou</h2>
        <p>Diabetic patient</p>
    </header>
        <div class="infos">
 <p>Patient</p>
</div>
 
</div>
        
  
        
</div>  
        
    
        
        
        
      
 
</div>


  )
}

export default Welcome
