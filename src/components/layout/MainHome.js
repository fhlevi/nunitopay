import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/navigation/Header.js';

const loading = (
    <div className="el-center">
        Loading...
    </div>
)

function MainHome (props) {
    
    const isShowToolbar = (name) => {
        const SHOW_HEADER = [
            'login'
        ]

        return SHOW_HEADER.indexOf(name) !== -1
    }

    return (
        <>
            <Suspense fallback={loading}>
                <Switch>
                    {
                        props.routeChild.map((route, index) => {
                            let routeChildren = (!!route.children ? route.children : [])
                            
                            return route.component && (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={propsChild => (
                                        <>
                                            { isShowToolbar(route.name) && (<Header routeName={route.meta.name} keyName={route.name}></Header>) }
                                            <route.component routeProps={propsChild} routeChild={routeChildren} />
                                        </>
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

export default React.memo(MainHome);