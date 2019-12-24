import React from 'react'
import './styles/BadgeNew.css'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/badge-header.svg'
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='logo'></img>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName='Joqtán'
                lastName='Mármol'
                jobTitle='Frontend developer'
                twitter='joqtan_'
              />
            </div>
            <div className="col-6">
              <BadgeForm/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew
