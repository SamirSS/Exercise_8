// With a partner, do the following:
// take a story from https://www.gutenberg.org/ebooks/search/?sort_order=downloads
// bring the text into P5 as a string
// Use at least 3 expressions to parse the string of text.
// use http://regexr.com/ as guide to formulate your expressions

//For homework finish the above individually to also include:

// visualize your data in some interesting way.
// extra points for movement, procedural aspects or interactivity

var rawText, joinedText;
var beginPoint, endPoint;
var story, cleaner, cleaner2, cleaner3, word;

function preload() {
  rawText = loadStrings("data/Douglass.txt");
}


function setup() {
  createCanvas(500, 500);
  background(255);
  
  // cleans up beginning and end, leaves only the actual story behind
  joinedText = join(rawText, " "); 
  beginPoint = joinedText.indexOf("In the month of");
  console.log(beginPoint);
  
  var endL = "THE END"; 
  endPoint = joinedText.indexOf("THE END");
  console.log(endPoint);
  
  story = joinedText.substring(beginPoint, endPoint + endL.length); 
  // for some reason there are underscores around all the people's names,
  // this gets rid of them
  cleaner = story.replace(/_/g, '');
  //console.log(cleaner);


  cleaner2 = cleaner.replace(/--/g, '');

  cleaner3 = cleaner2.replace(/,/g, '#');
  console.log(cleaner3);

  word = cleaner3.match(/Douglass/g);
  //console.log(word)
}


function draw() {
  noStroke();
  fill(115, 199, 147);
  
  for (var i = 0; i <= word.length; i++) {
    ellipse(i*32, random(height), 8, 8);
  }  
  
}