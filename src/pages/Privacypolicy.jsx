import Footer from 'components/Footer'
import Header from 'components/Header'
import { ProductQuery } from 'components/products';
import React, { Fragment } from 'react'

export default function Privacypolicy() {
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
        <div className='container p-3 mt-3 mb-3'>
        <div className='row'>
            <div className='col-md-12'>
            <h1 className='mb-3'>PRIVACY POLICY</h1>

<p><strong>We protect your privacy.</strong></p>

<p>Our privacy policy is simple: any information you give us stays with us. We do not rent, sell, lend, or otherwise distribute your personal information to anyone for any reason. This includes your contact information, as well as specific order information.</p>

<p><strong>We limit data access to those who need to know.</strong></p>

<p>Within our organization, your personal data is accessible to only a limited number of employees with special access privileges. Although we may, from time to time, compile general demographic information based on your order, this information is shared within our organization only and has no identifiable personal data associated with it.</p>

<p><strong>Information Collected</strong></p>

<p>To enable you to place an order on our site, we need to have the following basic information about you: Your First Name, Your Last Name, and Your Address, City, Zip code, State, Country, Phone Number and Contact E-mail address.</p>

<p>Apart from this, our systems gather certain details about your computer&#39;s internet connection like your IP address when you visit our site. Your IP address does not identify you personally. We use this information to deliver our web pages to you upon request, to customize our site as per your interest, to calculate the number of visitors on our site and to know the geographic locations from where our visitors come.</p>

<p>We do not allow any unauthorized person or organization be it other members, visitors, and anyone not in our organization to use any information collected from you.</p>

<p><strong>Information Modification</strong></p>

<p>You can modify your personal details by accessing Edit Profile option anytime from our site.</p>

<p><strong>Information Sharing</strong></p>

<p>Probably this is the most important question in your mind as to with whom do we share your information? The answer to this question is that we do not rent, sell, barter, or give away your information to anyone. To some extent, information has to be passed on to the courier companies, credit card processing companies, vendors, etc. to enable them to perform their functions related to your order fulfillment. Apart from this normal business requirement, information may also be needed to be shared with law authorities, for fraud detection, and for the safety of our site, employees, management, users, members and other affiliates associated with us.</p>

<p><strong>Information Usage</strong></p>

<p>The most important usage of the information collected from you is your email which is used to inform you that your order has been confirmed/executed. Your email is also used to inform you for your customer service related queries and for any newsletters sent. All other information collected is confidentially stored and will not be disclosed unless needed as per the requirement of the law authorities or in case of any disputes.</p>
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
