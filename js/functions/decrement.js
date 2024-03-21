function decrement(el) {
   const incrementEl = document.querySelector('.counter__number');
  const btn = document.querySelector(el);


  
  btn.addEventListener("click", () => {
    incrementEl.innerHTML = +incrementEl.innerHTML - 1;
  });
}
