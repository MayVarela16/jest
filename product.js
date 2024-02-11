let products = [];
let id = 0;

const resetProducts = () => {
    products = [];
    id = 0;
};

const addProduct = (name, price) => {
    if (!name) {
        throw new Error('Name is required');
    }
    if (price === undefined) {
        throw new Error('Price is required');
    }

    if (products.some(product => product.name === name)) {
        throw new Error('Product already exists');
    }

    id++;
    const newProduct = { id, name, price };
    products.push(newProduct);
    return newProduct;
};

const removeProduct = (productId) => {
    const index = products.findIndex(product => product.id === productId);
    if (index === -1) {
        throw new Error('Product not found');
    }

    products.splice(index, 1);
};

const getProducts = () => {
    return products;
};

const getProduct = (productId) => {
    const product = products.find(product => product.id === productId);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};

const updateProduct = (productId, newName, newPrice) => {
    const product = getProduct(productId);

    if (newName !== undefined) {
        product.name = newName;
    }

    if (newPrice !== undefined) {
        product.price = newPrice;
    }
};

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct
};