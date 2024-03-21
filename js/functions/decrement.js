function decrement(el) {
   const incrementEl1 = document.querySelector('.counter__number');
  const btn = document.querySelector(el);
  const incrementEl2 = document.querySelector('.counter__number');
  btn.addEventListener("click", () => {
    incrementEl1.innerHTML = +incrementEl2.innerHTML - 1;
  });
}
