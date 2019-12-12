// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react'
import ReactDOM from 'react-dom'

// const element = <h1>Hello, Platzi Badges!</h1>

//const element = React.createElement('h1', {}, 'Hola! soy los children.')

// const element = React.createElement(
//   'a',
//   { href: 'https://platzi.com' },
//   'Ir a platzi'
// )

//const name = 'Joqtán Alberto'

// const element = React.createElement(
//     'h1',
//     {},
//     `Hola soy ${name}`
// )

//const element = <h1>Hola, soy {name}</h1>

// const element = React.createElement(
//   'div',
//   {},
//   React.createElement('h1', {}, 'Hola, soy Joqtán'),
//   React.createElement('p', {}, 'Soy dev frontend')
// )

const element = (
  <div>
    <h1>Hola, soy Joqtán</h1>
    <p>Soy dev frontend</p>
  </div>
)

const container = document.getElementById('app')

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container)