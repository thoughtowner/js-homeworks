const ShopNamespace = {
    Shop: class {
        constructor(name) {
            this.name = name;
            this.catalog = [];
        }

        addProduct(product, quantity) {
            let isAlreadyAdded = false;
            for (let i = 0; i < this.catalog.length; i++) {
                if (this.catalog[i]['product'].title === product.title) {
                    this.catalog[i]['totalQuantity'] += quantity;
                    isAlreadyAdded = true;
                    console.log(`The existing product "${product.title}" has ${quantity} pieces added to the shop "${this.name}". Total: ${this.catalog[i]['totalQuantity']} pieces.`);
                    break;
                }
            }
            if (!isAlreadyAdded) {
                this.catalog.push({ 'product': product, 'totalQuantity': quantity, 'quantityInCart': 0 });
                console.log(`New product "${product.title}" in the amount of ${quantity} pieces added to the shop "${this.name}".`);
            }
        }
    
        removeProduct(product, quantity) {
            let isExists = false;
            for (let i = 0; i < this.catalog.length; i++) {
                if (this.catalog[i]['product'].title === product.title) {
                    if (quantity > this.catalog[i]['totalQuantity'] - this.catalog[i]['quantityInCart']) {
                        throw new Error(`The product "${product.title}" in the amount of ${quantity} pieces cannot be removed from the shop "${this.name}", because the quantity of products in the shop is less than the quantity of products being removed.`);
                    }
                    this.catalog[i]['totalQuantity'] -= quantity;
                    isExists = true;
                    console.log(`The product "${product.title}" in the amount of ${quantity} pieces was removed from the shop "${this.name}".`);
                    break;
                }
            }
            if (!isExists) {
                throw new Error(`Product "${product.title}" not found in the shop "${this.name}".`);
            }
        }
    }
}

export default ShopNamespace;