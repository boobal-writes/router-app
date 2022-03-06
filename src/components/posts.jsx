import React from "react";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";

const Posts = () => {
  const params = useParams();
  const location = useLocation();
  const { sortBy, approved } = queryString.parse(location.search);
  return (
    <div>
      <h1>Posts</h1>
      Year: {params.year}, Month: {params.month}
      <br />
      Sort By: {sortBy}, Is Approved?: {approved}
    </div>
  );
};

export default Posts;
