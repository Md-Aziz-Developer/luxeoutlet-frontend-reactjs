import { Fragment } from 'react';

import deleteImg from 'assets/pictures/delete.png';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { SpinLoader } from 'components/ui';
import { WishlistQuery } from 'components/wishlist';
import { mutate } from 'swr';
import { API_ENDPOINTS, request } from 'utilities';
import notification from 'utilities/notification';

const Wishlist = () => {
    const { data, isLoading } = WishlistQuery()

    const onDelete = (id) => {
        request.all(`${API_ENDPOINTS.DELETE_WISHLIST}/${id}`)
            .then(response => {
                if (response?.success) {
                    notification('success', response?.message)
                    mutate(API_ENDPOINTS.WISHLIST)
                }
            })
    }

    return (
        <Fragment>
            <Header />
            <div className="container-fluid">
                <div className="main-cart-section">
                    <div className="container-fluid">
                        <h1 style={{ fontSize: "26px" }} className="pt-4 cart-heading">
                            Wishlist
                        </h1>

                        <div className="row mt-4 mb-5">
                            <div className="col-lg-8 ">
                                <div className="cart-section p-4">

                                    {isLoading ? (
                                        <span>
                                            <SpinLoader />
                                        </span>
                                    ) : (
                                        <Fragment>
                                            {
                                                data.length > 0 ? (
                                                    <Fragment>
                                                        {data.map((item, idx) => (
                                                            <Fragment key={idx}>
                                                                <div className="row cart-main">
                                                                    <div className="col-lg-3 col-md-3 col-sm-4">
                                                                        <img src={item?.product?.image} alt="" />
                                                                    </div>
                                                                    <div className="col-lg-9 col-md-9 col-sm-8">
                                                                        <div className="head-price mt-3">
                                                                            <h5 style={{ fontSize: "20px", padding: 20 }}>{item?.product?.name}</h5>
                                                                            <h4 style={{ fontSize: "20px", padding: 20 }}>₹{item?.product?.sale_price}</h4>
                                                                        </div>
                                                                        <div className="qunt-main">
                                                                            <div className="quantity mt-4">


                                                                                <div className='delete-img' >
                                                                                    <img
                                                                                        src={deleteImg}
                                                                                        alt="" style={{ marginLeft: "2rem" }}
                                                                                        onClick={() => onDelete(item?.id)}
                                                                                    />
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="dashed-border"></div>
                                                            </Fragment>
                                                        ))}
                                                    </Fragment>
                                                ) : (
                                                    <p className='text-center'>No product here</p>
                                                )
                                            }
                                        </Fragment>
                                    )
                                    }


                                </div>
                            </div>
                            <div className="col-lg-4 pt-1">
                                <div className="total-section">
                                    <h1 style={{ fontSize: "26px" }} className="mb-5"> <u> Total</u></h1>
                                    <div className="total-products">

                                        {isLoading ? (
                                            <span>
                                                <SpinLoader />
                                            </span>
                                        ) : (
                                            <Fragment>
                                                {data.map((item, idx) => (
                                                    <Fragment key={idx}>
                                                        <div className="product-price">
                                                            <h5 style={{ fontSize: "20px" }}>
                                                                {item?.product?.name}
                                                            </h5>
                                                            <span style={{ fontSize: "20px" }}>
                                                                ₹{Number(item?.product?.sale_price)}
                                                            </span>
                                                        </div>
                                                    </Fragment>
                                                ))}
                                            </Fragment>
                                        )}

                                        <div className="mb-2 mt-4">
                                            <div className="new2"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </Fragment>
    )
}

export default Wishlist;