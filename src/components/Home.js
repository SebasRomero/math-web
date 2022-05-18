import React from 'react'
import {context, useAuth} from '../context/AuthContext'
import { useContext } from 'react'


export function Home (){
    const {user, logout, loading} = useAuth()
    const handleLogout = async () =>{
      try {
        await logout()
      } catch (error) {
        console.error(error);
      }
    }
    if (loading) return <h1>Loading</h1>
  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Home