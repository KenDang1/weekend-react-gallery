import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({galleryList}) {

    return(
        <>
        <div>
            <h1>My Gallery</h1>
            <ul>
                <div>
                    {
                        galleryList.map(gallery => (
                            <GalleryItem
                                key={gallery.id}
                                gallery={gallery}
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