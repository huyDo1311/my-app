import styled from "styled-components";
import React from "react";
// export const Link = ({className, children, ...restProps}) => {
//     return <a className={className}>
//     {children}
// </a>
// }

export const Link = ({className, children, ...restProps}) => (
    <div className={className}>
        {children}
    </div>
)

export const StyleLink = styled(Link) `
    color: palevioletred;
    font-weight: bold;
`