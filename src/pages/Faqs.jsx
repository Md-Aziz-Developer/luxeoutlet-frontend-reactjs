import Footer from 'components/Footer'
import Header from 'components/Header'
import { ProductQuery } from 'components/products';
import React, { Fragment } from 'react'

export default function Faqs() {
    const {data}=ProductQuery();
    const category_arr = {};
    {
        data.map(
          (product, idx) =>
            (category_arr[product?.category?.name] = product?.category?.id)
        );
      }
  return (
    <Fragment>
        <Header/>
        <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-md-12">
            <h2 className='mb-3'>FAQS</h2>
            <p className='mb-3'>Hello, If you have other queries please send it to <a href="mailto:care@bcplindia.com" className>care@bcplindia.com</a></p>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    I'm having trouble placing an order can you help?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    If using a mobile device, try using the website to complete your order. If using the website make sure you clear your cache and cookies, and if this doesn’t work try changing your browser. Still having trouble? Send our customer services team an e-mail at: <a href="mailto:care@bcplindia.com" className>care@bcplindia.com</a> and make sure you include the browser/device you’re using, any screenshots or photos, and make sure you e-mail us using the same one you have an account with.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Where is my order?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Once your order has been shipped you’ll receive a tracking information on e-mail. Orders are normally dispatched within a few working days provided that the card security checks are complete.<br />
                    If you can’t find your e-mail make sure you double check your junk/spam folders. If the tracking on your order hasn't updated for several days get in touch with Customer Services who can look into it for you.<br />
                    Customer Service Email: <a href="mailto:care@bcplindia.com" className>care@bcplindia.com</a><br />
                    Customer Service Phone: <a href="tel:+918080540679" className>8080540679</a>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Can I cancel or change my order?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    After placing an order, customer can only cancel the order if the order state is showing as "pending" under Order History. Cancellations have to be made within (maximum) 4 Hours of placing an order. For cancelling your order, you will have to get in touch with our Customer Support Team by sending an email giving your Order Number. Please go through Shipping &amp; Returns for more details.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Can I change my delivery address?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Once an order has been placed unfortunately it cannot be cancelled or amended.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFour">
                    I forgot to use my promotion code - can I add it?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Promotion codes do have to be entered at the time of placing the order. They cannot unfortunately be added on after the order process has been completed.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseFour">
                    Do you offer a price match service?
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Unfortunately, we do not offer a price matching service. As a reputable retailer we do our utmost to remain as competitive as we can on the market to ensure our customers get the best value from shopping with us.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseFour">
                    I didn't get an invoice in my parcel
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    We've gone paperless so you won't receive any paperwork in your parcel. You'll still get your order confirmation and dispatch via e-mail.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseFour">
                    I am unable to checkout with COD option?
                  </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Cash On Delivery is not applicable on order above Rs. 15,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="container-fluid">
        {category_arr?
        <Footer category={category_arr}/>:""
        }
      </div>
    </Fragment>
  )
}
