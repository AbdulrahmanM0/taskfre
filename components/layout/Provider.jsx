"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Provider({ children }) {
  useEffect(() => {
    AOS.init({
      once: true,  
      easing: 'ease-in-out', 
    });
  }, []);

  return <div className="max-layout">{children}</div>
}

export default Provider;