document.getElementById("button").addEventListener("click", function () {
    // console.log("document.querySelector(): ", document.querySelector(".frame"))
    document.querySelector(".frame").style.display = "flex";
  })
  document.getElementById("close").addEventListener("click", function () {
    // console.log("document.querySelector(): ", document.querySelector(".frame"))
    document.querySelector(".frame").style.display = "none";
  })