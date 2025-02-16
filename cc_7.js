// Task 1 Function Declaration, Scenario: Customer Invoice Calculation

function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
};  //calculate the final invoice amount

console.log(calculateInvoice(100, 0.08, 5));   //Test Data
console.log(calculateInvoice(500, 0.1, 20));   //Test Data

// Task 2  Function Expression, Scenario: Employee Hourly Wage Calculation

function calculateHourlyWage(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};  //calculate hourly wage

console.log(calculateHourlyWage(52000, 40));   //Test Data
console.log(calculateHourlyWage(75000, 35));   //Test Data

// Task 3  Arrow Function, Scenario: Customer Loyalty Discount

const calculateLoyaltyDiscount = (amount, years) => {
    let discount = 0;
    if (years >=5) {
        discount = 0.15;
    } else if (years >= 3) {
        discount = 0.10;
    } else {
        discount = 0.05;
    }
    let discountedPrice = amount - (amount * discount);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

console.log(calculateLoyaltyDiscount(100, 6));
console.log(calculateLoyaltyDiscount(200, 2));  