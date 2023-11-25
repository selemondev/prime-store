import type { Product } from '~/types'
export const useCartStore = defineStore('cartStore', () => {
    const cart = useLocalStorage<Product[]>('cart', []);

    // total products in the cart
    const totalCartProducts = computed(() => {
        return cart.value.length;
    });

    const productQuantity = computed(() => (productId: number) => {
        const item = cart.value.find((item) => item.id === productId);
        return item?.quantity
    });

    // the total price of all the products in the cart
    const totalProductsPrice = computed(() => {
        //@ts-ignore
        return cart.value.reduce((val, product) => val + product.price * product?.quantity, 0).toFixed(2)
    });

    const addProductToCart = (product: Product) => {
        // check if the product exists in the cart
        const item = cart.value.find((item) => item.id === product.id);
        if (item) {
            if (item.quantity) {
                // if it does exist increase the quantity
                return item.quantity++
            }
        } else {
            // if it does not exist, add the product to the cart as well as the quantity
            cart.value.push({ ...product , quantity: 1 })
        }
    };

    const removeProductFromCart = (productId: number) => {
        // check if the product exists in the cart
        const item = cart.value.find((item) => item.id === productId);

        if (item) {
            // if the product exists in the cart and the quantity is greater than one, we decrease the quantity
            if (item.quantity && item.quantity > 1) {
                return item.quantity--
            } else {
                // if the quantity is less than one, we remove the product from the cart
                cart.value = cart.value.filter((item) => item.id !== productId)
            }
        }
    };

    return {
        cart,
        totalCartProducts,
        productQuantity,
        totalProductsPrice,
        addProductToCart,
        removeProductFromCart
    }
})