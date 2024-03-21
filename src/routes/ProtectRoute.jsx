import React, { useEffect, useState } from 'react'
import { Route, Navigate } from 'react-router-dom'

const ProtectRoute = ({ element }) => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')

    // Replace this dummy condition with your actual authentication logic.
    setAuthenticated(token ? true : false)
  }, [])

  if (authenticated) {
    return <Route element={element} />
  }

  return <Navigate to="/dashboard" replace />
}

export default ProtectRoute