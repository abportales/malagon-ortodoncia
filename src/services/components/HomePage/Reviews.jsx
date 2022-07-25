import AOS from 'aos'
import { reviewsHome } from '../../data/reviewsHome'
import { ReviewItem } from './ReviewItem'

export const Reviews = () => {
    AOS.init({ duration: 1000 }) // values from 0 to 3000, with step 50ms)
    const reviews = reviewsHome

    return (
        <>
            <div className="container-fluid" >
                <div id="title" className='text-dark w-50 m-auto'>
                    <h1><i className="bi bi-facebook fs-1 mx-1 text-primary"></i> Opiniones </h1>
                </div>
                <div className="row w-50 m-auto" id="reviews">
                    {
                        reviews.map((review) => (
                            <ReviewItem key={review.id} {...review}/>)
                        )
                    }
                </div>
            </div>
        </>
    )
}
