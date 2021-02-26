import React from "react";
import Header from "./components/Header";
import AppBody from "./components/AppBody";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import AppLoading from "./components/AppLoading";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <AppLoading />;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <>
                <Sidebar />
                <Switch>
                  <Route path="/" exact>
                    <Chat />
                  </Route>
                </Switch>
              </>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
