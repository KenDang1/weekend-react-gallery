
// props gallery and loveIT
function GalleryItem({gallery, loveIt}) {

    const onLoveIt = () => {
        // target the id so it know which one to like
        loveIt(gallery.id);
    };

    return (
        <>
        <div>
        <img src={gallery.path} height="100px" width="100px"/>
        <br />
        <button className='like' onClick={onLoveIt}>Love It ❤️</button>
        <br />
        <span>People love it: {gallery.likes} </span>
        </div>
        </>
    )
};

export default GalleryItem;