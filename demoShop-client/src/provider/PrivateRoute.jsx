import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);
    
    if(loading){
        // console.log('load');
        return <Loading></Loading>
    }
    if(user && user?.email){
        // console.log('load');
        return children ;
    }
    return (
        <Navigate state={location.pathname} to={'/auth/login'}>  
        </Navigate>
    );
};

export default PrivateRoute;