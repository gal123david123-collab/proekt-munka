let lastScroll = 0;
const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
    footer.classList.add("hide");
  } else {
    footer.classList.remove("hide");
  }

    lastScroll = currentScroll;
});

let money = document.getElementById('money_elon');





function click_buy(element) {
    let box = element.parentElement;
    let price = Number(box.querySelector('.money_for_things').innerHTML);
    let amountEl = box.querySelector('.amount');

    if (Number(money.innerHTML) - price < 0) {
        return;
    }

    money.innerHTML = Number(money.innerHTML) - price;
    amountEl.innerHTML = Number(amountEl.innerHTML) + 1;

}

function click_sell(element) {
    let box = element.parentElement;
    let price = Number(box.querySelector('.money_for_things').innerHTML);
    let amountEl = box.querySelector('.amount');

    if (Number(amountEl.innerHTML) <= 0) {
        return;
    }

    money.innerHTML = Number(money.innerHTML) + price;
    amountEl.innerHTML = Number(amountEl.innerHTML) - 1;
}



