 console.log("Hello from external JavaScript.");
 alert("Welcome to my Website!");
//
 let color = prompt("What is your favorite color?");
     alert("Great, " + color + " is my favorite color too!");

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
let daysOfLittleMermaid = prompt("How many days did you rent The Little Mermaid?");
let daysOfBrotherBear = prompt("How many days did you rent Brother Bear?");
let daysOfHercules = prompt("How many days did you rent Hercules?");
let totalCost = (daysOfLittleMermaid * 3) + (daysOfBrotherBear * 3) + (daysOfHercules * 3);
alert("Your total rent cost is " + totalCost + " dollars");

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let hoursAtGoogle = prompt("How many hours did you work at Google?");
let payAtGoogle = prompt("What is your hourly pay rate at Google?");
let hoursAtAmazon = prompt("How many hours did you work at Amazon?");
let payAtAmazon = prompt("What is your hourly pay rate at Amazon?");
let hoursAtFacebook = prompt("How many hours did you work at Facebook?");
let payAtFacebook = prompt("What is your hourly pay rate at Facebook?");
let totalPay = (hoursAtGoogle * payAtGoogle) + (hoursAtAmazon + payAtAmazon) + (hoursAtFacebook + payAtFacebook);
alert("Your total pay is: " + totalPay + " dollars");

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
//let classNotFull = false;
// let noScheduleConflict = false;
// let canEnroll = classNotFull && noScheduleConflict;
// console.log(canEnroll);
let classNotFull = confirm("Is the class full?");
let noScheduleConflict = confirm("Is there a scheduling conflict?");
let canEnroll = !classNotFull && !noScheduleConflict;
if (canEnroll) {
     alert("You can enroll")
 } else {
     alert("You can't enroll");
 }

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

 let numberOfItemsBought = prompt("How many items did the customer buy?");
 let offerExpired = confirm("Has the offer expired?");
 let premiumMember = confirm("Is the customer a premium member?");
 let makeProductOffer = (premiumMember || numberOfItemsBought > 2) && !offerExpired;

 if (makeProductOffer) {
     alert("You get a product offer!")
 } else {
     alert("You are an inferior customer. You must be terminated.")
 }
