import React, { Fragment } from "react";
import Serach from "../users/Search";
import Users from "../users/Users";

const Home = () => {
  return (
    <Fragment>
      <Serach />
      <Users />
    </Fragment>
  );
};

export default Home;
