import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ul>
      <li>
        <Link to="/admin/users">Admin Users</Link>
      </li>
      <li>
        <Link to="/admin/posts">Admin Posts</Link>
      </li>
    </ul>
  );
};

export default SideBar;
