function getProduct() {
  try {
    multipleTimeUseCode();
  } catch (error) {
    console.log(error, "error");
  } finally {
    console.log("inside finally");
  }
}

// function multipleTimeUseCode() {
//   console.log("Hello from multipleTimeUseCode");
// }

getProduct();






























// try catch

// try {
//     // multiple lines of code
// } catch(error){
//     console.log(error)
//     alert(error.message)
// } finally {
// }

// function getProductsFromFakeStoreApi() {
//   fetch("https://fakestoreapi.com/products");
// }

// getProductsFromFakeStoreApi();














const output = new Promise((resolve, reject) => {
//   setTimeout(() => {}, 3000);
  var res; // requested to backend
  if (res) {
    resolve("We got success/data.");
  } else {
    reject(res);
  }
});

// console.log(output,"output")
console.log(1);

// console.log(output,"output")
output
  .then((response) => {
    console.log(response, "response 2");
  })
  .catch((error) => {
    console.log(error, "error");
  });
console.log(3);
































// console.log(1);
// // use async await or promise
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// console.log(3);

// synchronous
// // 1
// // 3
// // 2

// asynchronous
// // 1
// // 2
// // 3
