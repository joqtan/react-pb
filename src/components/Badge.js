import React from 'react'
import confLogo from '../images/badge-header.svg'
class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo"></img>
        </div>

        <div>
          <h1>
            Joqtán
            <br /> Marmol
          </h1>
        </div>

        <div>
          <img src="" alt="Avatar"></img>
          <p>Frontend developer</p>
          <p>@joqtan_</p>
        </div>

        <div>
          <p>#platziconf</p>
        </div>
      </div>
    )
  }
}

export default Badge
