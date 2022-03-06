import React from 'react';
import data from "../memeData.js";

function Meme() {
    // 
    // let imageURL="";
    const [meme, setMeme] = React.useState({
        topText: "hello",
        bottomText: "world",
        randomImage: "https://i.imgflip.com/1ihzfe.jpg"
    });
    const [allMemesImages, setAllMemesImages] = React.useState(data.data.memes);

    function handleClick() {
        const index = Math.floor(Math.random() * allMemesImages.length);
        console.log(allMemesImages[index].url);
        setMeme((prevState) => ({
            ...prevState,
            randomImage: allMemesImages[index].url
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleMouse() {
        console.log("I am hovered over");
    }
    return (
        <div className="meme">
            <div className="form">
                <div className="form__box1">
                    <input type="text" onChange={handleChange} name="topText" value={meme.topText}></input>
                    <input type="text" onChange={handleChange} name="bottomText" value={meme.bottomText}></input>

                </div>
                <div className="form__box2">
                    <button onClick={handleClick}>Get a new meme image</button>
                </div>
            </div>
            <div className="image__container">
                <img onMouseOver={handleMouse} src={meme.randomImage} alt="meme1" />
                <h1 className="top__text">{meme.topText}</h1>
                <h1 className="bottom__text">{meme.bottomText}</h1>
            </div>


        </div>

    );
}

export default Meme;