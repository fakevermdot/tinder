import React, { useState } from 'react'
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:'Elon Musk',
            url: "https://d3i6fh83elv35t.cloudfront.net/static/2019/03/RTX6P9YW-e1670865740466-1024x637.jpg"
        },
        {
            name:'Jeff Bezos',
            url: "https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds"
        },
    ])

    const swiped = (directions, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(directions);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    }
  return (
    <div className='TinderCards'>
        <div className="tinderCards__cardContainer">
        {people.map((person) => (
            <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}>
                <div
                style={{backgroundImage: `url(${person.url})`}}
                className="card"
                >
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
        </div>
    </div>
  )
}

export default TinderCards