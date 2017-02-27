import React, {Component} from 'react'
import { Link } from'react-router-dom';

class Home extends Component {
	render() {
		return (
			<section>
				<h1>HOME</h1>
				<Link to='/about'>
					Go to About
				</Link>
			</section>
		)
	}
} 

export default Home