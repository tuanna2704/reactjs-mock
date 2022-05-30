import './home.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ListRepoComponent from "../list-repo/list-repo";
import AddRepoComponent from "../add-repo/add-repo";
import WelcomeComponent from "../welcome/welcome";

export default function HomeComponent() {
  return (
    <Router>
      <div>
        <div className='header'>
          <ul className="d-flex justify-content-between">
            <li className='d-flex align-items-center'>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link>
            </li>
            <li className='d-flex align-items-center'>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/list-repo">List Repo</Link>
            </li>
          </ul>
        </div>
        <hr />
        <Routes>
            <Route path='/' element={<WelcomeComponent/>} />
            <Route path='/list-repo' element={<ListRepoComponent/>} />
            <Route path='/add-repo' element={<AddRepoComponent/>} />
        </Routes>
      </div>
    </Router>
  );
}