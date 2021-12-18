import React from 'react';
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest//argumentos de la función se llama rest

}) => {
    return (
        <Route 
            {...rest}
            component={(props) =>(
                (isAuthenticated)
                    ?( <Redirect to="/" />)
                    :(<Component {...props} />)//en las props se llama
            )}
        
        />
    )
}

//hay que obligar a que vengan las props
PublicRoute.propTypes={
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
