
export const GalleryItem = ({ imageName }) => {

    const path = `/assets/img/patients/${imageName}.jpg`

    return (
        <>
            <div className="card" style={{ backgroundImage: `url("/assets/img/patients/${imageName}.jpg")` }}>
            {/* <div className="card"> */}
                {/* <img src={path} alt="" height={250}/> */}
            </div>
        </>
    )
}
