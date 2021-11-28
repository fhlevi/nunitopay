import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import BottomNavigation from 'components/navigation/BottomNavigation.js';
import Header from 'components/navigation/Header.js';

const loading = (
    <div className="el-center">
        Loading...
    </div>
)

function MainHomepage (props) {
    
    const isShowToolbar = (name) => {
        const SHOW_HEADER = [
            'product',
            'transaction'
        ]

        return SHOW_HEADER.indexOf(name) !== -1
    }

    return (
        <>
            <Suspense fallback={loading}>
                <Switch>
                    {
                        props.routeChild.map((route, index) => {
                            return route.component && (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={propsChild => (
                                        (route.meta.auth) ? (
                                            <Redirect from={route.path} to="/login" />
                                        ) : (
                                            <div className="main-content">
                                                { isShowToolbar(route.name) && (<Header routeName={route.meta.name}></Header>) }
                                                <route.component routeProps={propsChild} />
                                                <BottomNavigation routeName={route.name}></BottomNavigation>
                                            </div>
                                        )
                                    )}
                                > 
                                </Route>
                            )
                        })
                    }
                </Switch>
            </Suspense>
        </>
    )
}

export default React.memo(MainHomepage);