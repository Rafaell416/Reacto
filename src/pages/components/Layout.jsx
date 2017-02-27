import React from 'react'

//esta funcion renderiza el contenedor o layout donde se cargarán las vista
function Layout (props) {
	return (
		<html>
			<head>
				<meta charSet="utf-8"/>
				<title>{props.title}</title>
			</head>
			<body>
			{/*aqui estamos insertando el contenido que viene del client dentro del layout*/}
				<div
					id='render-target'
					dangerouslySetInnerHTML={{
						__html: props.content,
					}}
				/>
				<script src='http://localhost/3001/app.js' />
			</body>
		</html>
	)
}

export default Layout