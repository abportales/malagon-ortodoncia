import AOS from 'aos'
import { getReviewsForNumber } from '../../helpers/getReviewsForNumber'
import { ReviewItem } from './ReviewItem'

export const Reviews = ({numberOfReviews}) => {
    AOS.init({ 
        duration: 1000, 
        mirror:true,
        easing: 'ease'
     }) // values from 0 to 3000, with step 50ms)
     console.log(`valor: ${numberOfReviews}`)
    const reviews = getReviewsForNumber(3)

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
