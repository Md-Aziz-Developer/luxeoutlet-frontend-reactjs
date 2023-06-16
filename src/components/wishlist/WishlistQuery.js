import { API_ENDPOINTS, useQuery } from "utilities";

const WishlistQuery = (id) => {
    const url = API_ENDPOINTS.WISHLIST
    const { data, isLoading, isError } = useQuery(url)

    return {
        data: data,
        isLoading,
        isError
    }

}

export default WishlistQuery

