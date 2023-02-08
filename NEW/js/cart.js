`use strict`;

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
        return this.totalPrice
    },
    calculateItemPrice(price, amount = 1) {
        return this.totalPrice += price * amount
    },
    add(item, price, amount = 1) {
        this.items.push({item, price, amount});
        this.calculateItemPrice(price, amount);
        this.increaseCount(amount)
    },
    clear() {
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;

    },
    print() {
        let final = JSON.stringify(this.items);
        console.log(final);
        console.log(this.getTotalPrice())
    },
    increaseCount(amount) {
        return this.count += amount
    },
};

cart.add(`Диван`,50000,2);
cart.add(`Люстра`,5000,6);
cart.add(`Лампа`,8000,);

cart.print()