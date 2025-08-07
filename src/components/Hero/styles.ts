import styled from 'styled-components'

export const HeroContainer = styled.section`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props: any) => props.theme.colors.primary};
    content: '';
    opacity: 0.7;
  }

  div {
    position: relative;
    color: ${(props: any) => props.theme.colors.light};
  }

  @media (max-width: ${(props: any) => props.theme.breakpoints.mobile}) {
    height: auto;
    padding: 24px 0;
  }
`

export const HeroTitle = styled.h2`
  font-family: ${(props: any) => props.theme.fonts.secondary};
  font-size: 48px;

  @media (max-width: ${(props: any) => props.theme.breakpoints.mobile}) {
    font-size: 32px;
  }
`
