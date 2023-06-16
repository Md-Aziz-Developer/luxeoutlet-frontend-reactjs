import { API_ENDPOINTS, request } from "utilities";
import notification from "utilities/notification";

export const addToWishlist = async (id) => {
    const payload = {
        product_id: id,
        qty: 1,
        type: 'wishlist'
    }
    const response = await request.post(API_ENDPOINTS.ADD_WISHLIST, payload);
    if (response?.success) {
        notification('success', 'Product added to wishlist.')
    }
}
