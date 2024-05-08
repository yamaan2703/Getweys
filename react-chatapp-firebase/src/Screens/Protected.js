import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppAuth } from '../Config/FirebaseMethods'
import Home from './Home'

function Protected(props) {
    const {Screen} = props
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()

    let checkAuth = () => {
      setLoader(true)
      AppAuth().then((res) => {
        setLoader(false)
      }).catch((err) => {
        setLoader(false)
        navigate("/home")
      })
    }
    useEffect(() => {
        checkAuth()
    },[])
  return loader ? (
    <>
       <h1>Loading ......</h1>
    </>
  ) : (
    <Home />
  )
  
}

export default Protected