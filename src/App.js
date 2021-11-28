import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const loading = (
  <div className="el-center">
      Loading...
  </div>
)

const MainLayout = React.lazy(() => import('components/layout/MainLayout.js'))
class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route
                path="/" 
                name="HomePages" 
                render={(props) => <MainLayout props={props} />} 
              />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </>
    );
  }
}
 
export default App;
