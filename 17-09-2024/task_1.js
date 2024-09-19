// Задача 1: Система бронирования авиабилетов
// Условие:

// Создайте класс Flight, который представляет рейс с параметрами:

// flightNumber — номер рейса.
// origin — место вылета.
// destination — место назначения.
// seats — массив с информацией о местах на рейсе (например, массив объектов { seatNumber: '1A', available: true }).
// Добавьте методы:

// getAvailableSeats() — возвращает массив доступных для бронирования мест.
// bookSeat(seatNumber) — бронирует указанное место, если оно доступно (меняет статус на available: false).
// Создайте класс Passenger, который представляет пассажира с параметрами:

// name — имя пассажира.
// passportNumber — номер паспорта.
// tickets — массив билетов, которые приобрел пассажир.
// Добавьте методы:

// bookFlight(flight, seatNumber) — бронирует рейс для пассажира и добавляет билет в его коллекцию.
// Создайте класс Ticket, который представляет билет на рейс с параметрами:

// flightNumber — номер рейса.
// seatNumber — номер забронированного места.
// passengerName — имя пассажира.
// Задача:

// Создайте несколько объектов рейсов с местами.
// Реализуйте возможность бронирования мест на рейс для пассажиров.
// Добавьте возможность проверки наличия свободных мест и попытайтесь забронировать недоступное место.
// Усложнение:

// Реализуйте систему возврата билетов с освобождением мест.
// Добавьте проверку валидности паспортных данных при бронировании рейса.



function Flight(flightNumber, origin, destination, seats) {
    this.flightNumber = flightNumber;
    this.origin = origin;
    this.destination = destination;
    this.seats = seats;
}

Flight.prototype.getAvailableSeats = function() {
    let availableSeats = this.seats.filter(function(elem) { return elem['available']; });
    let availableSeatsNumbers = [];
    for (let i = 0; i < availableSeats.length; i++) {
        availableSeatsNumbers.push(availableSeats[i]['seatNumber']);
    }
    return availableSeatsNumbers;
}

Flight.prototype.bookSeat = function(seatNumber) {
    let seatNumberIndex;
    let isExist = false;
    for (let i = 0; i < this.seats.length; i++) {
        if (this.seats[i]['seatNumber'] === seatNumber) {
            seatNumberIndex = i;
            isExist = true;
            break;
        }
    }
    if (isExist) {
        if (this.seats[seatNumberIndex]['available']) {
            console.log(`Место ${seatNumber} успешно забронированно`);
            this.seats[seatNumberIndex]['available'] = false;
            return true;
        } else {
            console.log(`Место ${seatNumber} занято`);
            return false;
        }
    } else {
        console.log(`Места ${seatNumber} не существует`);
        return false;
    }

}

function Passenger(name, passportNumber, tickets) {
    this.name = name;
    this.passportNumber = passportNumber;
    this.tickets = tickets;
}

Passenger.prototype.buyTicket = function(flight, seatNumber) {
    if (flight.bookSeat(seatNumber)) {
        this.tickets.push(new Ticket(flight, seatNumber, this.name));
    }
}

Passenger.prototype.getTickets = function() {
    let seatNumbers = [];
    for (let i = 0; i < this.tickets.length; i++) {
        seatNumbers.push(this.tickets[i].seatNumber);
    }
    return seatNumbers;
}

function Ticket(flightNumber, seatNumber, passengerName) {
    this.flightNumber = flightNumber;
    this.seatNumber = seatNumber;
    this.passengerName = passengerName;
}

let seats = [];
let seatNumbers = ['1A', '1B', '1C', '1D', '2A', '2B', '2C', '2D', '3A', '3B', '3C', '3D'];
for (let i = 0; i < seatNumbers.length; i++) {
    seats[i] = {'seatNumber': seatNumbers[i], 'available': true};
}

let flight = new Flight(123, 'A', 'B', seats);
let passenger = new Passenger('name', 12345678, []);

console.log(flight.getAvailableSeats());
passenger.buyTicket(flight, '1A');
passenger.buyTicket(flight, '1B');
passenger.buyTicket(flight, '1F');
passenger.buyTicket(flight, '1A');
console.log(flight.getAvailableSeats());
console.log(passenger.getTickets());