import "./GalleryItem.css";
import {useState} from 'react';

// props gallery and loveIT
function GalleryItem({gallery, loveIt}) {

    const [isClicked, setIsClicked] = useState(false);
    const toggleChange = () => setIsClicked(!isClicked);
    const picture = <img src={gallery.path} height= "100px" width="100px"/>

    const onLoveIt = () => {
        // target the id so it know which one to like
        loveIt(gallery.id);
    };

    return (
        <>
        <div className="item">
            <div>
                <button  onClick={toggleChange}>{isClicked? gallery.description : picture}</button>
            </div>
            <br />
            <button className='like' onClick={onLoveIt}>Love It ❤️</button>
            <br />
            <span>People love it: {gallery.likes} </span>
        </div>
        </>
    )
};

export default GalleryItem;