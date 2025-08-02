let count = 0;
    const countDisplay = document.getElementById("count");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const resetBtn = document.getElementById("reset");

   
    increaseBtn.addEventListener("click", function() {
      count++;
      countDisplay.innerText = count;
    });

    decreaseBtn.addEventListener("click", function() {
      count--;
      countDisplay.innerText = count;
    });

    resetBtn.addEventListener("click", function() {
      count = 0;
      countDisplay.innerText = count;
    });