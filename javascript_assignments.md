# JavaScript Assignment 1: Movie Ticket Price Calculator

## Objective

Use variables, arithmetic operators, comparison operators, logical operators, and conditional statements.

---

## Instructions

Create the following variables:

```javascript
let customerName;
let age;
let ticketType;
```

The ticket prices are:

| Ticket Type | Price |
| ------------ | ----- |
| Regular      | ₦3,000 |
| Premium      | ₦5,000 |
| VIP          | ₦8,000 |

Apply the following discount:

- If the customer is **12 years old or younger**, give a **50% discount**.
- If the customer is **60 years or older**, give a **30% discount**.
- Everyone else pays the full price.

Display:

- Customer Name
- Age
- Ticket Type
- Original Price
- Discount
- Final Price

---

## Example Output

```text
Customer: Daniel

Age: 10

Ticket Type: VIP

Original Price: ₦8000

Discount: ₦4000

Amount to Pay: ₦4000
```

---

# JavaScript Assignment 2: Loan Approval Checker

## Objective

Use multiple conditions to determine whether a customer qualifies for a loan.

---

## Instructions

Create the following variables:

```javascript
let customerName;
let monthlySalary;
let yearsWorked;
let hasExistingLoan;
```

A customer qualifies for a loan only if:

- Monthly salary is at least ₦200,000.
- Has worked for at least 2 years.
- Does not have an existing loan.

Display either:

```text
Loan Approved
```

or

```text
Loan Denied
```

Also display all the customer's information.

---

## Example Output

```text
Customer: Grace

Monthly Salary: ₦280000

Years Worked: 4

Existing Loan: No

Status: Loan Approved
```

---

# JavaScript Assignment 3: Hotel Room Booking

## Objective

Practice arithmetic operations and conditional statements.

---

## Instructions

Create the following variables:

```javascript
let customerName;
let roomType;
let numberOfDays;
```

Room prices per day are:

| Room Type | Price Per Day |
| ---------- | ------------- |
| Standard   | ₦20,000 |
| Deluxe     | ₦35,000 |
| Executive  | ₦50,000 |

Calculate the total cost.

If the customer books:

- **5 days or more**, give a **15% discount**.
- Otherwise, no discount.

Display:

- Customer Name
- Room Type
- Number of Days
- Total Cost
- Discount
- Final Amount

---

## Example Output

```text
Customer: Sarah

Room Type: Deluxe

Days Booked: 6

Total Cost: ₦210000

Discount: ₦31500

Final Amount: ₦178500
```

---

# JavaScript Assignment 4: E-Commerce Shopping Cart Total

## Objective

Work with arrays containing objects, arithmetic operators, and conditional logic to process a customer's order checkout.

---

## Instructions

Create the following data structures to represent a customer's cart and checkout details:

```javascript
let cart = [
  { productName: "Wireless Mouse", price: 15000, quantity: 2 },
  { productName: "Mechanical Keyboard", price: 35000, quantity: 1 }
];

let promoCode = "DISCOUNT10"; // Assume user entered this
let destinationState = "Lagos"; // Destination for shipping
```

Calculate the **Subtotal** by multiplying the price by the quantity for each item in the cart array, and adding them together. *(Hint: Access items using their array index, e.g., `cart[0]` and `cart[1]`)*.

Determine the **Shipping Cost**:

- If `destinationState` is `"Lagos"`, shipping is ₦3,000.
- If `destinationState` is `"Abuja"`, shipping is ₦5,000.
- For any other state, shipping is ₦8,000.

Apply a **Promo Code**:

- If `promoCode` is exactly `"DISCOUNT10"`, calculate a **10% discount** on the **Subtotal** (before shipping).
- Otherwise, the discount is ₦0.

Calculate the **Final Total** (`Subtotal - Discount + Shipping Cost`).

Display:

- Subtotal
- Discount Applied
- Shipping Cost
- Final Total

---

## Example Output

```text
Order Summary:

Subtotal: ₦65000

Discount Applied: ₦6500

Shipping Cost: ₦3000

Final Total to Pay: ₦61500
```

---

# JavaScript Assignment 5: API Role-Based Access Control (RBAC)

## Objective

Use logical operators, object properties, and nested conditions to determine if a user has permission to perform a specific backend action.

---

## Instructions

Create an object representing a user stored in the database, and the incoming API request:

```javascript
let dbUser = {
  userId: 101,
  username: "tech_guru",
  role: "moderator", // Can be "admin", "moderator", or "user"
  status: "active" // Can be "active", "suspended"
};

let request = {
  endpoint: "/delete-comment", // Can be "/delete-comment", "/view-profile", or "/edit-settings"
  method: "DELETE" 
};
```

Check if the user is allowed to make this request based on these strict business rules:

1. First, check the user's `status`. If they are `"suspended"`, automatically deny access and output: `Error: Account is suspended.`
2. If the user is `"active"`, check the requested `endpoint`:
   - `"/view-profile"`: Any active user can access this. Output: `Access Granted.`
   - `"/edit-settings"`: Only `"admin"` and `"moderator"` roles can access this. If it's a `"user"`, output: `Error: Unauthorized access.`
   - `"/delete-comment"`: Only an `"admin"` can perform a `"DELETE"` method request on this endpoint. If a `"moderator"` or `"user"` tries this, output: `Error: Admin privileges required.`

Display the user's role, the endpoint they are trying to access, and the final authorization result.

---

## Example Output

```text
User Role: moderator
Attempting to access: /delete-comment

Authorization Result: Error: Admin privileges required.
```

---

# JavaScript Assignment 6: Financial Transaction Fraud Detection

## Objective

Evaluate a new data entry against existing array data to enforce backend business logic and security rules.

---

## Instructions

Create the following data representing a user's bank account, their recent transactions, and a new incoming transaction:

```javascript
let account = {
  accountName: "John Doe",
  balance: 850000,
  isAccountFrozen: false
};

let recentTransactions = [
  { id: 1, amount: 20000, location: "Lagos" },
  { id: 2, amount: 15000, location: "Lagos" }
];

let newTransaction = {
  amount: 300000,
  location: "London",
  type: "withdrawal"
};
```

Apply the following fraud detection and processing rules for the `newTransaction` using `if/else` statements:

1. **Account Status Check:** If `isAccountFrozen` is `true`, immediately deny the transaction and output: `Transaction Failed: Account is frozen.`
2. **Balance Check:** Check if the `newTransaction.amount` is greater than the `account.balance`. If so, deny with: `Transaction Failed: Insufficient funds.`
3. **Location Check:** Check the location of the *first* transaction in the `recentTransactions` array. If the `newTransaction.location` is DIFFERENT from this previous location AND the `newTransaction.amount` is greater than ₦100,000, deny with: `Transaction Flagged: Suspicious activity detected.`
4. **Approval:** If all the above checks pass, approve the transaction, deduct the amount from the `account.balance`, and display a success message along with the new balance.

---

## Example Output

```text
Processing Transaction for: John Doe
Transaction Amount: ₦300000
Location: London

Result: Transaction Flagged: Suspicious activity detected.
```
