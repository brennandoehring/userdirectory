import React from "react";
import "./styles.css";
import { Helmet } from 'react-helmet';

const TITLE = "User Directory";

function Jumbotron() {
  return (
    <div>
      <Helmet>
        <title> {TITLE} </title>
      </Helmet>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">User Directory</h1>
        <p class="lead">
          This is a list of your employees.
        </p>
      </div>
    </div>
    </div>
  );
}
export default Jumbotron;