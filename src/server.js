'use strict'

import React from'react'
import http from 'http'
import {renderToString} from 'react-dom/server'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Pages from './pages/containers/page.jsx'



function reqHandler (req, res) {

	let context = {}

	let html = renderToString(
				<StaticRouter location={req.url} context={context}>
					<Pages />
				</StaticRouter>
	)

	res.setHeader('Content-Type', 'text/html')

	if (context.url) {
	res.writeHead(301, {
		Location: context.url,
	})
		res.end();
  } 

	res.write(html)
	res.end()
}

const server = http.createServer(reqHandler)
server.listen(3000)
console.log('server is listening at port 3000')