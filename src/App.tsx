import React from 'react';
import './App.css';
import { HomePage } from './pages';
// import { BrowserRouter, Route, Routes } from "react-router-dom"

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<HomePage/>} />
//           {/* <Route path="/signIn" component={SignInPage} />
//           <Route path="/register" component={RegisterPage} />
//           <Route path="/detail/:touristRouteId" component={DetailPage} /> */}
//           {/* <Route render={()=>(<h1>404 not found 页面去火星了 ! </h1>)} /> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }


import { BrowserRouter, Route, Switch } from "react-router-dom"
function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} /> */}
          <Route render={()=>(<h1>404 not found 页面去火星了 ! </h1>)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}



export default App;
