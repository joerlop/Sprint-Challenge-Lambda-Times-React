import React from 'react';
import styled, { css } from "styled-components";

const HeaderInfo = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-left: 25px;
    flex: 1;

    ${props =>
        props.temp &&
        css`
            margin-left: 0;
            text-align: right;
            margin-right: 25px;
        `};
`;

export default HeaderInfo;