import amazon from 'assets/pictures/Amazon Pay.png';
import logo from 'assets/pictures/header-logo.png';
import visacard from 'assets/images/visa.avif';
import mastercard from 'assets/images/master.avif';
import maestrocard from 'assets/images/Maestro.avif';
import amexcard from 'assets/images/Amex.avif';
import amazoncard from 'assets/images/Amazon-Pay.avif';
import paytmcard from 'assets/images/paytm.avif';
import upicard from 'assets/images/upi.avif';
import fb from 'assets/pictures/fb-ft.svg';
import insta from 'assets/pictures/insta-ft.svg';
import master from 'assets/pictures/Mastercard.png';
import netbanking from 'assets/pictures/Netbanking.png';
import upi from 'assets/pictures/UPI.png';
import visa from 'assets/pictures/Visa.png';
// import logo from 'assets/pictures/header-logo.png';
import wh from 'assets/pictures/wh-ft.svg';
import { Link,useNavigate,useSearchParams } from "react-router-dom";



import { Fragment, useState } from "react";
import { API_ENDPOINTS, request } from 'utilities';
import notification from 'utilities/notification';

function Footer({category}) {
	const navigate = useNavigate();
	let [searchParams] = useSearchParams();
	const [email, setEmail] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault()
		request.post(API_ENDPOINTS.NEWSLETTER, { email })
			.then(response => {
				if (response?.success) {
					notification('success', response?.message)
					setEmail('')
				}
			})
	}
	const handleNavigate = (e, key, value) => {
		const Obj = {};
		for (const [key, value] of searchParams) {
		  if (key === "price") {
			Object.assign(Obj, { price_min: value[0] });
			Object.assign(Obj, { price_max: value[1] });
		  } else {
			Object.assign(Obj, { [key]: value });
		  }
		}
		if (key === "price") {
		  Object.assign(Obj, { price_min: value[0] });
	
		  Object.assign(Obj, { price_max: value[1] });
		} else {
		  Object.assign(Obj, { [key]: value });
		}
		// Object.assign(Obj, { [key]: value })
		const query = new URLSearchParams(Obj).toString();
		navigate(`/products?${query}`);
	  };

	return (
		<Fragment>
			<div className="container-fluid footsection ">
				<div className="main-footer-section py-4">
					<div className="row  pt-5 pb-5 ">
						<div className="col-lg-6 col-md-5">
							<div className='footer-logo-section'>
								<img src={logo} alt="" />
								<p>Luxeoutlet has redefined conventional shopping experience with a brand portfolio that represents the pinnacle of the craftsmanship and unsurpassed quality further reinforcing its position as India's most desirable destination for world class brands. </p>
							</div>

						</div>
						<div className="col-lg-3 col-md-4">
							<div className="footdata">
								<ul>
									<li>
										<div className="foothead mb-3">
											LUXE OUTLET
										</div>
									</li>
									<Link to="/Whower"><li>Who we are ?</li></Link>
									
									<Link to="/Terms"><li>Terms & Conditions</li></Link>
									<Link to="/Privacy"><li>We respect your privacy </li></Link>
									<Link to="/Contact"><li>Contact Us</li></Link>
									<Link to="/Shipping"><li>Shipping & Returns</li></Link>
									<Link to="#"><li>Authentication Certificate </li></Link>
									<Link to="#"><li>FAQs</li></Link>
								</ul>
							</div>
							{/* <div className="child-foot">
								<p className="mt-4">Sign up for our Newsletter</p>
								<form onSubmit={handleSubmit}>
									<div className="foot-email-block mt-3 d-flex">

										<input type="email" name='email' className="foot-email" placeholder="Your email address" required onChange={e => setEmail(e.target.value)} value={email} />

										<button type='submit' className='f-email border-0'></button>
									</div>
								</form>
								<div className="cards-img mt-3">
									<img src={visa} alt="" />
									<img src={master} alt="" />
									<img src={upi} alt="" />
									<img src={netbanking} alt="" />
									<img src={amazon} alt="" />
								</div>
							</div> */}

						</div>
						<div className="col-lg-3 col-md-3">


							<div className="footdata">
								<ul>
									<li>
										<div className="foothead mb-3">
											SHOP BY
										</div>
									</li>
									{Object.keys(category).slice(0,6).map((name, idx) => (
										<li
										className=" cat-filt category"
										style={{ cursor: "pointer" }}
										key={idx}
										>
										<a onClick={(e) => handleNavigate(e, "category", category[name])}>
										{name}
										</a>
										</li>
									))}
									{/* <Link to="#"><li>Fragrance For Him</li></Link>
									<Link to="#"><li>Fragrance For Her</li></Link>
									<Link to="#"><li>Makeup</li></Link>
									<Link to="#"><li>Body Care</li></Link>
									<Link to="#"><li>Home Fragrance</li></Link>
									<Link to="#"><li>Luggage</li></Link> */}
								</ul>
							</div>
							{/* <div className="footdata">
								<ul className="quick-links">
									<li>
										<div className="foothead mb-3 mt-5">
											QUICK LINKS:
										</div>
									</li>
									<img src={fb} alt="" />&nbsp;&nbsp;&nbsp;
									<img src={wh} alt="" />&nbsp;&nbsp;
									<img src={insta} alt="" />
								</ul>
							</div> */}
						</div>
					</div>

					<div className="container">
						<h6 className='text-center'>CHECKOUT SECURELY WITH</h6>
						<div className="d-flex flex-wrap justify-content-center my-3 gap-3 img-card">
							<img src={visacard} alt=""  />
							<img src={mastercard} alt=""  />
							<img src={maestrocard} alt=""  />
							<img src={amexcard} alt=""  />
							<img src={amazoncard} alt=""  />
							<img src={paytmcard} alt=""  />
							<img src={upicard} alt=""  />
						</div>
						<h6 className='text-center mt-4'>2023. Powered by Avidus Interactive. All right reserved</h6>
					</div>

				</div>
			</div>
		</Fragment>
	)
}

export default Footer;
