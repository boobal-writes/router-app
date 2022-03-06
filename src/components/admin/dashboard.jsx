import React from "react";
import { Route, Routes } from "react-router";
import SideBar from "./sideBar";
import Posts from "./posts";
import Users from "./users";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Routes>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </div>
  );
};

export default Dashboard;
