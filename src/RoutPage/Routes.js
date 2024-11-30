import React from 'react'
import UserAuthorizedRoutes from './UserAuthorizedRoutes'
import unAuthorizedRoutes from './UnAuthorizedRoute'

import { useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import sample from './sample'
import UserAuthorizedRoutesAdmin from './UserAuthorizedRoutesAdmin'

export default function Routes() {
   const user = useSelector((state) => state.auth.authData)
// console.log("my user is a",user.role); 
// console.log("my user role is a",user.data.role); 

  // return useRoutes (user? UserAuthorizedRoutes:unAuthorizedRoutes )
  return useRoutes(
    user
      ? user.role
        ? UserAuthorizedRoutesAdmin // Routes for admin role
        : UserAuthorizedRoutes // Routes for non-admin role
      : unAuthorizedRoutes // Routes for unauthenticated users
  );

  // return useRoutes (sample)
  
}
