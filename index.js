const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select ");
const toCurr = document.querySelector(".to select ");

for (let select of dropdown) {
  for (currCodes in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCodes;
    newOption.value = currCodes;

    if (select.name === "from" && currCodes === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCodes === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

const updateFlag = (element) => {
  let currCodes = element.value;
  let countryCode = countryList[currCodes];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = amount.Value;
  console.log(amtVal);
  //   if (amtVal === "" || amtVal < 1) {
  //     amtVal = 1;
  //     amount.Value = "1";
  //   }

  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
//   let response = await fetch(URL);
//   let data = await response.json();
//   console.log(data);
});
