import { reviewsHome } from "../data/reviewsHome";

export const getReviewsForNumber = (numberOfReviews = 0) => {
  
    // console.log(`valor en fn: ${numberOfReviews}`)
    const allReviews = reviewsHome;

    // console.log(numberOfReviews > allReviews.length)
    if(numberOfReviews === 0 || numberOfReviews > allReviews.length) return allReviews;

    return allReviews.slice(0,numberOfReviews)
}
