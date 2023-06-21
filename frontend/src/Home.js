import React from 'react';
import './Home.css';
import NavBar from './NavBar';
import Trees from './images/Treeslayer.png';
import Birds from './images/twobirds.png';
import SearchBar from './SearchBar.js';


// import ParkCard from'./ParkCard.js';



function Home() {

    return (
        <div className='wrapper'>    
            <header>
            <h1 className="title">Tree Trek</h1>
            <img src={Birds} className='birds'></img>
            <img src={Trees} className='foreground'></img>
            </header>
            
            <section>
                <h1>Welcome to National Park Tree Trek</h1>
                <h3>Get Ready for camping!</h3>
                <h4>You can look up information about the National Parks and save Campinglists</h4>
                <NavBar/>
                {/* <ParkCard /> */}
                <SearchBar/>
                
            </section>

        </div>

    )
}
export default Home;