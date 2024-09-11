import React from 'react';
// import './FlatCard.css'; // Ensure the CSS file is named correctly
// import Img from '../assets/checkmark.png'

const cardsData = [
    {
        id: 1,
        imgUrl: 'https://static.vecteezy.com/system/resources/previews/043/473/489/non_2x/smiling-teenage-boy-with-laptop-standing-isolated-on-transparent-png.png',
        title: 'Card 1',
        description: 'This is a description for Card 1.',
    },
    {
        id: 2,
        imgUrl: 'https://static.vecteezy.com/system/resources/previews/036/005/229/non_2x/3d-girl-character-get-confused-when-reading-a-book-free-png.png',
        title: 'Card 2',
        description: 'This is a description for Card 2.',
    },
    {
        id: 3,
        imgUrl: 'https://static.vecteezy.com/system/resources/previews/023/477/459/non_2x/ai-generative-cartoon-laptop-with-books-free-png.png',
        title: 'Card 3',
        description: 'This is a description for Card 3.',
    },
    {
        id: 4,
        imgUrl: 'https://static.vecteezy.com/system/resources/previews/022/984/743/non_2x/tree-book-free-illustration-icon-free-png.png',
        title: 'Card 4',
        description: 'This is a description for Card 4.',
    },
];

const FlatCard = () => {
    return (
        <section style={{marginTop:'10rem'}}>

        
        <div className="card-container-1">

            {cardsData.map((card) => (
                <div className="box" key={card.id}>
                    <h2 className="card-title1">{card.title}</h2>
                    <div className="single-box">
                        <div className="card-image">
                            <img alt={card.title} className="card-img" src={card.imgUrl} />
                        </div>
                        <div className="card-content">
                            
                            <p className="card-description"></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
};

export default FlatCard;
