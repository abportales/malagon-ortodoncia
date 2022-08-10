export const GalleryItem = ({
    id,
    path,
    info,
    width,
    height,
    section,
}) => {

    return (
        <>
            <a href={path} data-lightbox={section} data-title={info}>
                <img
                    className='img-thumbnail image'
                    style={{ width: width, height: height }}
                    src={path}
                    alt={info}
                />
            </a>
        </>
    )
}
