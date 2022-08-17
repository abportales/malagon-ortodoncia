import { getReviewsForNumber } from '../../helpers/getReviewsForNumber'
import { ReviewItem } from '../generics'


export const Reviews = ({ numberOfReviews, bgColor }) => {

    const reviews = getReviewsForNumber(numberOfReviews)
    
    return (
        <>
            <div className={`container-fluid w-100 d-flex justify-content-center ${bgColor}`}>
                <div className="d-flex flex-column w-50 review pt-3 gap-2">
                    <h1 className='text-info titleColor1'><i className="bi bi-facebook fs-1 text-info"></i> Opiniones </h1>
                    {
                        reviews.map((review) => (
                            <ReviewItem key={review.id} {...review} />)
                        )
                    }
                </div>
            </div>
        </>
    )
}
