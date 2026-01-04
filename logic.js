const followbtn = document.getElementById("followbtn");
followbtn.addEventListener("click", () => {
    if (followbtn.innerText === "Follow") {
        followbtn.innerText = "Following";
        followbtn.classList.add("following");
    } else {
        followbtn.innerText = "Follow";
        followbtn.classList.remove("following");
    }
});
let likebtn = document.querySelector(".likebtn");
let likecount= document.querySelector(".like-count");
let commentbtn = document.querySelector(".commentbtn");
let commentcount = document.querySelector(".comment-count");
let sharebtn = document.querySelector(".sharebtn");
let sharecount = document.querySelector(".share-count");

let count1 = 0 ;
likebtn.addEventListener("click", () => {
    count1++;
    likecount.innerText = count1;
})
let count2 = 0;
commentbtn.addEventListener("click", () => {
    count2++;
    commentcount.innerText = count2;
})
let count3 = 0 ;
sharebtn.addEventListener("click", () => {
    count3++;
    sharecount.innerText = count3;
})