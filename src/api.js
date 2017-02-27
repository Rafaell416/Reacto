import fetch from 'isomorphic-fetch'

const baseUrl = 'https://jsonplaceholder.typicode.com'
//aqui estamos consumiendo la api externa de https://jsonplaceholder.typicode.com/
const api = {
	posts: {
		//peticion de la lista de datos
		async getList (page = 1) {
			//esperamos a que se resuelva la promesa de la peticion
			const response = await fetch (`${baseUrl}/posts?_page=${page}`)
			//transformamos los datos en json
			const data = await response.json()
			//retornamos los datos al usuario
			return data
		},
		//peticion de un solo daro
		async getSingle (id = 1) {
			const response = await fetch (`${baseUrl}/posts/${id}`)
			const data = await response.json()
			return data
		},
		//peticion de los comentarios
		async getComment (id = 1) {
			const response = await fetch (`${baseUrl}/posts/${id}/comments`)
			const data = await response.json()
			return data
		},

	},
	//peticion de la info del usuario
	users: {
		async getSingle (id = 1) {
			const response = await fetch (`${baseUrl}/users/${id}`)
			const data = await response.json()
			return data
		},
	}
}

export default api