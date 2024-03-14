import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaCar, FaHeartbeat } 
from 'react-icons/fa';
import Title from '../Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktail",
                info:'A cocktail is a mixed drink typically made with a distilled liquor  as its base ingredient that is then mixed with other ingredients or garnishments. Sweetened liqueurs, wine,beer be added'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'Hiking is a kind of physical activity as well as a leisure activity . Hikers  enjoy fresh air and the beauty of nature. Many hikers enjoy challenging their physical and mental strength.'
            },
            {
                icon:<FaCar/>,
                title:"Free Transport",
                info:'Luxury car transport is a specialized service for moving luxury cars from one place to another. It involves the safe and secure transportation of these high-value vehicles.'
            },
            {
                icon:<FaHeartbeat/>,
                title:"Emergency Services",
                info:'Emergency medical services (EMS) paramedic services provide urgent pre-hospital treatment and stabilisation for serious illness and injuries and transport to definitive care'
            },
        ]
    }; 
  render() {
    return (
      <section className="services">
        <Title title="services"/>
        <div className='services-center'>
            {this.state.services.map((item,index) => {
                return <article key={index} className='service'>
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            } )}
      </div>
      </section>
    );
  }
}
