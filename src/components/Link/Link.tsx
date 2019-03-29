import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

interface LinkProps {
    url: string;
    children: React.ReactNode;
    external?: boolean;
    noBlankTarget?: boolean;
    color?: string;
    className: string;
}

function Link(props: LinkProps) {
    return (
        props.external 
            ? <div className={props.className}>
                <a href={props.url} target={props.noBlankTarget ? '' : '_blank'}>{props.children}</a>
            </div>
            : <RouterLink className={props.className} to={props.url}>
                    {props.children}
                </RouterLink>
    )
}

const StyledLink = styled(Link)`
    width: fit-content;
    font-size: 1.6rem;
    padding: 0.8rem 1.8rem;
    font-weight: bold;
    box-sizing: border-box;
    border-radius: 3px;
    background: ${(props: any) => props.theme.colors[props.color]};
    text-decoration: none;
    text-align: center;
    color: white;
    cursor: pointer;
    &:hover {
        background: ${(props: any) => props.theme.colors[`${props.color}Dark`]};
    }
`

export { StyledLink as Link };