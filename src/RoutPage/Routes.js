import React from 'react'
import UserAuthorizedRoutes from './UserAuthorizedRoutes'
import unAuthorizedRoutes from './UnAuthorizedRoute'

import { useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import sample from './sample'

export default function Routes() {
  const user = useSelector((state) => state.auth.authData)
console.log("my user is aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",user); 

  return useRoutes (user? UserAuthorizedRoutes:unAuthorizedRoutes )

  // return useRoutes (sample)
  
}
