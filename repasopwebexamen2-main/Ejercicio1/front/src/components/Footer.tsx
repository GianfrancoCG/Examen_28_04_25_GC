import { Link } from "react-router-dom";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-light border-top mt-5 pt-4 pb-3">
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-4">
            <h5 className="fw-bold">Entry Manager</h5>
            <p className="small mb-1">Individual Exercise 2 — Web Programming</p>
            <p className="small text-muted mb-0">© {year}</p>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link className="text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/new">
                  Create Entry
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">About</h6>
            <p className="small mb-0">
              React + TypeScript demo for basic CRUD without a database.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
