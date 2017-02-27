import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter } from'react-router-dom'

import Pages from './pages/containers/page.jsx'

render (
	<BrowserRouter>
  	<Pages/>
	</BrowserRouter>,
	document.getElementById('render-target')
)
