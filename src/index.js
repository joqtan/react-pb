import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import Badge from './components/Badge'

const container = document.getElementById('app')

ReactDOM.render(
  <Badge
    firstName="Joqtán"
    lastName="Mármol"
    avatarURL=''
    jobTitle="Frontend Dev"
    twitter="joqtan_"    
  />,
  container
)
