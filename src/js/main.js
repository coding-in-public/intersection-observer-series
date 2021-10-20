const nav = document.querySelector('nav');
const header = document.querySelector('header');

const navObserverCallback = (watchEntry, navObserver) => {
  if(!watchEntry[0].isIntersecting) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}

const navObserverOptions = {
  rootMargin: '-110px',
  threshold: 0
}

const navObserver = new IntersectionObserver(navObserverCallback, navObserverOptions);

navObserver.observe(header);

// card section

const cards = document.querySelectorAll('.card');

// card callback function
const cardObserverCallback = (cardsToWatch, cardObserver) => {
  cardsToWatch.forEach(cardToWatch => {
    if(cardToWatch.isIntersecting) {
      cardToWatch.target.classList.add('fade');
      cardObserver.unobserve(cardToWatch.target);
    }
  })
}

//card options
const cardObserverOptions = {
  threshold: .5
}

//card observer

const cardObserver = new IntersectionObserver(cardObserverCallback, cardObserverOptions);

//card observer on cards
cards.forEach(card => {
  cardObserver.observe(card);
})

// Terms and Conditions

// query selectors
const lastTermsElement = document.querySelector('.terms p:last-child');
const acceptBtn = document.querySelector('.btn-accept');

// callback function
const termsObserverCallback = (lastP, termsObserver) => {
  if(lastP[0].isIntersecting){
    acceptBtn.classList.add('enabled');
    acceptBtn.focus();
    termsObserver.unobserve(lastTermsElement);
  };
}

// options 
const termsObserverOptions = {
  threshold: 1
}

// observer
const termsObserver = new IntersectionObserver(termsObserverCallback,termsObserverOptions);

// call the observer
termsObserver.observe(lastTermsElement);

// eventlistner
acceptBtn.addEventListener('click', function(e){
  if(!e.target.classList.contains('enabled')){
    const btnMessage = document.querySelector('.btn-message');
    btnMessage.classList.add('visible');
    setTimeout(function(){
      btnMessage.classList.remove('visible');
    }, '2000');
  };
})



















