import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const courseTitle = "React Learning Lab"
  const studentName = "Mohammad rezaee"
  return (
    <main>
      <h1>{courseTitle}</h1>
      <p>دانشجو: {studentName}</p>
    </main>
  )
}

export default App
