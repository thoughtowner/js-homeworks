const ConsumerNamespace = {
    Consumer: class {
        constructor(name) {
            this.name = name;
            this.money = 0;
            this.cart = [];
        }

        checkMoneyValue(money) {
            if (typeof money !== 'number') {
                throw new Error('The value of money should be a number.');
            } else {
                if (money < 0) {
                    throw new Error('The value of money should be greater than or equal to zero.');
                }
            }
        }

        checkQuantityValue(quantity) {
            if (typeof quantity !== 'number') {
                throw new Error('The value of quantity should be a number.');
            } else {
                if (quantity <= 0) {
                    throw new Error('The value of quantity should be greater than zero.');
                }
            }
        }

        addMoney(money) {
            this.checkMoneyValue(money);
            this.money += money;
            console.log(`Consumer "${this.name}" received ${money} of money. Total: ${this.money} of money.`);
        }

        putProduct(shop, product, quantity) {
            this.checkQuantityValue(quantity);
            let isExists = false;
            for (let i = 0; i < shop.catalog.length; i++) {
                if (shop.catalog[i]['product'].title === product.title) {
                    if (quantity > shop.catalog[i]['totalQuantity'] - shop.catalog[i]['quantityInCart']) {
                        throw new Error(`Consumer "${this.name}" cannot put a product "${product.title}" in the amount of ${quantity} pieces in the cart, because there is not enough quantity (${shop.catalog[i]['totalQuantity'] - shop.catalog[i]['quantityInCart']}) of this product in the shop "${shop.name}".`);
                    }
                    shop.catalog[i]['quantityInCart'] += quantity;
                    isExists = true;
                    
                    let isAlreadyPutted = false;
                    for (let j = 0; j < this.cart.length; j++) {
                        if (this.cart[j]['product'].title === product.title) {
                            this.cart[j]['quantity'] += quantity;
                            isAlreadyPutted = true;
                            console.log(`Consumer "${this.name}" put ${quantity} more pieces in the cart with the existing product "${product.title}" from the shop "${shop.name}". Total: ${this.cart[j]['quantity']} pieces.`);
                            break;
                        }
                    }
                    if (!isAlreadyPutted) {
                        this.cart.push({ 'product': product, 'quantity': quantity });
                        console.log(`Consumer "${this.name}" put a new product "${product.title}" in the cart in the amount of ${quantity} pieces from the shop "${shop.name}".`);
                        break;
                    }
                }
            }
            if (!isExists) {
                throw new Error(`Product "${product.title}" not found in the shop "${shop.name}".`);
            }
        }

        putOutProduct(shop, product, quantity) {
            let isExists = false;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i]['product'].title === product.title) {
                    if (quantity > this.cart[i]['quantity']) {
                        throw new Error(`Consumer "${this.name}" cannot put out a product "${product.title}" in the amount of ${quantity} pieces from the cart in the shop "${shop.name}", because there is less product quantity (${this.cart[i]['quantity']}) in the cart than the consumer wants to put out.`);
                    }
                    this.cart[i]['quantity'] -= quantity;
                    isExists = true;

                    for (let j = 0; j < shop.catalog.length; j++) {
                        if (shop.catalog[j]['product'].title === product.title) {
                            shop.catalog[j]['quantityInCart'] -= quantity;
                        }
                    }
                    console.log(`Consumer "${this.name}" put out a product "${product.title}" in the amount of ${quantity} pieces from the cart in the shop "${shop.name}". Total: ${this.cart[i]['quantity']} pieces`);
                    break;
                }
            }
            if (!isExists) {
                throw new Error(`Product "${product.title}" was not found in the consumer "${this.name}" is cart.`);
            }
        }

        buyProducts(shop, user) {
            let totalCost = 0;
            for (let i = 0; i < this.cart.length; i++) {
                totalCost += this.cart[i]['product'].price * this.cart[i]['quantity'];
            }
            if (this.money >= totalCost) {
                this.money -= totalCost;

                user.buyProducts(this);

                for (let i = 0; i < this.cart.length; i++) {
                    for (let j = 0; j < shop.catalog.length; j++) {
                        shop.catalog[j]['totalQuantity'] -= this.cart[i]['quantity'];
                        shop.catalog[j]['quantityInCart'] -= this.cart[i]['quantity'];
                    }
                }
                this.cart.splice(0, this.cart.length);
                for (let i = shop.catalog.length - 1; i >= 0; i--) {
                    if (shop.catalog[i]['totalQuantity'] === 0) {
                        shop.catalog.pop();
                    }
                }
                console.log(`The products were bought successfully. Consumer "${this.name}" gave ${totalCost} of money to the shop "${shop.name}". Total: ${this.money} of money. All products from the consumer "${this.name}" is cart were successfully transferred to the user "${user.username}" is bought products.`);
            } else {
                throw new Error(`The products were not bought. Consumer "${this.name}" cannot give ${totalCost} of money to the shop "${shop.name}", because the amount of money being given is more than the available (${this.money}) from the consumer.`);
            }
        }
    }
}

export default ConsumerNamespace;