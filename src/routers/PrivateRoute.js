import React from 'react';
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest//argumentos de la función se llama rest

}) => {

    return (
        <Route 
            {...rest}
            component={(props) =>(
                (isAuthenticated)
                    ?(<Component {...props} />)//en las props se llama
                    :( <Redirect to="/login" />)
            )}
        
        />
    )
}

//hay que obligar a que vengan las props
PrivateRoute.propTypes={
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
