var helloMessage = "Aloha!";
console.log(helloMessage);
helloMessage = "Hey Yoooooo!";
console.log(helloMessage);





//var fruit = "guava", guavaNum = 3;
//console.log(fruit);
//console.log(guavaNum);


var womenNum = 20;
var menNum = 42;
var allPeopleNum = womenNum+menNum;
console.log(allPeopleNum);
//another method
console.log(womenNum+menNum);



var question = "What's your name?";
var answer = "Emma.";
console.log(question+answer);
var numberMessage =  "The total number is: ";
var totalNum = 100;
console.log(numberMessage+totalNum);




var person = "Kim";
if(person === "Kim") {
  console.log("Have you lost weight?");
}
else {
  console.log("Who are you");
}




var height = 180;
if (height>=176) {
  console.log("You're so tall!");
}
else {
  console.log("It's alright. At least you have a girlfriend.");
}




var language = "Chinese"
if (language === "Chinese") {
  console.log("哈囉");
}
else if (language === "Spanish") {
  console.log("Hola");
}


var weight = 50
for (weight = 35; weight < 100; weight++) {
  if (weight === 35) {
    console.log(weight+": You're too thin!");
  }
  else if (weight === 43) {
    console.log(weight+": You're so slender. You make me jealous!");
  }
  else if (weight === 60) {
    console.log(weight+": Hmm...You have to lose some weight.");
  }
  else if (weight === 90) {
    console.log(weight+": You may have obesity.");
  }
}
