import React from 'react';

import TopBarContainer from "../Styles/TopBar/TopBarContainer"
import Container from "../Styles/TopBar/Container"
import ContainerLeft from "../Styles/TopBar/ContainerLeft"
import ContainerLeftSpan from "../Styles/TopBar/ContainerLeftSpan"
import ContainerCenter from "../Styles/TopBar/ContainerCenter"
import ContainerCenterSpan from "../Styles/TopBar/ContainerCenterSpan"
import ContainerRight from "../Styles/TopBar/ContainerRight"
import ContainerRightSpan from "../Styles/TopBar/ContainerRightSpan"


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarContainer>
      <Container>
        <ContainerLeft>
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan><ContainerCenterSpan>BROWNBAG</ContainerCenterSpan><ContainerCenterSpan>RANDOM</ContainerCenterSpan><ContainerCenterSpan>MUSIC</ContainerCenterSpan><ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </ContainerRight>
      </Container>
    </TopBarContainer>
  )
}

export default TopBar;