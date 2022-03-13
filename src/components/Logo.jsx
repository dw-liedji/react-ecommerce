import {Fragment} from 'react'
import '../styles/Banner.css'
import logo from '../assets/logo.png'

const Logo = () => {
  return (
    <Fragment>
      <div className="lmj-title">
        <h1>La maison jungle </h1>
      </div>
      <div>
        <img className="lmj-logo" src={logo} alt="La maison jungle logo" />
      </div>
    </Fragment>
  )
}

export default Logo
