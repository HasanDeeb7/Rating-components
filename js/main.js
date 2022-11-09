let submit_btn = document.querySelector(".submit-btn");
let rating_btn = document.querySelector(".rate");
let ratings = document.querySelectorAll(".rate");
let feedback_page = document.querySelector(".rate-card_components");
let thanks_page = document.querySelector(".thanks-card_components");
let user_rating = 3
let user_submission = document.querySelector('#user-choice')




ratings.forEach((btn) => btn.addEventListener("click", handleRating));

submit_btn.addEventListener("click", submit);


function submit(){
user_submission.innerHTML = user_rating
feedback_page.classList.add('hide');
thanks_page.classList.remove('hide')
}


function handleRating(e){
ratings.forEach(btn  => {
    btn.classList.remove('active')
});

if (e.target.classList.contains('rate')){
    e.target.classList.add('active')
}
user_rating = e.target.id
}