
import Footer from 'components/Footer';
import Header from 'components/Header';
// import { ProductCard, ProductQuery } from 'components/products';
import { Fragment } from 'react';


const Contact = () => {
	

	return (
		<Fragment>
			<Header />
			    <div className='container mt-4 mb-4'>
                <div className='head p-4 ' style={{fontWeight:"bolder"}}>
                  ABOUT US
                </div>
                <p className='p-4'>Beaute India has redefined conventional shopping experience with a brand portfolio that represents the pinnacle of the craftsmanship and unsurpassed quality further reinforcing its position as India's most desirable destination for world class brands.</p>
                <p className='p-4'>Beaute India belongs to one of largest & most trusted distribution houses in INDIA who is present in INDIAN market for over 3 decades. It is today India’s foremost distribution houses in the categories of beauty, fragrances, cosmetics and lifestyle accessories.</p>
                <p className='p-4'>A brand portfolio exceeding 50+ leading International brands in fragrances, beauty & cosmetics, luggage, accessories and many more categories. With over 30 years of customer understanding across the segments of Mass, Premium, Fashion, Prestige & Luxury, its provided partners the competitive edge in a challenging & emerging market like India.</p>
                
          </div>
			<Footer />
		</Fragment>
	)
}

export default Contact;