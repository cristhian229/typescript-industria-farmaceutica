
class Medicine {
  id: number;
  name: string;
  quantity: number;
  daysForConsumption: number;
  price: number;

  constructor(id: number,name: string,quantity: number,daysForConsumption: number,price: number) {
    this.id = id;
    this.name = name;
    this.quantity = quantity
    this.daysForConsumption = daysForConsumption
    this.price = price
  }
}

const medicine = new Medicine(1, "acetaminofen", 2, 5, 1500)

console.log(medicine);
