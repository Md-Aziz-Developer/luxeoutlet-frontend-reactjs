
import Footer from 'components/Footer'
import Header from 'components/Header'
import { ProductQuery } from 'components/products';
import React, { Fragment } from 'react'

const Whoweare = () => {
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
               <h1 className='mb-3'>Who We Are ?</h1>
                <p >Luxeoutlet has redefined the conventional shopping experience with a brand portfolio that
represents the pinnacle of craftsmanship and unsurpassed quality further reinforcing its position as
India&#39;s most desirable destination for world-class brands.</p>
<br />
<p>
Luxeoutlet belongs to one of the largest &amp; most trusted distribution houses in INDIA, which has been
in the INDIAN market for over 3 decades. It is today India’s foremost distribution house in the
categories of beauty, fragrances, cosmetics, and lifestyle accessories.</p>
<br />
<p>
A brand portfolio exceeding 50+ leading international brands in fragrances, beauty &amp; cosmetics,
luggage, accessories, and many more categories. With over 30 years of customer understanding
across Mass, Premium, Fashion, Prestige &amp; Luxury segments, its provided partners the competitive
edge in a challenging &amp; emerging market like India.</p>
          </div>
          <div className="container-fluid">
        {category_arr?
        <Footer category={category_arr}/>:""
        }
      </div>
		</Fragment>
	)
}

export default Whoweare;