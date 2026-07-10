let customerName = "grace"
let age = 60
let ticketType = "john"
let ticketPrice = {
    regular: 3000,
    premium: 5000,
    vip: 8000
}
let price;
let discount;

switch (ticketType){
    case "vip":
        price = ticketPrice.vip
        break;
    case "premium":
        price = ticketPrice.premium
        break;
    case "regular":
        price = ticketPrice.regular
        break;
    default:
        console.log("invalid ticket type. ticket should be regular, premium or vip")
}

// discount condition


if(age <= 12){
    discount = price / 2
}
else if(age >= 60){
    discount = price * 30 / 100
}
else{
    discount = 0
}

let display = {
    customerName: customerName,
    customerAge: age,
    ticketType: ticketType,
    ticketPrice: price,
    discount: "#" + discount,
    fullAmount: price - discount
}

console.log(display)