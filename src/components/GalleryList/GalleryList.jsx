import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

// props pass from App.jsx are galleryList and loveIt
function GalleryList ({galleryList, loveIt}) {

    return(
        <>
        <div>
            <ul>
                <div>
                    {
                        galleryList.map(gallery => (
                            <GalleryItem
                                key={gallery.id}
                                
                            // passing the props to GalleryItem
                                gallery={gallery}
                                loveIt={loveIt}
                                
                            />
                        ))
                    }
                </div>
            </ul>
        </div>
        </>
    )
}; // end of function

export default GalleryList;