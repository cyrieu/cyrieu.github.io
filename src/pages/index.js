import React from "react";
import Link from "gatsby-link";
import ProfilePic from "../me.jpeg";
import BioPic from "../me2.jpg";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 67%;
  grid-template-rows: 100vh auto;
`;

const WelcomeContainer = styled.div`
  position: relative;
  display: flex;
  background-image: url(${ProfilePic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-column: 1 / -1;
`;

const WelcomeTextContainer = styled.div`
  position: absolute;
  bottom: 100px;
  left: 100px;
  color: white;

  @media only screen and (max-width: 768px) {
    left: 10px;
  }
`;

const WelcomeText = styled.h1`
  font-weight: 100;
  font-size: 5em;

  @media only screen and (max-width: 768px) {
    font-size: 4em;
  }
`;

const ColorContainer = styled.div`
  background-image: url(${BioPic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-column: 1 / 2;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const IntroText = styled.p`
  padding: 30px 30px;
  margin-bottom: 0;
  grid-column: 2 / -1;

  @media only screen and (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const StyledLink = styled.a`
  color: #7ba3b7;
`;

const ContactContainer = styled.div`
  border-top: 1px solid #eee;
  padding: 30px 0 150px 0;
  text-align: center;
  grid-column: 1 / -1;
`;

const ContactHeading = styled.h1`
  font-weight: 100;
`;

const EmailContainer = styled.div`
  padding: 20px 0;
  font-size: 2em;
`;

const EmailIcon = styled.i`
  color: black;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const IndexPage = () => (
  <GridContainer>
    <WelcomeContainer>
      <WelcomeTextContainer>
        <WelcomeText>Eric Yu</WelcomeText>
      </WelcomeTextContainer>
    </WelcomeContainer>
    <ColorContainer />
    <IntroText>
      Hey there! I'm Eric, and I'm a student at Yale University studying
      computer science. I love building things that help others.
      <br />
      <br />
      At Yale, I've led student engineering teams to build our university's{" "}
      <StyledLink href="http://map.yale.edu">CampusMap</StyledLink> and the{" "}
      <StyledLink href="http://www.yaledailynews.com">
        Yale Daily News website
      </StyledLink>. I'm a proud member of the{" "}
      <StyledLink href="http://www.yalerussianchorus.org">
        Yale Russian Chorus
      </StyledLink>, and a former (but still proud) member of the{" "}
      <StyledLink href="http://www.yaleballroom.org/">
        Yale Ballroom Dance Team
      </StyledLink>.
      <br />
      <br />
      Last summer I was been lucky to be part of the team at{" "}
      <StyledLink href="https://www.patientbank.us/">
        PatientBank
      </StyledLink>{" "}
      (YC S16) and help build software that requests, stores, and manages
      medical records for thousands of Americans.
      <br />
      <br />
      What's next? I'll be heading to{" "}
      <StyledLink href="https://www.facebook.com/">Facebook</StyledLink> soon to
      work on{" "}
      <StyledLink href="https://www.instagram.com/">Instagram</StyledLink>, and
      after that I'll be interning at{" "}
      <StyledLink href="https://blend.com/">Blend Labs</StyledLink>.
    </IntroText>
    <ContactContainer>
      <ContactHeading>Let's get in touch.</ContactHeading>
      <EmailContainer>
        <a href="mailto:cyrieu@gmail.com">
          <EmailIcon className="fa fa-lg fa-envelope-o" aria-hidden="true" />
        </a>
      </EmailContainer>
    </ContactContainer>
  </GridContainer>
);

export default IndexPage;
