function calculateTip(amount, rating) {
    // standardize the rating input
    let lowerCaseRating = rating.toLowerCase();

    if (lowerCaseRating === "terrible") {
        return 0;
    } else if (lowerCaseRating === "poor") {
        return Math.ceil(amount * 0.05);
    } else if (lowerCaseRating === "good") {
        return Math.ceil(amount * 0.10);
    } else if (lowerCaseRating === "great") {
        return Math.ceil(amount * 0.15);
    } else if (lowerCaseRating === "excellent") {
        return Math.ceil(amount * 0.20);
    } else {
        return "Rating not recognised"
    }

}

// Parameter create a function that calculates tip based on bill and service
// Return the value of tip amount
// Example (30, "Good"), 3
// Create a string for the value of ratings
// use if else statements for function
// Concerns rounding up whole numbers

/* Ember's Feedback:
    Very good job!

    Giving my solution below "for the soup"
    Concerns for this problem would be if amount was not a number, or -
    rating not being a string, because we assume it will have toLowerCase().
*/
// Alternative Solution
function calculateTip(amount, rating) {
    if (isNaN(amount)) return 0;

    const tip = (percent) => Math.ceil(amount * percent);

    switch (rating?.toLowerCase()) {
        case "terrible":
            return 0;
        case "poor":
            return tip(0.05);
        case "good":
            return tip(0.1);
        case "great":
            return tip(0.15);
        case "excellent":
            return tip(0.2);
        default:
            return "Rating not recognised";
    }
}

