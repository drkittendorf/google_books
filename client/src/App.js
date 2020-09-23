import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Nav from "./components/Nav";
import Addbooks from "./pages/Addbooks";
import Bookslist from './pages/Bookslist';
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gbooks from "./pages/Gbooks"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Switch>
           <Route exact path={["/", "/books"]}>
        <Addbooks />
           </Route>
           <Route exact path="/books/:id">
        <Detail />
           </Route>
           <Route exact path='/search'>
        <Search />
           </Route>
           <Route>
        <Bookslist/>
           </Route>
           <Route>
        <NoMatch/>
          </Route>
          <Route>
        <Gbooks/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
