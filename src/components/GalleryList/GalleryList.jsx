import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList ({item}) {
    return(
        <>
        <div>
            <ul>
                {
                    item.map(gallery => (
                        <GalleryItem 
                        key={gallery.id}
                        gallery={gallery}
                        />
                    ))
                }
            </ul>
        </div>
        </>
    )
}; // end of function

export default GalleryList;