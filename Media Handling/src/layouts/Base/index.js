import React from 'react'
import style from './style.module.css'
import { Container } from 'reactstrap'

export default ({ children }) => (
  <Container
    fluid
    className={style.maxShape + " d-flex flex-column align-items-center justify-content-center bg-light"}
  >
    {children}
  </Container>
)
