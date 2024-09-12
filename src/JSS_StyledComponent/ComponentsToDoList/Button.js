import styled from 'styled-components';
import React from 'react'

export const Button = styled.button`
  appearance: none;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  border: ${(props) => props.theme.borderButton};
  padding: 0.25em 0.5em;
  transition: all 0.5s;
  font-size: 17px;
  margin-left: 0.5rem;

  &:hover {
    color: ${(props) => props.theme.hoverTextColor};
    background-color: ${(props) => props.theme.hoverBgColor};
    border: ${(props) => props.theme.borderButton};
  }
  &:disabled {
    cursor: no-drop;
  }
`;


// export const Button = ({className, children, ...resprops}) => {
//     <a className={className} {...resprops}>
//         {children}
//     </a>
// }
