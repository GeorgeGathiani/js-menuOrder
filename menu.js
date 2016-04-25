// begin with a blank/new order
var chapati = ["None", "Brown","Cheeseburger","White", ];
var pilau  = ["None", "Kavu","Nyama"];
var samosa = ["None", "Vegetable", "Beef", "Chicken"];



// build a function to ask questions

function question() {
  var orderPrompt = "Choose an option. Please enter number: \n";
 var answerPrompt = "notanumber";
}

for(i=0;i<foodArray.length;i++){
   orderPrompt += i + " - " + foodArray[i] + "\n";
 }
 while(isNaN(answerPrompt)){
   answerPrompt = prompt(orderPrompt);
 }
 
// call the QUESTION function with the order options
question(chapati);
question(pilau);
question(samosa);


// output their order
document.write("<p>You ordered: " + order + "<p>");
