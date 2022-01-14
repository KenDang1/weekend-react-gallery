function GalleryList ({galleryList}) {
    return(
        <>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>My Gallery</th>
                    </tr>
                </thead>
                <tbody>
                    {galleryList.map(gallery => (
                        <tr key={gallery.id}>
                            <td>{gallery.path}</td>
                            <td>{gallery.description}</td>
                            <td>
                                <button>
                                Love it!!
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}; // end of function

export default GalleryList;