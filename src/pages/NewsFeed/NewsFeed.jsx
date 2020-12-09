import React, { useContext } from 'react'
import {
  Redirect
} from 'react-router-dom'
import {
  NavBar
} from '../../components/index.js'
import {
  Container
} from 'reactstrap'
import { AuthContext } from '../../context/AuthContext.js'

const NewsFeed = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <React.Fragment>
      <NavBar/>
      <Container>
        Hola, este es tu newfeed
      </Container>
      { !isAuth && <Redirect to="/login" /> }
    </React.Fragment>
  )
}

export default NewsFeed
