function GalleryItem({gallery}) {
    return (
        <>
        <div>
        <img src={gallery.path}/>
        <br />
        <button className='like'>Love It ❤️</button>
        <br />
        <span>People love it: 0 </span>
        </div>
        </>
    )
};

export default GalleryItem;