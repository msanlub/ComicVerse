import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { auth } from '../config/Firebase'

export const UserContext = createContext()

/**
 * Maneja la autenticación de usuarios utilizando Firebase
 * @param { children }  
 * @returns si está autorizado permite acceder a su contexto
 */
const UserProvider = ({children}) => {
  // Creo un contexto e inicializo en false
  const [user,setUser] = useState(false)

  // Escucha para cambios de estado
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) 
        setUser(user)
    });
  }, []) 

  if (user===null) return <p>Loading...</p>

  return (
    <UserContext.Provider value = {{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}


export default UserProvider