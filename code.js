var rows = 10;
var seatsPerRow = 10;
var seatingChart = [];

// 1. Write a for loop that generates the seating chart
//    according to # of rows & seatsPerRow.
//    All seats start out empty as the letter "O".
//    For 4 rows & 5 seatsPerRow, it should console.log:
//    [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]

for (var i = 0; i < rows; i++) {
  seatingChart[i] = [];
  for (var j = 0; j < seatsPerRow; j++) {
    seatingChart[i][j] = "O";
  }
}

console.log(seatingChart);


// 2. Display the values of each "row" on the app screen

setText("seats", displaySeatingChart());

function displaySeatingChart() {
  var display = "";
  for (var i = 0; i < rows; i++) {
    display = display + "\n" + seatingChart[i];
  }
  return display;
}


// 3. When "Choose Your Seat" is clicked: 
//    a) Ask the user for a row # and a seat #
//    b) Check if the seat is available
//    c) In the "message" area, display either 
//       "Reserved!" or "Not available"
//    d) Change seat to "X" in the seatingChart
//    e) Display new seatingChart

var userRow;
var userSeat;

onEvent("chooseSeat", "click", function() {
  userRow = promptNum("Enter row #");
  userSeat = promptNum("Enter seat #");
  if (userRow > 0 && userSeat > 0) {
    if (seatingChart[userRow][userSeat] === "O") {
      seatingChart[userRow][userSeat] = "X";
      setText("seats", displaySeatingChart());
      setProperty("message", "background-color", "green");
      setText("message","Seat reserved!");
    } else {
      setProperty("message", "background-color", "red");
      setText("message", "Seat unavailable");
    } 
  } else {
    setProperty("message", "background-color", "red");
    setText("message", "Invalid input");
  }
});