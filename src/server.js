'use strict'

import React from'react'
import http from 'http'
import {renderToString, renderToStaticMarkup} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Pages from './pages/containers/page.jsx'
import Layout from './pages/components/Layout.jsx'



function reqHandler (req, res) {

	let context = {}

	//aqui llamamos las direfentes vistas de la aplicación
	let html = renderToString(
				<StaticRouter location={req.url} context={context}>
					<Pages />
				</StaticRouter>
	)

	//se asegura que la data que renderice sea html
	res.setHeader('Content-Type', 'text/html')

	//validación de readirección
	//si hay una petición de redireccion esta es llevada a la ruta donde quiere ir
	if (context.url) {
	res.writeHead(301, {
		Location: context.url,
	})
		res.end();
  } 

  //renderizamos el contenido html
	res.write(
		renderToStaticMarkup(
			<Layout
				title="Aplicación"
				content={html}
			/>
		)
	)
	res.end()
}

//inicio del servidor http
const server = http.createServer(reqHandler)
server.listen(3000)
console.log('server is listening at port 3000')