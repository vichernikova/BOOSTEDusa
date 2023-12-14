import React from 'react';
import Button from '../button/Button';


const data = [
  {
    src: "../assets/skateboard.jpg",
	alt: "skateboard",
	title: "Electric Skateboards",
	subtitle: "IN STOCK"
  },
  {
    src: "../assets/scooter.jpg",
	alt: "scooter",
	title: "Electric Scooters",
	subtitle: "IN STOCK"
  },
  {
    src: "../assets/accenssories.jpg",
	alt: "accessories",
	title: "Accessories",
	subtitle: "IN STOCK"
  }
];

const Card = (props) => {
	return (
	  <div className="card">
		<img className="card-image" alt={props.alt} src={props.src} />
		<p className="card-title">{props.title}</p>
		<p className="card-subtitle">{props.subtitle}</p>
		<Button text='SHOP NOW' />
	  </div>
	);
  }
  
const CardList= () => {
	return (
	  <div className="card-list">
		{data.map((item, index) => (
		  <Card key={index} src={item.src} alt={item.alt} title={item.title} subtitle={item.subtitle} />
		))}
	  </div>
	);
  }
export default CardList;
