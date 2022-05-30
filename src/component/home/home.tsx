import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ListRepoComponent from "../list-repo/list-repo";


export default function HomeComponent() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/listrepo">List Repo</Link>
          </li>
        </ul>
        <hr />
        <Routes>
            <Route path='/listrepo' element={<ListRepoComponent/>} />
        </Routes>
      </div>
    </Router>
  );
}