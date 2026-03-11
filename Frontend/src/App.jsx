<<<<<<< HEAD
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import axios from 'axios'

// export const serverURL = import.meta.env.VITE_SERVER_URL
// export const serverURL = "http://localhost:500"

function App() {

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(serverURL + '/api/user/currentUser',
          { withCredentials: true })
        console.log(response.data)
      } catch (error) {
        console.log('error in getUser in Frontend', error)
      }
    }
    getUser()
  }, [])
=======
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'

export const serverURL = import.meta.env.VITE_SERVER_URL

function App() {


>>>>>>> 8ad53903cafe4405b09f1f3221d2c42967ac9914

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
