import { reviewsHome } from "../data/reviewsHome";

export const getReviewsForNumber = (numberOfReviews = 0) => {
  
    const allReviews = reviewsHome;

    console.log(numberOfReviews > reviewsHome.length)
    if(numberOfReviews === 0 || numberOfReviews > reviewsHome.length) return allReviews;

    return allReviews.slice(0,numberOfReviews)
}
