// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

import React from 'react'

function demo() {

<div>
      var student = ["Sam","ath","gan"];
      var profile = [1,9,...student]; //spred operator
      console.log(profile);
    </div>


  var number = [10,20,30,40,50,60]
  const [f,s,...remaining]=number;//rest operator
  console.log(remaining);

  return (
    <h1>Demo</h1>
  )
}

export default demo

