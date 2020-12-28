import React from 'react';
import jwt from 'jsonwebtoken';
import {Route, Redirect} from 'react-router-dom';


let isAuth = false;
const verifyToken = async () =>{
        let token = localStorage.getItem('token')
     
        if(token){
            
            let state = jwt.verify(localStorage.getItem('token'),'secretkey',(err,decoded)=>{
                if(err) return false;
                localStorage.setItem('user',decoded.data.username);
                localStorage.setItem('userRole',decoded.data.role);
                localStorage.setItem('id',decoded.data._id);
                localStorage.setItem('loginStatus',"true");
                return true
            })
            isAuth = state;
        }else{
            isAuth =  false;
        }
        
}

const ProtectedRoute = ({component : Component, ...rest}) =>{
 
    verifyToken();
    return (
        <>
            <Route {...rest} 
                render={props=>(isAuth ? <Component {...props}/> :  <Redirect to='/'/>)}
            />
        </>
        )
}

export default ProtectedRoute;
