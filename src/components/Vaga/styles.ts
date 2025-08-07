import styled from 'styled-components'
import { AnchorHTMLAttributes } from 'react'

export const VagaContainer = styled.li`
  border: 1px solid ${(props: any) => props.theme.colors.primary};
  background-color: ${(props: any) => props.theme.colors.secondary};
  color: ${(props: any) => props.theme.colors.primary};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${(props: any) => props.theme.colors.primary};
    color: ${(props: any) => props.theme.colors.secondary};
  }

  &:hover a {
    border-color: ${(props: any) => props.theme.colors.primary};
    background-color: ${(props: any) => props.theme.colors.secondary};
    color: ${(props: any) => props.theme.colors.primary};
  }
`

export const VagaTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a<AnchorHTMLAttributes<HTMLAnchorElement>>`
  border-color: ${(props: any) => props.theme.colors.secondary};
  background-color: ${(props: any) => props.theme.colors.primary};
  color: ${(props: any) => props.theme.colors.secondary};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: ${(props: any) => props.theme.breakpoints.mobile}) {
    display: block;
  }
`
