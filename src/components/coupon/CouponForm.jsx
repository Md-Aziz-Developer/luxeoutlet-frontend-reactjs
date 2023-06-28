import { useCart } from "hooks"
import { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import { applyDiscount } from "store/cart/actions"
import { API_ENDPOINTS, request } from "utilities"
import notification from "utilities/notification"
import { percentage } from "utilities/str"

const CouponForm = () => {
    const dispatch = useDispatch()
    const { subTotal } = useCart()

    const [code, setCode] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        request.all(`${API_ENDPOINTS.COUPON}/${code}`).then(response => {
            if (response?.success) {
                const { id, type, amount, giftcode, expired_status } = response?.data
                const cart_subtotal = Number(subTotal) || 0

                if (expired_status !== '!expired') {
                    const appliedDiscount = {
                        id,
                        type,
                        value: amount,
                        code: giftcode,
                        max_amount: 0,
                        min_amount: 0
                    }
                    switch (type) {
                        case 'Fixed':
                            Object.assign(appliedDiscount, {
                                discount_amount: cart_subtotal > 0 ? Number(amount) : 0
                            })
                            dispatch(applyDiscount(appliedDiscount))
                            break;

                        case 'Percent':
                            Object.assign(appliedDiscount, {
                                discount_amount: cart_subtotal > 0 ? Number(parseFloat(percentage(cart_subtotal, amount)).toFixed(2)) : 0
                            })
                            dispatch(applyDiscount(appliedDiscount))
                            break;

                        default:
                            break;
                    }
                    window.location.reload();
                } else {
                    notification('error', 'Invalid coupon')
                }
            }
        })
    }


    return (
        <Fragment>
            <div className="coupon-section mb-3">
                <h5 className="mb-3">Apply coupon</h5>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="coupon code"
                        className="coupon-input"
                        value={code}
                        onChange={e => setCode(e.target.value)}
                        required
                        disabled={!subTotal}
                    />
                    <input type="submit" value="Apply" className="coupon-btn" disabled={!subTotal} />
                </form>
            </div>
        </Fragment>
    )
}

export default CouponForm