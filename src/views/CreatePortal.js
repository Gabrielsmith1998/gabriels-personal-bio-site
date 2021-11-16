import React from 'react';
import { Link } from 'react-router-dom';

export default function CreatePortal() {
  return (
    <div>
      <Link className="nav-link active" to="/createProjects">
        Create Projects
      </Link>
      <Link className="nav-link active" to="/createTech">
        Create Tech
      </Link>
      <Link className="nav-link active" to="/editProjects">
        Edit/Delete Projects
      </Link>
      <Link className="nav-link active" to="/editTech">
        Edit/Delete Tech
      </Link>
    </div>
  );
}
