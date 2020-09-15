import React from 'react'
import { Container } from 'reactstrap'
import Base from '../Base'
import style from './style.module.css'

export default ({ children, title }) => (
  <Base>
    <Container className="text-center py-4">
      <h1>{title}</h1>
    </Container>
    <Container className={style.container + " p-4"}>
      { children }
    </Container>
  </Base>
)
