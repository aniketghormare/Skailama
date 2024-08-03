import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Project from '../pages/Project'
import Dashboard from '../pages/Dashboard'

const AllRoutes = () => {
  return (
    <Routes>
           <Route path='/' element={<Project/>}/>
           <Route path='/dashboard/:id/:projectName' element={<Dashboard/>}/>
    </Routes>
  )
}

export default AllRoutes
