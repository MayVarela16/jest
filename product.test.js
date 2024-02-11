const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
    resetProducts();
});

describe('Adding Products', () => {
    test('should add a product', () => {
        addProduct('Product 1', 10);
        expect(getProducts()).toEqual([{ id: 1, name: 'Product 1', price: 10 }]);
    });

    test('should fail when adding a repeated product', () => {
        addProduct('Product 1', 10);
        expect(() => addProduct('Product 1', 20)).toThrow('Product already exists');
    });

    test('should fail when adding a product with no name', () => {
        expect(() => addProduct(undefined, 20)).toThrow('Name is required');
    });

    test('should fail when adding a product with no price', () => {
        expect(() => addProduct('Product 1')).toThrow('Price is required');
    });
});

describe('Removing Products', () => {
    test('should remove a product', () => {
        addProduct('Product 1', 10);
        removeProduct(1);
        expect(getProducts()).toEqual([]);
    });

    test('should fail when removing a non-existing product', () => {
        expect(() => removeProduct(1)).toThrow('Product not found');
    });
});

describe('Getting a single product', () => {
    test('should get a product', () => {
        addProduct('Product 1', 10);
        expect(getProduct(1)).toEqual({ id: 1, name: 'Product 1', price: 10 });
    });

    test('should fail when getting a non-existing product', () => {
        expect(() => getProduct(1)).toThrow('Product not found');
    });
});

describe('Updating Products', () => {
    test('should update a product', () => {
        addProduct('Product 1', 10);
        updateProduct(1, 'Updated Product', 20);
        expect(getProduct(1)).toEqual({ id: 1, name: 'Updated Product', price: 20 });
    });

    test('should fail when updating a non-existing product', () => {
        expect(() => updateProduct(1, 'Updated Product', 20)).toThrow('Product not found');
    });

    test('should only update the price', () => {
        addProduct('Product 1', 10);
        updateProduct(1, undefined, 20);
        expect(getProduct(1)).toEqual({ id: 1, name: 'Product 1', price: 20 });
    });

    test('should only update the name', () => {
        addProduct('Product 1', 10);
        updateProduct(1, 'Updated Product');
        expect(getProduct(1)).toEqual({ id: 1, name: 'Updated Product', price: 10 });
    });
});