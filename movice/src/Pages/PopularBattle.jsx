import React, { Component } from 'react'
import Card from '../components/Card'

export default class PopularBattle extends Component {
    constructor(){
        super()
        this.state={
            movies : [],
            currentBattle : 0
        }   
        //bind
        this.nextMovies = this.nextMovies.bind(this)
    }
    //method
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9958597c07ec90e02675c97691bf4506')
            .then(res => res.json())
            .then(result => {
        this.setState({ movies: result.results })
      })
    }
    nextMovies(currentBattle){
       if(currentBattle<18){
      this.setState({currentBattle: currentBattle + 2})
      
     }
   }
    

    render() {
        const { movies, currentBattle }=this.state
        
        return (
            
             <div className="container">
          {this.state.movies.length !== 0 && 
            <>
              <Card 
                title={movies[currentBattle].title} 
                overview={movies[currentBattle].overview} 
                release_date={movies[currentBattle].release_date}
                posterPath={movies[currentBattle].poster_path}
                currentBattle={currentBattle}
                onClick={this.nextMovies}
                
                
              />
              <Card 
                 title={movies[currentBattle + 1].title} 
                overview={movies[currentBattle + 1].overview} 
                release_date={movies[currentBattle + 1].release_date}
                posterPath={movies[currentBattle + 1].poster_path}
                currentBattle={currentBattle}
                onClick={this.nextMovies}
              />   
            </>  
          }
           </div>
        
          
     )
  }

}  
  

