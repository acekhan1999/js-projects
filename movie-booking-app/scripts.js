const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value; // added the + sign to convert string to int

// save selected movie index and price

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// update total and count

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // copy the selected seats into an array

    const seatsIndex = [...selectedSeats].map((seat) =>
    [...seats].indexOf(seat) // indexOf is used to return the index number of an item
    ); // map returns an array

    // console.log(seatsIndex);

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    // console.log(selectedSeats);
    const selectedSeatsCount = selectedSeats.length;
    // console.log(selectedSeatsCount);
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// get data from localstorage and populate UI

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    // console.log(selectedSeats);

    if(selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex != null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// movie select event

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

// seat click event
container.addEventListener('click', (e) => {
    // console.log(e.target);
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        // console.log(e.target);
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
})

// initial count and total set 

updateSelectedCount();