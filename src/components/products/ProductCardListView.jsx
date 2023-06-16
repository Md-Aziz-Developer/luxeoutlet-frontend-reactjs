import noImage from 'assets/images/no-image.jpg';
import whishlist from 'assets/pictures/noun-love-4726271.svg';
import cart from 'assets/pictures/Path-13479.svg';
import { addToWishlist } from "components/wishlist";
import { Fragment } from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { add } from "store/cart/actions";
import notification from 'utilities/notification';
import { removeHtmlTags } from 'utilities/str';
import BrandQuery from './BrandQuery';

const ProductCardListView = ({ product }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { brands } = BrandQuery()
    const coverImage = product?.image || noImage
    const onError = (e) => {
        e.target.src = noImage
    }
    

    const addToCart = () => {
        const data = {
            id: product?.id || 0,
            product_id: product?.id || 0,
            name: product?.name || '',
            brands: product?.brands || '',
            price: Number(product?.sale_price) > 0 ? Number(product?.sale_price) : Number(product?.normal_price),
            quantity: 1,
            // attributes: values.attributes,
            model: product || {}
        }
        dispatch(add(data))
        notification('success', 'Product Added To Cart');
    }

    return (
        <Fragment>
            {/* <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                <div className="card mt-3 mb-4">
                    <img
                        src={coverImage}
                        onError={onError}
                        alt=""
                        onClick={e => navigate(`/products/${product?.id}`)}
                        style={{ cursor: 'pointer' }}
                    />
                    <h6  className='line-clamp'>
                                        {product?.brand?.name} </h6>
                                        
                    <h6 className="card-title mb-2" >
                        <Link to={`/products/${product?.id}`}>

                            {product?.name}
                        </Link>
                    </h6>
                    <div className="price-buy pt-3 pb-3">
                    <Link to={`/products/${product?.id}`}>
                    <div className="price">
                        ₹ {product?.normal_price}
                        </div> 
                        </Link>
                       
                        <div className='d-flex'>
                            <button className='border-0 p-0'>
                                <img src={whishlist} alt="" style={{ height: 18 }} />
                            </button>
                            <button className='border-0 p-0' onClick={addToCart}>
                                <img src={cart} alt="" style={{ height: 18 }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='row mt-5 pe-3 main-list-view align-items-center' style={{ boxShadow:"0px 3px 6px #00000029" }}>
              <div className='col-sm-4'>
              <img
                        src={coverImage}
                        onError={onError}
                        alt=""
                        onClick={e => navigate(`/products/${product?.id}`)}
                        style={{ cursor: 'pointer' ,  width:"80%" }}
                    />
              </div>
              <div className='col-sm-8 listview-card'>
                {console.log(product)}
              <h6 className="card-title  mb-2" >
                        <Link to={`/products/${product?.id}`}>

                            {product?.name}
                        </Link>
                    </h6>
                   <div className=' mb-3 d-flex flex-row align-items-center'>
                   <h6  className='line-clamp'>
                    {product?.brand?.name} </h6>
                    <h6  className='line-clamp'>
                    {product?.size?.name} </h6>
                   </div>
                    <p  className='line-clamp mb-4 mt-4'>
                        {removeHtmlTags(product?.short_description)}
                    </p>         
                   <div className='  d-flex flex-row align-items-center'>
                    <div className=" list-view-price price-buy pt-3 pb-3 me-5">
                    <Link to={`/products/${product?.id}`}>
                        <div className="price">₹ {product?.sale_price}</div>
                    </Link>
                    {product?.normal_price> 0 ?(
                        <del>
                        <Link to={`/products/${product?.id}`}>
                            <div className="price">₹ {product?.normal_price}</div>
                        </Link>
                        </del>):""}
                       
                        <div className='d-flex ms-3 me-3'>
                            <button className='border-0 p-0 ms-3 me-3'>
                            <img
                  src={whishlist}
                  alt=""
                  style={{ height: 18 }}
                  onClick={() => addToWishlist(product?.id)}
                />
                            </button>
                            <button className='border-0 p-0 ms-3 me-3'  onClick={addToCart}>
                                <img src={cart} alt="" style={{ height: 18 }} />
                            </button>
                        </div>
                    </div>
                    </div>
              </div>
            </div>
            
        </Fragment>
    )
}

export default ProductCardListView