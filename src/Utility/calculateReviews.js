const calculateReviews = (reviews) => {
    const formatReviews = reviews >= 1000000 ? `${reviews / 1000000} M`
        : reviews >= 1000 ? `${reviews / 1000} K` : reviews;
    return formatReviews;
}
export default calculateReviews;