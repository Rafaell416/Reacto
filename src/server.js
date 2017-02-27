'use strict'

import React from'react'
import {renderToString} from 'react-dom/server'
import express from 'express'

let app = express()

app.get('/', (req, res) => {
	const html = renderToString(
		React.DOM.h1(null, 'hola')
	)

	res.write(html)
	res.end()

})

app.listen(3000, (err) => {
	if (err) return console.error( `hubo un error ${err}`), process.exit(1)
		console.log('express is listening at port 3000')
})


// function requestHandler(request, response){
// 	const html = renderToString(
// 		React.DOM.h1(null, 'hola')
// 	)

// 	response.write(html)
// 	response.end()
// }

// const server = http.createServer(requestHandler)
// server.listen(3000)
// console.log('server listening')