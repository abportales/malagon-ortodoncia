
export const GalleryItem2 = ({ imageName }) => {

    // const path = `/assets/img/patients/${imageName}.jpg`

    return (
        <>
            {/* <div className="card" style={{ backgroundImage: `url(imageName)` }}> */}
            {/* <div className="card"> */}
                <img src={imageName} alt="" height={250}/>
            {/* </div> */}
        </>
    )
}
