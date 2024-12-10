// Increment review counter in localStorage
const reviewCounterKey = "reviewCounter";
let reviewCount = localStorage.getItem(reviewCounterKey) || 0;
reviewCount++;
localStorage.setItem(reviewCounterKey, reviewCount);

// Display the counter
document.getElementById("review-count").textContent = reviewCount;
