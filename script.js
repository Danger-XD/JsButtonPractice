//selecting elements and assigning it to a name variable
var relStatus = document.querySelector("h5");
var friendBtn = document.querySelector("#adding");
// var addFriend = document.querySelector("#adding"); //this is to select add friend button on separate buttons
// var removeFriend = document.querySelector("#remove"); //this is to select remove friend button on separate buttons

//adding functionalities to those variables
var flag = 0;
friendBtn.addEventListener("click", () => {
  if (flag == 0) {
    relStatus.innerHTML = "Life Partner";
    relStatus.style.color = "green";
    friendBtn.innerHTML = "Remove Friend";
    flag = 1;
  } else {
    relStatus.innerHTML = "Stanger";
    relStatus.style.color = "red";
    friendBtn.innerHTML = "Add Friend";
    flag = 0;
  }
});

// addFriend.addEventListener("click", () => {
//   relStatus.innerHTML = "Life Partner";
//   relStatus.style.color = "green";
// });
// removeFriend.addEventListener("click", () => {
//   relStatus.innerHTML = "Stranger";
//   relStatus.style.color = "red";
// });
