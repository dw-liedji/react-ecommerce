import '../styles/Banner.css'
import logo from '../assets/logo.png'

const Banner = () => {
  return (
    <div className="lmj-banner">
      <div className="lmj-title">
        <h1>La maison jungle </h1>
      </div>
      <div>
        <img className="lmj-logo" src={logo} alt="La maison jungle logo" />
      </div>
    </div>
  )
}

export default Banner
