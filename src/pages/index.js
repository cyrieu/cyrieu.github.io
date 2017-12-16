import React from "react";
import Link from "gatsby-link";
import ProfilePic from "../me.jpeg";
import styled from "styled-components";

const RedText = styled.p`
  color: red;
`;

const IndexPage = () => (
  <div>
    <h1>Hi bois</h1>
    <p>Welcome to the website and blog of Eric Yu.</p>
    <RedText>aLet me know what you think!</RedText>
    <img src={ProfilePic} alt="" />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
