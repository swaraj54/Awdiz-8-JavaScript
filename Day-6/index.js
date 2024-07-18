// Q .
// Print numbers from 20 - 40.
// Print number from 1 - 100, 1, 3, 5, 7, 9
// Print numbers from 50 -150, 50, 60, 70, 80, ... 150

function questionOne(starting, ending) {
  for (var i = starting; i <= ending; i++) {
    console.log(i);
  }
}
questionOne(20, 40);

function questionSecond(starting, ending, sequence) {
  for (var i = starting; i <= ending; i += sequence) {
    console.log(i);
  }
}

questionSecond(1, 100, 2);

function questionThird(starting, ending) {
  for (var i = starting; i <= ending; i += 10) {
    console.log(i);
  }
}

questionThird(50, 150);

// for(var i = 1 ; i <= 10; i++){
//     console.log(i)
// }
// 1 2 3 ... 10

// 10 9 8 ... 1

// for(var i = 10 ; i >= 1 ; i-- ){
//     console.log(i) // 10 9 8 ... 1
//     // i-- 10 -> 9 -> 8 -> ... -> 1 -> 0
// }

// Q Print numbers from 40 - 20 and with sequence for 3 .

function questionFourth(starting, ending, sequence) {
  for (var i = starting; i >= ending; i -= sequence) {
    console.log(i);
  }
}

questionFourth(40, 20, 3);

// Q print numbers from 40 - 0 and who are odd .

// function reverseOdd(starting, ending) {
//   for (var i = starting; i >= ending; i--) {
//     // console.log(i)
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//     // i--
//   }
// }

// reverseOdd(40, 0);

// Q . Calculate total count of even and odd numbers from range 60 - 20.

// "Even count : 10"
// "Odd count : 14"

function countOddEven(starting, ending) {
  var evenCount = 0;
  var oddCount = 0;
  for (var i = starting; i >= ending; i--) {
    // console.log(i);
    if (i % 2 == 0) {
      // even
      evenCount++;
    } else {
      // odd
      oddCount++;
    }
  }
  console.log(`Even count : ${evenCount}`);
  console.log(`Odd count :  ${oddCount}`);
}

countOddEven(60, 20);
