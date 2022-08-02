import { getReviewsForNumber } from '../../helpers/getReviewsForNumber'
import { ReviewItem } from './ReviewItem'

export const Reviews = ({ numberOfReviews, bgColor }) => {

    // console.log(`valor: ${numberOfReviews}`)
    const reviews = getReviewsForNumber(numberOfReviews)

    return (
        <>
            <div className="container-fluid w-100" id={bgColor}>
                <div className="d-flex justify-content-center">
                    <div className='review w-50' id='review'>
                        <h1 className='text-info mx-auto pt-3 titleColor1'><i className="bi bi-facebook fs-1 text-info"></i> Opiniones </h1>
                        {
                            reviews.map((review) => (
                                <ReviewItem key={review.id} {...review} />)
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
