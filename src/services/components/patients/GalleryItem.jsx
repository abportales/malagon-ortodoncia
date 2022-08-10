
export const GalleryItem = ({
    id,
    path,
    info,
    width,
    height,
    section,
}) => {

    const openInNewTab = url => {
        window.open(path, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=720,height=720");
      };
    return (
        <>
            {/* <a href={path} data-lightbox="gallery"> */}
                <img
                    className='img-thumbnail image'
                    style={{ width: width, height: height }}
                    src={path}
                    alt={info}
                    onClick={() => openInNewTab(path)}
                />
            {/* </a> */}
        </>
    )
}
