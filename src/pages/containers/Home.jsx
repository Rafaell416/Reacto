import React, {Component} from 'react'
import { Link } from'react-router-dom';
import api from '../../api.js'

class Home extends Component {

	constructor(props) {
		super(props)

		this.state = {
			page: 1,
			posts,
			loading: true,
		}
	}

	async componentDidMount() {
		const post = await api.post.getList(this.tate.page)

		this.setState({
			posts,
			page: this.state.page + 1,
			loading: false,
		})
	}

	render() {
		return (
			<section>
				<h1>HOME</h1>
				<section>
					{this.state.loading && (
						<h2>-->Loading Posts...</h2>
					)}
				</section>
				<Link to='/post/:id'>
					Go to Post
				</Link>
				<Link to='/user/:id'>
					Go to Profile
				</Link>
			</section>
		)
	}
} 

export default Home