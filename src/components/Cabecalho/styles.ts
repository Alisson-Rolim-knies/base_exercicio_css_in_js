import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props: any) => props.theme.colors.secondary};
  color: ${(props: any) => props.theme.colors.primary};
  text-align: center;
  padding: 24px 0;
`
