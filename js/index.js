

increment('.counter__btn_increment')

function decrement(el) {
  const btn = document.querySelector(el);
  const incrementEl = document.querySelector('.counter__number');
  btn.addEventListener("click", () => {
    incrementEl.innerHTML = +incrementEl.innerHTML - 1;
  });
}

decrement('.counter__btn_decrement')
