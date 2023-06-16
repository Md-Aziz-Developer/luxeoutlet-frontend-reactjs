import { API_ENDPOINTS, useQuery } from "utilities";

const BrandQuery = (shop_id) => {
    const { data, isLoading, isError } = useQuery(`${API_ENDPOINTS.BRAND}?shop=${shop_id}`)

    return {
        brands: data || [],
        isLoading,
        isError
    }

}

export default BrandQuery

