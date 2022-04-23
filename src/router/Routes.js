import React from 'react'
import {
    Route,
    Routes as Switch,
  } from "react-router-dom";

//components
import AuditLogs from '../pages/AuditLogs/AuditLogs'
import Layout from '../layout/Layout'


const routes = [{
    path: '/',
    component: AuditLogs, 
    guard: false,
}]


const Routes = () => {
    
    return (
        <>
        {routes.map((route, index) => {
            return <Switch>
               
                       <Route path={route?.path} element={
                           <Layout>
                               <route.component />
                           </Layout>
                       } />
                </Switch> 
               
           
        })}
        </>
    )
 
}

export default Routes

