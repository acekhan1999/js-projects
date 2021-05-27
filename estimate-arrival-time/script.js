const est_arrival_calculator = document.getElementById('est-arrival-calculator');
const car = document.getElementById('car');
const wheels = document.getElementById('wheels');
const track = document.getElementById('track');
const distance = document.getElementById('distance');
const speed = document.getElementById('speed');
const arrival_time_text = document.getElementById('arrival-time');

function checkEmpty(inputs) {
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            input.classList = "error";
        }
        else {
            input.classList = "success";
        }
    });
}

function cal_est_time(distance, speed) {
    let now = new Date();
    let time = parseInt(distance) / parseInt(speed)
    let arrival_time = new Date(now.setHours(now.getHours() + time));

    arrival_time_text.innerHTML = `<span>ARRIVAL TIME</span> <br />${arrival_time}`;
    // console.log(arrival_time);
}

est_arrival_calculator.addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log("clicked submit")
    checkEmpty([distance, speed])

    if (distance.value !== "" && speed.value !== "") {

        cal_est_time(distance.value, speed.value)

        car.classList.add("move")
        track.classList.add("move")
        wheels.classList.add("move")
    } else {
        arrival_time_text.innerHTML = `Provide The Information <br/> In The Form Below`;
        
        car.classList.remove("move")
        track.classList.remove("move")
        wheels.classList.remove("move")
    }

})