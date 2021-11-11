"use strict";
const bill = document.getElementById("bill-form");
const people = document.getElementById("people-form");
const tip = document.querySelectorAll(".tip__grid button");
const custom = document.querySelector(".tip__grid input");
const reset = document.querySelector(".btn");
const h4 = document.querySelectorAll("h4");
const alert = document.querySelector(".people__alert");

const tipAmount = document.querySelector(".results__amount h4");
const total = document.querySelector(".results__total h4");

people.addEventListener("input", function () {
  if (+people.value === 0) {
    alert.classList.add("active");
    people.style.outline = "2px solid orange";
  } else {
    alert.classList.remove("active");
    people.style.outline = "2px solid var(--color-strong-cyan)";
  }

  if (people.value === "") {
    alert.classList.remove("active");
    people.style.outline = "2px solid var(--color-strong-cyan)";
  }
});

let tipValue;

// TIP / person

tip.forEach(function (item) {
  item.addEventListener("click", function () {
    tipValue = +item.textContent.slice(0, -1);

    if (+bill.value > 0 && +people.value > 0) {
      tipAmount.textContent = `$${(
        (+bill.value * tipValue * 0.01) /
        +people.value
      ).toFixed(2)}`;
    }
  });
});

// TOTAL / person

tip.forEach(function (item) {
  item.addEventListener("click", function () {
    tipValue = +item.textContent.slice(0, -1);

    if (+bill.value > 0 && +people.value > 0) {
      total.textContent = `$${(
        (+bill.value * tipValue * 0.01) / +people.value +
        +bill.value / +people.value
      ).toFixed(2)}`;
    }
  });
});

// CUSTOM value

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && +custom.value > 0) {
    tipAmount.textContent = `$${(
      (+bill.value * +custom.value * 0.01) /
      +people.value
    ).toFixed(2)}`;

    total.textContent = `$${(
      (+bill.value * +custom.value * 0.01) / +people.value +
      +bill.value / +people.value
    ).toFixed(2)}`;
  }
});

// RESET Functionality

reset.addEventListener("click", function () {
  bill.value = people.value = custom.value = "";
  h4.forEach(function (item) {
    item.textContent = "$0.00";
  });
});
