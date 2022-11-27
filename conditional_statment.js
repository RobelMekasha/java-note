//Conditional Statements in Java Conditional statements are decision making structures. 
//here are some conditional statments
//1. if statement
//2. nested if statement
//3. if-else statement
//4. if-else-if statement
//5. Switch Case Statement
//conditional statement are used to perform different actions based on different conditions
time = 20;
if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

//The Switch Statement
switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
         day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }