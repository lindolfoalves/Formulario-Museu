import { useState, useEffect } from 'react'
import api from '../service/api';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setIsAuthenticated(true)
    }
  }, [])

  return {
    isAuthenticated,
  }
}
