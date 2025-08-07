import styled from 'styled-components'
import {
  FormHTMLAttributes,
  InputHTMLAttributes,
  ButtonHTMLAttributes
} from 'react'

export const FormContainer = styled.form<FormHTMLAttributes<HTMLFormElement>>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props: any) => props.theme.colors.secondary};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const SearchButton = styled.button<
  ButtonHTMLAttributes<HTMLButtonElement>
>`
  background-color: ${(props: any) => props.theme.colors.primary};
  border: 1px solid ${(props: any) => props.theme.colors.primary};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props: any) => props.theme.colors.secondary};
  margin-left: 8px;
  cursor: pointer;
`

export const SearchField = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  outline-color: ${(props: any) => props.theme.colors.primary};
`
