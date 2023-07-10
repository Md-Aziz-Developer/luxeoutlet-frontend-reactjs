
import Footer from 'components/Footer'
import Header from 'components/Header'
import { ProductQuery } from 'components/products';
import React, { Fragment } from 'react'

const Terms = () => {
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
			    <div className='container mt-3 mb-3 p-3'>
                <h1 className='mb-3'>TERMS &amp; CONDITIONS</h1>

<p>All information, products, and services displayed on the Luxeoutlet website constitute an &quot;invitation to offer&quot;.</p>
<p>Your order for purchase constitutes your &quot;offer&quot; which shall be subject to the terms and conditions as listed below. Beauty Impex Pvt Ltd has the right to accept or reject your offer without assigning any reason thereof.</p>
<p>To use the Luxeoutlet website, you (The User) have accepted the following terms and conditions given below. Luxeoutlet reserves the right to add, delete, alter, or modify these terms and conditions at any time. You (The User) are therefore advised to read these terms and conditions carefully every time you use the Luxeoutlet website.</p>

<ol>
  <li>
    Luxeoutlet has made every effort to display the color of our products that appear on the site as practically accurately as possible. However, the actual color you see will depend on many other factors and we cannot guarantee color accuracy.
  </li>
  <li>
    The User certifies that he/she is at least 18 (eighteen) years of age or has the consent of a parent or legal guardian.
  </li>
  <li>
    Luxeoutlet will not be responsible for any damage users suffer from using the services on Beaute India. This without limitation includes loss of revenue or data resulting from delays, non-deliveries, missed deliveries, or service interruptions as may occur because of any act/omission of the vendor. This disclaimer of liability also applies to any damages or injury caused by any failure of performance, negligence, defect, deletion, error, omission, interruption, delay in operation or transmission, computer virus, communication line failure, theft or destruction, or unauthorized access to, alteration of, or use of record, whether for breach of contract, tortuous behaviors, or under any other cause of action.
  </li>
  <li>
    Luxeoutlet will take &quot;Full Responsibility&quot; for your Order if the Order has been shipped to any of the major cities, where we used &quot;Private Courier Companies&quot; (e.g., Blue Dart, First Flight, Apex, DHL, etc.) to ship your order.
  </li>
  <li>
    The prices and availability of products are subject to change without prior notice at the sole discretion of Beaute India.
  </li>
  <li>
    Request for cancellations of orders once placed on Luxeoutlet shall not be entertained.
  </li>
  <li>
    Luxeoutlet reserves the right to refuse or cancel any order placed for a product that is listed at an incorrect price or for any other reason. This shall be regardless of whether the order has been confirmed and/or payment has been received. The payment shall be refunded, and the User shall be informed of the same.
  </li>
  <li>
    If a non-delivery or late delivery occurs due to a mistake by the User (i.e., wrong or incomplete name or address or recipient not available) any extra cost spent by Luxeoutlet for re-delivery shall be claimed from the User placing the order.
  </li>
  <li>
    The User agrees to give accurate, authentic and true information. Luxeoutlet reserves the right to confirm and validate the information and other details provided by the User at any point of time. If any such User details are found not to be true wholly or partly, Luxeoutlet has the right in its sole discretion to reject the registration and debar the User from using the services of Luxeoutlet without prior intimation whatsoever.
  </li>
  <li>
    Luxeoutlet will not be liable for any type or kind of credit card fraud. The liability to use a card fraudulently will be on the user and the onus to &#39;prove otherwise&#39; shall be exclusively on the user. The User must exclusively use his/her own card on the site.
  </li>
  <li>
    Luxeoutlet shall not entertain any complaints after 48 Hours, once the order is delivered.
  </li>
  <li>
    This agreement shall be construed in accordance with the applicable laws of Delhi The Courts at Delhi shall have exclusive jurisdiction in any proceedings arising out of this agreement.
  </li>
  <li>
    In Case of a Missing Product query, the customer must raise a complaint at Care@bcplindia.com within 48 hours and we will take a minimum time of 10 Days to resolve the query.
  </li>
</ol>

                
                
          </div>
          <div className="container-fluid">
        {category_arr?
        <Footer category={category_arr}/>:""
        }
      </div>
		</Fragment>
	)
}

export default Terms;