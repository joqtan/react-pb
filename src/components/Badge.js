import React from 'react'
import './styles/Badge.css'
import confLogo from '../images/badge-header.svg'
class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo"></img>
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src="" alt="Avatar"></img>
          <h1>
            Joqtán
            <br /> Marmol
          </h1>
        </div>

        <div className='Badge__section-info'>
          <h3>Frontend developer</h3>
          <div>@joqtan_</div>
        </div>

        <div className='Badge__footer'>
          <p>#platziconf</p>
        </div>
      </div>
    )
  }
}

export default Badge
