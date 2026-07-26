// 1) APPLICATION STATE
class Flug {
    constructor(code, destination, type, timeText) {
        this.code = code;
        this.destination = destination;
        this.type = type;
        this.timeText = timeText;
    }
}

function createTimeTextFromNow(minutesFromNow) {
    const date = new Date();
    date.setMinutes(date.getMinutes() + minutesFromNow);

    return formatTime(date);
}

function formatTime(dateObject) {
    const hours = String(dateObject.getHours()).padStart(2, '0');
    const minutes = String(dateObject.getMinutes()).padStart(2, '0');

    return hours + ':' + minutes;
}

const state = {
    currentTime: new Date(),
    flights: [
        new Flug('AR101', 'Berlin', 'arrival', createTimeTextFromNow(12)),
        new Flug('AR118', 'Madrid', 'arrival', createTimeTextFromNow(26)),
        new Flug('AR135', 'Wien', 'arrival', createTimeTextFromNow(39)),
        new Flug('AR152', 'Prag', 'arrival', createTimeTextFromNow(55)),
        new Flug('AR169', 'Athen', 'arrival', createTimeTextFromNow(72)),
        new Flug('AR186', 'Oslo', 'arrival', createTimeTextFromNow(88)),
        new Flug('AR203', 'Dublin', 'arrival', createTimeTextFromNow(101)),
        new Flug('AR220', 'Zagreb', 'arrival', createTimeTextFromNow(117)),
        new Flug('AR237', 'Lissabon', 'arrival', createTimeTextFromNow(134)),
        new Flug('AR254', 'Stockholm', 'arrival', createTimeTextFromNow(149)),
        new Flug('DP301', 'Paris', 'departure', createTimeTextFromNow(35)),
        new Flug('DP318', 'Rom', 'departure', createTimeTextFromNow(52)),
        new Flug('DP335', 'Kairo', 'departure', createTimeTextFromNow(67)),
        new Flug('DP352', 'Helsinki', 'departure', createTimeTextFromNow(79)),
        new Flug('DP369', 'Reykjavik', 'departure', createTimeTextFromNow(94)),
        new Flug('DP386', 'London', 'departure', createTimeTextFromNow(108)),
        new Flug('DP403', 'Tokio', 'departure', createTimeTextFromNow(123)),
        new Flug('DP420', 'Toronto', 'departure', createTimeTextFromNow(141)),
        new Flug('DP437', 'Istanbul', 'departure', createTimeTextFromNow(158)),
        new Flug('DP454', 'Sevilla', 'departure', createTimeTextFromNow(176)),
        new Flug('DP471', 'Split', 'departure', createTimeTextFromNow(193)),
        new Flug('DP488', 'Luxemburg', 'departure', createTimeTextFromNow(214))
    ]
};

// 2) STATE ACCESSORS/MUTATORS
function addFlightToState(code, destination, type, timeText) {
    state.flights.push(new Flug(code, destination, type, timeText));
}

function setCurrentTimeInState() {
    state.currentTime = new Date();
}

function getMinutesUntilFlight(flightObject) {
    const timeParts = flightObject.timeText.split(':');
    const hours = Number(timeParts[0]);
    const minutes = Number(timeParts[1]);
    const flightDate = new Date(state.currentTime);

    flightDate.setHours(hours, minutes, 0, 0);

    const diffMilliseconds = flightDate.getTime() - state.currentTime.getTime();
    return Math.round(diffMilliseconds / 60000);
}

function getSortedFlightsByType(type) {
    return state.flights
    .filter((flightObject) => flightObject.type === type)
    .filter((flightObject) => getMinutesUntilFlight(flightObject) > 0)
        .sort((a, b) => getMinutesUntilFlight(a) - getMinutesUntilFlight(b));
}

// 3) DOM NODE REFERENCES
const flightCodeInput = document.getElementById('flight-code-input');
const flightDestinationInput = document.getElementById('flight-destination-input');
const flightTypeSelect = document.getElementById('flight-type-select');
const flightTimeInput = document.getElementById('flight-time-input');
const flightAddBtn = document.getElementById('flight-add-btn');
const flightSummary = document.getElementById('flight-summary');
const currentTimeOutput = document.getElementById('current-time');
const arrivalList = document.getElementById('arrival-list');
const departureList = document.getElementById('departure-list');

// 4) DOM NODE CREATION FUNCTIONS
function createFlightElement(flightObject) {
    const listItem = document.createElement('li');
    const minutesUntilFlight = getMinutesUntilFlight(flightObject);

    if (flightObject.type === 'arrival') {
        listItem.classList.add('arrival-card');
    } else {
        listItem.classList.add('departure-card');
    }

    if (flightObject.type === 'departure' && minutesUntilFlight <= 60 && minutesUntilFlight >= 0) {
        listItem.classList.add('boarding');
    }

    const time = document.createElement('p');
    time.classList.add('flight-time');
    time.textContent = flightObject.timeText;

    const destination = document.createElement('p');
    destination.classList.add('flight-destination');
    destination.textContent = flightObject.destination;

    const title = document.createElement('h2');
    title.classList.add('flight-code');
    title.textContent = flightObject.code;

    const status = document.createElement('p');
    status.classList.add('flight-status', 'status-text');

    if (flightObject.type === 'arrival') {
        status.textContent = 'Erwartet in ' + minutesUntilFlight + ' Min';
    } else if (minutesUntilFlight <= 60) {
        status.classList.add('boarding-status');
        status.textContent = 'Boarding';
    } else {
        status.textContent = 'Abflug in ' + minutesUntilFlight + ' Min';
    }

    listItem.append(time, destination, title, status);

    return listItem;
}

// 5) RENDER FUNCTIONS
function render() {
    arrivalList.innerHTML = '';
    departureList.innerHTML = '';

    const arrivals = getSortedFlightsByType('arrival');
    const departures = getSortedFlightsByType('departure');

    for (const flightObject of arrivals) {
        arrivalList.append(createFlightElement(flightObject));
    }

    for (const flightObject of departures) {
        departureList.append(createFlightElement(flightObject));
    }

    currentTimeOutput.textContent = formatTime(state.currentTime);
    flightSummary.textContent = 'Arrivals: ' + arrivals.length + ' | Departures: ' + departures.length;
}

// 6) EVENT HANDLERS
function onFlightAddBtnPressed() {
    const code = flightCodeInput.value.trim();
    const destination = flightDestinationInput.value.trim();
    const type = flightTypeSelect.value;
    const timeText = flightTimeInput.value;

    if (code === '' || destination === '' || timeText === '') {
        return;
    }

    addFlightToState(code, destination, type, timeText);
    flightCodeInput.value = '';
    flightDestinationInput.value = '';
    flightTimeInput.value = '';
    render();
}

function onClockTick() {
    setCurrentTimeInState();
    render();
}

// 7) INIT BINDINGS
flightAddBtn.addEventListener('click', onFlightAddBtnPressed);
setInterval(onClockTick, 1000);

// 8) INITIAL RENDERING
setCurrentTimeInState();
render();
