'use client'
import  {React, useState,useEffect } from 'react'
import Userdata from '@/components/UserData'
import axios from 'axios'

const Context = () => {
    const [users, setusers] = useState([])
    const fetchall=async()=>{
        try {
            const res=await axios.get('http://localhost:3000/api/All')
            setusers(res.data.alluser)
            
            
        } catch (error) {
            console.log(error)
            
        }
       
    }
    useEffect(() => {
        fetchall();
      
    
      
    }, [])
    
  return (
    <div >
            <Userdata users={users}/>
    </div>
  )
}

export default Context