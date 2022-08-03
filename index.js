const d = document;
const options = d.querySelector('.rating-state__number-container');
const rate = d.querySelector('.rate__number');
const thankCard = d.querySelector('.card__thank-you');
const ratingCard = d.querySelector('.card__rating');
const enviar = d.getElementById('submit');
options.addEventListener('click', (el) => {
        if (el.target.classList.contains('rating-state__number-container__number')) {
            enviar.onclick = function() {
                thankCard.style.display = 'flex';
                ratingCard.style.display = 'none';
                rate.innerText = el.target.innerText;
            }
        }
    })
    // const backBtn = d.getElementById("back");
    // backBtn.addEventListener('click', () => {
    //     thankCard.style.display = 'none';
    //     ratingCard.style.display = 'block';
    //     rate.innerText = 0;
    //     console.log(rate.innerText);
    // });