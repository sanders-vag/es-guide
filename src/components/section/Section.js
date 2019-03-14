import React from 'react'
import SectionItem from '../section-item/SectionItem'

const Section = ({data}) => {
    return <div>
        {data.map(es => <div key={es.title}><h2>{es.title}</h2>
         {es.features.map(feature => <SectionItem data={feature}/>)} </div>)}
    </div>
}

export default Section;