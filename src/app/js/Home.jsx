import React from 'react'

const Home = props => {

    return (
        <div className="container">
            {props.user && (<h1>Du bist im Admin-Modus</h1>)}
        </div>
    )
}

export default Home
