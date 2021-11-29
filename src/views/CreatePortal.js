import React from 'react';
import { Link } from 'react-router-dom';

export default function CreatePortal() {
  return (
    <div>
      <Link className="portal-link" to="/createProjects">
        Create Projects
      </Link>
      <br />
      <Link className="portal-link" to="/createTech">
        Create Tech
      </Link>
      <br />
      <Link className="portal-link" to="/editProjects">
        Edit/Delete Projects
      </Link>
      <br />
      <Link className="portal-link" to="/editTech">
        Edit/Delete Tech
      </Link>
    </div>
  );
}
