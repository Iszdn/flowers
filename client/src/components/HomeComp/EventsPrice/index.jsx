import React from 'react'
import "./index.scss"
import Card from '../../Card'
import EventsCard from '../../eventsCard'
const Events = () => {
  return (
    <section id='events'>
       <div className="header-content">
  <h4>Devoted to wonderful beauty</h4>
  <h3>Flowers Pricing</h3>
</div> 
    <div className="container">
        <div className="row">
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
       
        </div>
    </div>
    </section>
  )
}

export default Events