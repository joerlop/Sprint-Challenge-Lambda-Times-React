import React from 'react';

import HeaderContainer from "../Styles/Header/HeaderContainer"
import HeaderH1 from "../Styles/Header/HeaderH1"
import HeaderInfo from "../Styles/Header/HeaderInfo"

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInfo temp={false}>SMARCH 32, 2018</HeaderInfo>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderInfo temp>98°</HeaderInfo>
    </HeaderContainer>
  )
}

export default Header