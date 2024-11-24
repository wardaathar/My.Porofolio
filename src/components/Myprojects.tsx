import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Todo list",
        desc: "A React  Css & TypeScript Based App For Managing and organizing your Task efficently.",
        img:"/todo.jpg",
        tags: ["React", "Nodes", "Css" , "TypeScript"],
    },
    {
        id: 1,
        title: "Resum Builder",
        desc: "A React & TypeScript Based App For Managing and organizing your Task efficently.",
        img:"/my.jpg",
        tags: ["React", "Nodes", "Css ", "TypeScript"],
    },
    {
        id: 2,
        title: "Simple Calculater Project",
        desc: "A  basics html TypeScript and java Managing and organizing your Task efficently.",
        img:"/node.jpg",
        tags: ["React", "Nodes", "Css" , "TypeScript"],
    },
    {
        id: 3,
        title: "My portfolio",
        desc: "A portfolio commands uses for html TypeScript and java Managing and organizing your Task efficently.",
        img:"/port.jpg",
        tags: ["React", "Nodes", "Css" , "TypeScript"],
    },
    {
        id: 4,
        title: "E-Commerce Website",
        desc: "A  basics Uses Srtle Css html TypeScript and java Managing and organizing your Task efficently.",
        img:"/e.commerce.jpg",
        tags: ["React", "Nodes", "Css" , "TypeScript"],
    },
    {
        id: 5,
        title: "React Project",
        desc: "A basics React and node.js project.",
        img:"/node.jpg",
        tags: ["React", "Nodes", "Css" , "TypeScript"],
    },
];

const Myprojects = () => {
  return (
    <div id='Myprojects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-8 xl:gap-0 xl:gap-y-10 md:grid-cols-3 lg-grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default Myprojects