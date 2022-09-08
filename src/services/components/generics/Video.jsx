import { useFetchImg } from "../../hooks/useFetchImg"

export const Video = ({ url, miniCapture }) => {

    const pathStorageImg = useFetchImg(miniCapture)
    const pathStorageVid = useFetchImg(url)

    return (
        <section className='container-fluid conVideo mb-5' >
            {
                (!pathStorageImg.isLoading && !pathStorageVid.isLoading)
                    ? (<video src={pathStorageVid.url} controls
                        poster={pathStorageImg.url}
                        type="video/mp4"
                        preload="auto" loop>
                            Tu navegador no puede reproducir el video.
                    </video>)
                    : <img src="/assets/basic/noImg.gif" alt="isLoading" />
            }
        </section>
    )
}
