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
};  //apply a loyalty discount

console.log(calculateLoyaltyDiscount(100, 6));  //Test Data
console.log(calculateLoyaltyDiscount(200, 2));  //Test Data

// Task 4 Parameters and Arguments, Scenario: Product Shipping Cost Calculation

function calculateShippingCost(weight, location, expedited = false) {
    const shippingRates = {
        USA: { baseCost: 5, perLbCost: 0.5 },
        Canada: { baseCost: 10, perLbCost: 0.7 }
    };
    if (!shippingRates[location]) {
        return "Invalid location"; 
    }
    const { baseCost, perLbCost } = shippingRates[location];
    let shippingCost = baseCost + (perLbCost * weight);

    if (expedited) {
        shippingCost += 10;
    }
    return `Shipping Cost: $${shippingCost.toFixed(2)}`;
};   //calculate shipping fees

console.log(calculateShippingCost(10, "USA", true));    //Test Data
console.log(calculateShippingCost(5, "Canada", false));  //Test Data

// Task 5 Returning Values, Scenario: Business Loan Interest Calculation

function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
};  //function that returns total interest

console.log(calculateLoanInterest(1000, 0.05, 3));   //Test Data
console.log(calculateLoanInterest(5000, 0.07, 5));   //Test Data

// Task 6 Higher-Order Functions, Scenario: Filtering High-Value Transactions

let transactions = [500, 1200, 3000, 800, 2200];  //Declare an array
let highValueTransactions = filterHighValueTransactions(transactions, amount => amount > 1000);

function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
};  //filter transactions above $1000

console.log(highValueTransactions);  //Test and log Data