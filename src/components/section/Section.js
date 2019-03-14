import React from 'react'

import SectionItem from '../section-item/SectionItem'

const Section = ({data}) => {
    return <div>
        {data.map(es => <div key={es.title}><a name={es.tag}><h2>{es.title}</h2></a>
         {es.features.map(feature => <SectionItem key={feature.title} data={feature}/>)} </div>)}
    </div>
}

export default Section;