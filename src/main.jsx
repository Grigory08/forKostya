import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./Header"

const rootElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(
  <Header />,
)
