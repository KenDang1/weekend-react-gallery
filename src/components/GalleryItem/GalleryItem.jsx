function GalleryItem({gallery}) {
    return (
        <li key={gallery.id}>
            {gallery.path}
            {gallery.description}
        </li>
    )
};

export default GalleryItem;