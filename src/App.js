import React, { Component } from 'react';
import './App.css';

class App extends Component { 
	constructor(props) {
		super(props);
		this.state = {
			sauces: [
				{name: "Tabasco", votes: 0},
				{name: "Frank's Red Hot", votes: 0},
				{name: "Cholula", votes: 0},
				{name: "Sriracha", votes: 0},
				{name: "Crystal", votes: 0},
				{name: "Texas Pete", votes: 0}
			]
		};
	}

	vote(i) {
		let v = [...this.state.sauces];
		v[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		function bubbleSort(array) {
			for(var i = array.length - 1; i >= 0; i--) {
				for(var j = array.length - 2; j >= 0; j--) {
					if(array[j + 1].votes > array[j].votes) {
							swap(array, j + 1, j);
					}
				}
			}
			return array;
		}
		bubbleSort(v);
		this.setState({sauces: v});
	}
	
	render() {
		return (
			<div className="container">
				<div className="col col-lg-8 home">
					<div className="card">
						<div className="jumbotron">
							<center><h1>Vote for Your Favorite Hot Sauce!</h1></center>
						</div>
							{
								this.state.sauces.map( (v, i) => 
									<div key={i} className="class">
										<div className="card-body">
											<div className="row">
												<div className="col col-sm-3">
													<center>
														<button type="button" class="btn btn-danger" onClick={this.vote.bind(this, i)}>Votes: {v.votes}</button>
													</center>
												</div>
												<div className="col">
													<h4>{v.name}</h4>
												</div>
											</div>
										</div>
									</div>
								)
							}
					</div>
				</div>
			</div>
		)
	}
}

export default App;

