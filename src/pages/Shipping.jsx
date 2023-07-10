import Footer from 'components/Footer'
import Header from 'components/Header'
import { ProductQuery } from 'components/products';
import React, { Fragment } from 'react'


const Shipping = () => {
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
			<Header />
			    <div className='container mt-3 mb-3 p-3 shipingContent'>
                <h1 className='mb-3'>SHIPPING &amp; RETURNS</h1>

<p ><strong>Domestic Shipping:</strong><br />
WE OFFER FREE SHIPPING ALMOST ANYWHERE IN INDIA Normally orders placed before 1 pm on a
business day, we aim to deliver the same within 3 to 5 working days, provided that the &nbsp;card security checks
are complete, payment received and stock availability is confirmed. Orders Received on Sunday or during
Holidays are dispatched the following working day(s). During busy times, such as holiday periods, there can
be processing and shipping delays.<br />
The orders cannot be shipped to PO boxes or military addresses, rural domestic addresses require one or
more additional days to deliver. Orders requiring engraving or any customization will require additional time
and will be shipped in 10 working days.<br />
For shipments delivered outside DELHI, the customer&rsquo;s state may charge an OCTORI Duty/Local Body Tax
over the price of the item. These charges are beyond our control and can&rsquo;t be reimbursed.
Domestic customers are responsible for any OCTORI Duty/ Local Body Tax charged by your state
government. We are unable to predict which shipments will be assessed these fees or the amount of the fee
that may be charged. In cases of refusal, either the cost of the goods or return service costs will be
assessed.<br />
<strong className='text-danger'>International Shipping:</strong><br />
<p className='text-danger'>We currently do not accept or undertake International/Overseas Orders. We will notify you if and when we
start this service.</p>
<strong>Tracking</strong>:&nbsp;e-mail containing your package tracking information will be sent after shipment.<br />
Please mail us at&nbsp;<strong>CARE@BCPLINDIA.COM</strong>&nbsp;if any question.<br />
<strong>Cancellation of Order by User</strong><br />
&bull; Cancellation of order within 4 hours without penalty.<br />
After placing an order, customer can only cancel the order if the order state is showing as &amp;quot;pending&amp;quot; under
Order History. Cancellations have to be made within (maximum) 4 Hours of placing an order. For cancelling
your order, you will have to get in touch with our Customer Support Team by sending an email giving your
Order Number.&nbsp;<br />
<strong>General Scenario</strong><br />
In case we receive a cancellation e-mail and till that time the order has already been &amp;quot;processed&amp;quot; by us,</p>

<p>after which the order cannot be cancelled Luxeoutlet has complete right to decide whether an order should
be cancelled or not. Also, the customer agrees not to dispute the decision made by&nbsp;Luxeoutlet and
accept&nbsp;Luxeoutlet decision regarding the cancellation.<br />
<strong>In case of Perishable Goods</strong><br />
In case if a customer wants to cancel the order for a perishable product, the cost of the products will have to
be borne by them.<br />
<strong>In case of Gift Certificate</strong><br />
In case Gift Certificate have been issued by&nbsp;Luxeoutlet or any of its authorized partners, the same cannot
be returned. Also, the validity of the gift certificate cannot be extended.&nbsp;
<strong>Cancellation of Order by&nbsp;Luxeoutlet</strong><br />
Luxeoutlet reserves the right to refuse or cancel any order placed for a product that is listed at an incorrect
price or for any other reason. This shall be regardless of whether the order has been confirmed and/or
payment been received. The 100% payment shall be refunded and the User shall be informed of the same.
If a non-delivery or late delivery occurs due to a mistake by the User (i.e. wrong or incomplete name or<br />
address or recipient not available or any other related reason) any extra cost spent by&nbsp;Luxeoutlet for re-
delivery shall be claimed from the User.<br />
<strong>Replacement/ Return Policy by&nbsp;Luxeoutlet</strong><br />
In 48 Hour Including the following:</p>

<ol>
	<li>Products perishable in nature</li>
	<li>Gift Certificates&nbsp;</li>
	<li>Items that have been used or opened</li>
	<li>An item not returned in the condition it was received.</li>
	<li>Any item received by us in a damaged condition.</li>
	<li>Items sourced or delivered outside India.</li>
</ol>

<p>We take stringent measures to ensure that the items delivered to you are in perfect condition. However,<br />
there is a remote possibility that:</p>

<ul>
	<li>the item may be damaged during transit</li>
	<li>or there might be a manufacturing defect</li>
	<li>or that a wrong item is delivered to you</li>
</ul>

<p>In only such cases as given above, we will replace the item at no extra cost, if the request for replacement /
return of item is made within the stipulated time-frame as given below. No returns or replacements will be
allowed after the order is processed, except for the reasons given above.</p>

<p>To get a replacement, email us your Order Number and the Reason for returning. Only after receiving our
confirmation for the return, you are requested to send the item back to us. We will then arrange for the
replacement of the item through our logistics partner. We shall not be responsible for any items sent to us
for return / replacement without our confirmation.<br />
<strong>Missing Product Policy:</strong></p>

<ul>
	<li>In Case of the Missing Product Query the Customer need to Raise a Complaint at Care@bcplindia.com</li>
	<li>Within 48 hour and We Will take Minimum time of 10 Days to Resolve the Query.&nbsp;</li>
</ul>

<p><strong>Our Return Policy:</strong></p>

<ul>
	<li>Unboxing Video required for any Returns or Exchanges</li>
	<li>Replacement request must be made within 48 Hour of purchase and must not be part of above list</li>
	<li>There are no extra shipping charges for the delivery of replacement items for the reasons mentioned above.</li>
	<li>In case of a replacement, our logistics partners will attempt delivery of the items thrice. In case the</li>
	<li>delivery is not executed during all the three attempts, due to recipient not available / premises locked, etc.,</li>
	<li>the customer shall still be charged for the order.</li>
	<li>In case of perishable items or custom-made non-perishable items, neither&nbsp;Luxeoutlet nor our enabling partners will be able to accept any returns or replacement of such items.</li>
</ul>

<p><strong>Refund Policy by&nbsp;Luxeoutlet</strong></p>

<ul>
	<li>Refund will be done through&nbsp;online mode in 7-10 working days</li>
</ul>

<p><strong>Cases of goods unavailability or service problem:</strong></p>

<ul>
	<li>If the item sent for replacement is not available, we will try to give you best possible alternatives, but at the end choice of customer will be final</li>
	<li>If the order is confirmed by us and order is not able to ship the product on time, then we give refunds to customer, if customer demands</li>
	<li>100% refund will be given, if product is not available or vendor is not able to ship the products</li>
	<li>For courier products, If the delivery address is out-side the service area, then only 100% refund will be given.</li>
</ul>

          </div>
          <div className="container-fluid">
        {category_arr?
        <Footer category={category_arr}/>:""
        }
      </div>
		</Fragment>
	)
}

export default Shipping;