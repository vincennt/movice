import React, { Component } from 'react'
import '/Users/vins/Documents/konexio/react/movice/movice/src/styles/Card.css'


export default class Card extends Component {
    render() {
        const { onClick,title,release_date, overview,posterPath, currentBattle}= this.props
        console.log(this.props);
        return (
               
                    <div  className='col-6'>
                        <div className=''> 
                            <img src={`https://image.tmdb.org/t/p/w300/${posterPath}`} 
                            alt="Présentation film"
                            onClick={() => onClick(currentBattle)}
                            />
                        </div>
                        <h1>{title}</h1>
                        <h4>{release_date}</h4>
                        <div><p>{overview}</p></div>
                    </div>
               
  
            
        )
    }
}
