import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail/>,
                title:"free cocktails",
                info:"Coktails hand crafted by world reknown flows freely bartenders",   
                
            },
            {
                icon: <FaHiking/>,
                title:"fun hiking",
                info:"Coktails hand crafted by world reknown flows freely bartenders",   
                
            },
            {
                icon: <FaShuttleVan/>,
                title:"free shuttle",
                info:"Coktails hand crafted by world reknown flows freely bartenders",   
                
            },
            {
                icon: <FaBeer/>,
                title:"Strongest Beer",
                info:"Coktails hand crafted by world reknown flows freely bartenders",   
                
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                  {this.state.services.map((item,index) => {
                      return <article key={index} className="service">
                      <span>{item.icon}</span>
                      <h6>{item.title}</h6>
                      <p>{item.info}</p>
                      </article>
                  })}
                </div>
            </section>
        )
    }
}
