import React from 'react'

export default function Display(props) {
    return (
        <div>
            <React.Fragment>
                <div>{props.movies.map(item=>{
                    return item
                })}</div>
                <div>{props.genre} {props.adult} {props.title} {props.overview} <br />
                <img src={`https://image.tmdb.org/t/p/w200${props.poster}`} alt={`${props.title} path`}></img>
                </div>
            </React.Fragment>
        </div>
    )
}
