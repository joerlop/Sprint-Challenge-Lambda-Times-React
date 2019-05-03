import React from 'react';
import styled from "styled-components";

const ContainerCenterSpan = styled.span`
    cursor: pointer;
    margin-right: 5%;

    :last-child {
        margin-right: 0;
    }

    :hover {
        text-decoration: underline;
    }
`;

export default ContainerCenterSpan;