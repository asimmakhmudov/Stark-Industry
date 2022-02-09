import React from 'react';
import Carousel from 'react-elastic-carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import mark1 from '../assets/armors/mark1.jpg';
import mark2 from '../assets/armors/mark2.jpg';
import mark3 from '../assets/armors/mark3.jpg';
import mark7 from '../assets/armors/mark7.jpg';
import mark12 from '../assets/armors/mark12.jpg';
import mark21 from '../assets/armors/mark21.jpg';
import mark16 from '../assets/armors/mark16.jpg';
import mark19 from '../assets/armors/mark19.jpg';
import useSound from 'use-sound';
import armorSound from '../assets/sounds/armor.mp3';
const armor = [
    {
        id: 1,
        name: 'Mark 1',
        image: mark1,
    },
    {
        id: 2,
        name: 'Mark 2',
        image: mark2,
    },
    {
        id: 3,
        name: 'Mark 3',
        image: mark3,
    },
    {
        id: 4,
        name: 'Mark 7',
        image: mark7,
    },
    {
        id: 5,
        name: 'Mark 12',
        image: mark12,
    },
    {
        id: 6,
        name: 'Mark 16',
        image: mark16,
    },
    {
        id: 7,
        name: 'Mark 19',
        image: mark19,
    },
    {
        id: 8,
        name: 'Mark 21',
        image: mark21,
    },
]



const Category = () => {
    // const soundUrl = '/sounds/rising-pops.mp3';
    
    const [play, { stop }] = useSound(
        armorSound,
        { volume: 0.5 }
    );
    const [isHovering, setIsHovering] = React.useState(
        false
    );
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];
    return (
        <div className="Category" id='catego'>
            <h1>ARMORS</h1>
            <Carousel breakPoints={breakPoints} className='carousel'>
                {armor.map(item => (
                    <div className='box-${item.id}'>
                        <img
                            className='d-block'
                            src={item.image}
                            onMouseEnter={() => {
                                setIsHovering(true);
                                play();
                            }}
                            onMouseLeave={() => {
                                setIsHovering(false);
                                stop();
                            }}
                        />
                        <p className='text-center'>{item.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Category;
