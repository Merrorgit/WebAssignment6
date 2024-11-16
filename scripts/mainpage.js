//Time getting and greeting
const greeting = document.querySelector('.greeting')

const time = () => {
    const time = document.querySelector('.header__time');
    const nowTime = new Date();
    const dateTime = nowTime.toLocaleTimeString();

    time.textContent = dateTime;
}

greeting.addEventListener('click', () => {
    const now = new Date();
    const hours = now.getHours();
    let greeting = "";

    switch (true) {
        case (hours >= 5 && hours < 12):
            greeting = "Good Morning!";
            break;
        case (hours >= 12 && hours < 18):
            greeting = "Good Afternoon!";
            break;
        case (hours >= 18 && hours < 22):
            greeting = "Good Evening!";
            break;
        default:
            greeting = "Good Night!";
            break;
    }
    alert(greeting);
})

time();
setInterval(time, 1000)

//Sorting tool
const sortButt = document.querySelector('.sort');

sortButt.addEventListener('click', () => {
    const numbers = document.getElementById('numbers').value;
    const order = document.getElementById('order').value;
    const result = document.getElementById('result');

    result.textContent = '';

    let numbersArray = numbers.split(',').map(num => num.trim());
    numbersArray = numbersArray.map(Number);

    if (numbersArray.some(isNaN) == true) {
        result.textContent = 'Error';
        return;
    }

    if(order == 'asc'){
        numbersArray.sort((a, b) => a - b);
    }
    else{
        numbersArray.sort((a, b) => b - a);
    }

    result.textContent = numbersArray.join(', ');
})


//Star Rating
const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');

        stars.forEach(s => {
            s.textContent = '☆';
            s.classList.remove('selected');
        });

        for (let i = 0; i < rating; i++) {
            stars[i].textContent = '★';
            stars[i].classList.add('selected');
        }
    });
});


//Keys
document.addEventListener('keydown', (e) => {
    const navItems = document.querySelectorAll('.header__nav a');
    let focused = document.activeElement;

    let index = Array.from(navItems).indexOf(focused);

    if (e.key === 'ArrowRight') {
      if (index < navItems.length - 1) {
        navItems[index + 1].focus();
      } else {
        navItems[0].focus();
      }
    }

    if (e.key === 'ArrowLeft') {
      if (index > 0) {
        navItems[index - 1].focus();
      } else {
        navItems[navItems.length - 1].focus();
      }
    }
});


//Search
const searchBtn = document.querySelector('.search');

searchBtn.addEventListener('input', function () {
    const searchItem = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchItem)) {
            card.classList.remove('notshow');
            card.style.display = 'block';
        } else {
            card.classList.add('notshow');
            setTimeout(() => {
                if (card.classList.contains('notshow')) {
                    card.style.display = 'none';
                }
            }, 500);
        }
    });
});


//Add Card
const addBtn = document.querySelector('.add__card');
const cardDialog = document.querySelector('.dialog');
const cardForm = document.querySelector('.dialog__form')
const cardsContainer = document.querySelector('.card__container');
const createBtn = document.querySelector('.dialog__create');
const cancelBtn = document.querySelector('.dialog__cancel');

document.addEventListener('DOMContentLoaded', () => {
    const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
    savedCards.forEach((card) => {
        createCard(card.title, card.description, card.id);
    });
});

addBtn.addEventListener('click', () => {
    cardDialog.showModal();
});

createBtn.addEventListener('click', () => {
    const cardTitle = document.getElementById('card_title').value;
    const cardDescription = document.getElementById('card_description').value;

    const newCard = { title: cardTitle, description: cardDescription, id: Date.now() };

    createCard(cardTitle, cardDescription, newCard.id);

    toLocalStorage(newCard);

    cardForm.reset();
    cardDialog.close();
});

const toLocalStorage = (newCard) => {
    const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
    savedCards.push(newCard);
    localStorage.setItem('cards', JSON.stringify(savedCards));
}

const createCard = (title, description, id) => {
    const newCard = document.createElement('section');
    newCard.classList.add('card', 'col-lg-8', 'col-md-9', 'col-sm-10', 'col-11', 'bg-dark', 'p-3','border', 'border-info', 'border-4', 'rounded');
    newCard.setAttribute('data', id);

    newCard.innerHTML = `
        <h2 class="d-flex align-items-center text-info mb-3">
            ${title}
        </h2>
        <p class="text-light">${description}</p>
        <button class="btn btn-danger col-lg-2 col-md-3 col-sm-4 col-4 delete-btn">Delete</button>`;
        
    cardsContainer.appendChild(newCard);

    const deleteBtn = newCard.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        deleteCard(newCard, id);
    });

    cardsContainer.appendChild(newCard);
}


cancelBtn.addEventListener('click', () => {
    cardForm.reset();
    cardDialog.close();
});

const deleteCard = (cardElement, cardId) => {
    cardElement.remove();

    const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
    const updatedCards = savedCards.filter(card => card.id !== cardId);
    localStorage.setItem('cards', JSON.stringify(updatedCards));
}


//Carousel speed
const value = document.querySelector('.carousel__value');
const input = document.querySelector('.carousel__range');
const carouselItems = document.querySelectorAll('.carousel-item')

input.addEventListener("input", (event) => {
    value.textContent = `Carousel speed: ${event.target.value}`;
  
    carouselItems.forEach(item => {
      item.setAttribute('data-bs-interval', event.target.value * 1000);
  });
});