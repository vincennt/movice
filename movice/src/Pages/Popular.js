import React, { Component } from 'react'

export default class Popular extends Component {
    constructor(){
        super()
        this.state={
            movies : []
        }   
        //bind
    }
    //method
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9958597c07ec90e02675c97691bf4506')
            .then(res => res.json())
            .then(result => {
        this.setState({ movies: result })
      })
    }
    render() {
        console.log(this.state.movies);
        return (
            <div>
               
            </div>
        )
    }
}

