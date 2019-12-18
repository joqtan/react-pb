import React from 'react'
import './styles/Badge.css'
import confLogo from '../images/badge-header.svg'
class Badge extends React.Component {
  render() {
    return (
      <h3 className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt='Logo'></img>
        </div>

        <div className='Badge__section-name'>
          <img
            className='Badge__avatar'
            src={this.props.avatarURL}
            alt='Avatar'
          ></img>
          <h1>
            {this.props.firstName}
            <br /> {this.props.lastName}
          </h1>
        </div>

        <h3 className='Badge__section-info'>
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </h3>

        <div className='Badge__footer'>
          <p>#platziconf</p>
        </div>
      </h3>
    )
  }
}

export default Badge
