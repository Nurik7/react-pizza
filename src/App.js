import {Header} from "./components/Header";
import React from "react";
import {Home} from "./pages/Home/Home";
import {Route} from "react-router-dom";


function App() {
  return (
    <div>
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route exact path={'/'} component={() => <Home/>}/>
        </div>
      </div>
    </div>
  );
}

export default App;
