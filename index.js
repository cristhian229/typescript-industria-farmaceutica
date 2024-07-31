var Medicine = /** @class */ (function () {
    function Medicine(id, name, quantity, daysForConsumption, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.daysForConsumption = daysForConsumption;
        this.price = price;
    }
    return Medicine;
}());
var medicine = new Medicine(1, "acetaminofen", 2, 5, 1500);
console.log(medicine);
