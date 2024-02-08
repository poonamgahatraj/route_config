import { Outlet, Link } from "react-router-dom";

export default function Homepage(){
    return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/Frontpage">Home</Link>
              </li>
              <li>
                <Link to="/Contactpage">Contact</Link>
              </li>
              <li>
                <Link to="/Aboutpage">About</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
}

