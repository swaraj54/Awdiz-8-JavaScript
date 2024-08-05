async await

console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);












async function myfunction() {
  console.log(1);
  await console.log(2);
  await console.log(3);
}
myfunction()

const myanotherfunction = async () =>{
    console.log(1);
    await console.log(2);
    await console.log(3);
}

myanotherfunction();
















function timeConsumingFunction() {
  const output = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 5000);
  });
  return output;
}

async function myasyncFunction() {
  console.log(1);
  const output = await timeConsumingFunction(); // api call
  console.log(3, output);
}

myasyncFunction();


















function getProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
}
getProducts();





async function getProductsAsync() {
  const data = await fetch("https://fakestoreapi.com/products");
  const parsedData = await data.json();
  console.log(parsedData);
}
getProducts();
























function testingThrow() {
  try {
    var response;
    if (!response?.success) {
      throw new Error("Response recevied but got success fail.");
    }
    console.log("hi");
  } catch (error) {
    console.log("Error -", error);
  }
}

testingThrow();
