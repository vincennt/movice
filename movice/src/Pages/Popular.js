import React, { Component } from 'react'
import Card from '../components/Card'

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
        this.setState({ movies: result.results })
      })
    }
    render() {
        const { movies }=this.state
        return (
            <div className='"container'>
               {movies.map( movie => (
               <div >
                   <Card 
                   movies={movie.movies}
                   title={movie.title}
                   release_date={movie.release_date}
                   overview={movie.overview}
                   posterPath={movie.poster_path}

                   />
                </div>))}
            </div>
        )
    }
}

