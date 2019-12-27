import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Home.css'

import PlatziConfLogo from '../images/platziconf-logo.svg'
import Astronauts from '../images/astronauts.svg'

export default class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <div className='container'>
          <div className='row'>
            <div className='Home__col col-12 col-md-4'>
              <img
                className='img-fluid mb-2'
                src={PlatziConfLogo}
                alt='Platzi Conf Logo'
              />
              <h1>Print your badges</h1>
              <p>The easiest way to manage your conference</p>
              <Link className='btn btn-primary' to='/badges'>
                Start now
              </Link>
            </div>
            <div className='Home__col d-none d-md-block col-md-8'>
              <img
                className='img-fluid mb-4'
                src={Astronauts}
                alt='Astronauts'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
