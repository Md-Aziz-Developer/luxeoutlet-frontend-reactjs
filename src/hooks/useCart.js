import { useSelector } from "react-redux";
import { percentage } from "utilities/str";

const useCart = () => {
    const { data, subTotal, total, totalQuantity, coupon } = useSelector(state => state.cart)

    const discountAmount = () => {
        switch (coupon?.type) {
            case 'Fixed':
                return subTotal > 0 ? Number(coupon?.value) : 0

            case 'Percent':
                return subTotal > 0 ?
                    Number(parseFloat(percentage(subTotal, coupon?.value)).toFixed(2))
                    : 0

            default:
                return 0
        }

    }

    return {
        items: data,
        subTotal,
        total,
        totalQuantity,
        discount: discountAmount(),
        coupon
    }

}

export default useCart