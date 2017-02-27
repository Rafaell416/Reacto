import React, {Component} from 'react'
import { Link } from'react-router-dom';

class Home extends Component {
	render() {
		return (
			<section>
				<h1>HOME</h1>
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