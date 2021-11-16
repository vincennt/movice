import React, { Component } from 'react'
import '/Users/vins/Documents/konexio/react/movice/movice/src/styles/Card.css'


export default class Card extends Component {
    render() {
        const { movies ,title,release_date, overview,posterPath}= this.props
        console.log(this.props);
        return (
               
                    <div className='row align-items-start'>
                        <div className='col-6'> 
                            <img src={`https://image.tmdb.org/t/p/w300/${posterPath}`} alt="Présentation film" />
                        </div>
                        <h1>{title}</h1>
                        <h4>{release_date}</h4>
                        <p>{overview}</p>
                    </div>
               
  
            
        )
    }
}
