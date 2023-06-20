const space1 = document.querySelector("#space1");
const activate = document.querySelector(".activate");
const space2 = document.querySelector("#space2");

function convert(num) {
  let arr = [];
  while (num > 0) {
    arr.push(num % 2);
    num = parseInt(num / 2);
  }
  return parseInt(arr.reverse().join(""));
}

function greet(value) {
  const arr1 = [1000, 100, 10, 1];
  const arr2 = ["jump", "close your eyes", "double blink", "wink"];
  let bin = convert(value);
  const changeX = bin - 10000 > 0;
  if (changeX) {
    bin -= 10000;
  }
  0;
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (bin - arr1[i] >= 0) {
      bin -= arr1[i];
      result.push(arr2[i]);
    }
  }

  if (!changeX) {
    result.reverse();
  }
  return result.join(",");
}

activate.addEventListener("click", () => {
  space2.innerHTML = greet(space1.value);
});
