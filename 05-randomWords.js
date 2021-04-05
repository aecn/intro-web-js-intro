// 05 Random Words

// arrays
var arrayFruit = [ "grape", "strawberry", "peach", "kiwi", "pineapple"];
var arrayOpinion = [ "like", "love", "dislike", "hate"];

// fetches random entry from arrays
var randomFruit = Math.floor(Math.random() * arrayFruit.length);
var randomOpinion = Math.floor(Math.random() * arrayOpinion.length);

// prints sentence "I'm eating a _____, I ____ it."
// the ____ is a random fruit from the array
console.log("I'm" + " " + "eating" + " " + "a" + " " + (arrayFruit[randomFruit])
+ "," + " " + "I" + " " + (arrayOpinion[randomOpinion]) + " " + "it" + ".");
