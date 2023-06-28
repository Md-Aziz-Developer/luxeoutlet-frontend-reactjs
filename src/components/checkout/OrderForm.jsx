import { FormikProvider, useFormik } from 'formik';
import { useCart, useShop, useUser } from 'hooks';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clear } from 'store/cart/actions';
import { API_ENDPOINTS, request } from 'utilities';
import notification from 'utilities/notification';
import { loadScript, toJson } from 'utilities/str';
import DefaultAddressQuery from './DefaultAddressQuery';

const OrderForm = () => {
    const navigate = useNavigate()
    const { items, subTotal, total, totalQuantity, discount, coupon } = useCart()
    const { isUserLoggedIn, user } = useUser()
    const { info: shop } = useShop()
    const dispatch = useDispatch()
    const { data: defaultAddress } = DefaultAddressQuery()
    const address = toJson(defaultAddress?.address)
    const isDisabled = isUserLoggedIn && totalQuantity > 0
    const [payMethod, setPayMethod] = useState('razorPay');
    const [saleTax,setSaletax]=useState(0);
    const [grandTotal,setGrandTotal]=useState(0);
    useEffect(()=>{
        if(total>discount){
			var mytotal=(subTotal-discount);
			if(mytotal<850){
				setSaletax(75);
				var Gran=mytotal+75;
				if(Gran<=0){
					setGrandTotal(0)
				}else{
					setGrandTotal(Gran);
				}
			}else{
				setSaletax(0);
				setGrandTotal(mytotal);
			}
		}else{
			setSaletax(75);
				setGrandTotal(75);
		}
        
    });
    
   // console.log('Userdata',user);
    const getTotalAmount=(subTotal,discount)=>{
        var balance=subTotal-discount;
        if(balance<=0){
            return 0;
        }else{
            return balance;
        }
    }
    
    const initialValues = {
        "products": items.map(item => ({
            "order_quantity": item?.quantity,
            "product_id": item?.product_id,
            "unit_price": item?.price,
            "subtotal": item?.price * item?.quantity
        })),
        "status": 1,
        "amount": total,
        "sales_tax": saleTax,
        "coupon_id": coupon?.id,
        "shop_id": shop?.id,
        "paid_total": grandTotal,
        "total": total,
        "customer_contact": user?.contact || '0123456789',
        "customer_id":user?.id,
        "customer_email":user?.email,
        "payment_gateway": payMethod,
        "billing_address": {
            "country": address?.country,
            "state": address?.state,
            "zip": address?.zip,
            "city": address?.city,
            "address": address?.address
        },
        "shipping_address": {
            "country": address?.country,
            "state": address?.state,
            "zip": address?.zip,
            "city": address?.city,
            "address": address?.address
        }
    }

    const onSubmit = (values) => {
        request.post(API_ENDPOINTS.ORDER, values)
            .then(response => {
                if (response?.success) {
                    if (payMethod === 'razorPay') {
                        if((grandTotal)==0){
                            dispatch(clear())
                            navigate(`/`)
                        }else{
                        displayRazorpay(response?.data)
                        }
                    } else {
                        notification('success', response?.message)
                        dispatch(clear())
                        // navigate(`/order-complete?order_id=${response?.data?.id}`)
                        navigate(`/`)
                    }
                }
            })
    }

    const formik = useFormik({ initialValues, enableReinitialize: true, onSubmit })

    async function displayRazorpay(order) {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            notification('error', 'Razorpay SDK failed to load. Are you online?')
            return
        }

        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY,
            currency: process.env.REACT_APP_RAZORPAY_CURRENCY,
            amount: (order?.paid_total) * 100,
            name: 'BEAUTE INDIA',
            description: order?.id,
            handler: function (response) {
                if (response?.razorpay_payment_id) {
                    dispatch(clear())
                    navigate('/')
                }
            },
            prefill: {
                name: user.name,
                email: user.email,
                // phone_number: user.customer_contact
            }
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

   

    return (
        <Fragment>
            <FormikProvider value={formik}>
                {/* <form > */}
                <div className="payment-optoin-section">
                    <div className="row pt-5 pb-5">
                        <div className="col-lg-8">
                            <h2 className='payment'>Payment Options</h2>
                            <div className="choose-payment-mode mt-5 pe-5">
                                <ul>
                                    <div className="radio-btn-section pe-3">
                                        <li>Razor pay </li>
                                        <div className="form-check">
                                            <label className="form-check-label" for="razorPay">
                                                <input className="form-check-input" type="radio" name="payment_gateway" id="razorPayoption"
                                                    value="razorPay"
                                                    checked={payMethod === 'razorPay'}
                                                    onChange={(e) => setPayMethod(e.currentTarget.value)}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    {(grandTotal) >800 && (grandTotal)<15000 ?
                                    <>                                     <hr />
                                    <div className="radio-btn-section pe-3">
                                        <li>Cash on delivery</li>

                                        <div className="form-check">
                                            <label className="form-check-label" for="CASH_ON_DELIVERY">
                                                <input className="form-check-input" type="radio" name="payment_gateway" id="CASH_ON_DELIVERY"
                                                    value="CASH_ON_DELIVERY"
                                                    checked={payMethod === 'CASH_ON_DELIVERY'}
                                                    onChange={(e) => setPayMethod(e.currentTarget.value)}
                                                />
                                            </label>

                                        </div>
                                    </div></>
:""}
                                    <hr />
                                    {/* <div className="radio-btn-section pe-3">
                                            <li>UPIs</li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="payment_gateway" id="UPIs" 
                                                    value="UPIs"
                                                    checked={payMethod === 'UPIs'}
                                                    onChange={(e) => setPayMethod(e.currentTarget.value)}
                                                 />
                                                <label className="form-check-label" for="UPIs">

                                                </label>
                                            </div>
                                        </div> */}

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="total-section">
                                <h1 style={{ fontSize: "26px" }} className="mb-5"> <u> Total</u></h1>
                                <div className="total-products">
                                    {items.map((item, idx) => (
                                        <div className="product-price" key={idx}>
                                            <h5 style={{ fontSize: "18px" }}>{item?.model?.name}</h5>
                                            <span style={{ fontSize: "18px" }}>₹ {item?.price * item?.quantity}</span>

                                        </div>
                                    ))}

                                    <div className="product-price">
                                        <h5>Discount</h5><span>₹{discount}</span>
                                    </div>

                                    <div className="mb-2 mt-4">
                                        <div className="new2"></div>
                                    </div>
                                    <div className="product-price">
                                        <h5 style={{ fontSize: "20px !important" }}>Sub Total</h5><span style={{ fontSize: "20px" }}>₹ {(grandTotal)}</span>
                                    </div>
                                    <p>Shipping Charges  ₹ {saleTax}</p>
                                </div>
                                <button type='submit' disabled={!isDisabled} onClick={formik.handleSubmit} className="payment-btn mt-5" > Proceed to Payment</button>


                            </div>
                        </div>
                    </div>
                </div>
                {/* </form> */}
            </FormikProvider>
        </Fragment>
    )
}

export default OrderForm