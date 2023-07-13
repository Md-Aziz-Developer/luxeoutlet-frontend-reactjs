
import axios from 'axios';
import Footer from 'components/Footer'
import Header from 'components/Header'
import { ProductQuery } from 'components/products';
import React, { Fragment, useState } from 'react'
import notification from 'utilities/notification';


const Contact = () => {
  const {data}=ProductQuery();
  const category_arr = {};
  {
      data.map(
        (product, idx) =>
          (category_arr[product?.category?.name] = product?.category?.id)
      );
    }
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [number,setNumber]=useState('');
    const [subject,setSubject]=useState('');
    const [message,setMessage]=useState('');
    const [successMessage,setsuccessMessage]=useState('');
    const [errorMessage,seterrorMessage]=useState('');
    const processQueryForm=(e)=>{
      e.preventDefault();
      var basePath=process.env.REACT_APP_API_BASE_URL;
      let syntax = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //console.log(basePath);
      if(name.trim()==''){
        notification('error','Name is required!');
      }else if(email.trim()==''){
        notification('error','Email is required!');
      }else if(!syntax.test(email)){
        notification('error','Email is not valid!');
      }else if(number.length==''){
        notification('error','Number is required!');
      }else if(number.length<10){
        notification('error','Number is not valid!');
      }else{
            axios.post(basePath+'sendEnquiry',{
              'name':name,
              'email':email,
              'number':number,
              'subject':subject,
              'msg':message
            })
            .then(res=>{
              //console.log(res.statusText);
                document.getElementById("contactForm").reset();
                notification('success','Thanks For query We will get back soon!');
              // }else{
              //   notification('error','Something Error Try Again!!!');
              // }
            })
            .catch(err=>{
              notification('error','Something Error Try Again!!!');
            })
      }
    
    }
	return (
		<Fragment>
			<Header />
			    <div className='container mt-4 mb-4 contactForm'>
            <form method='post' onSubmit={processQueryForm} id='contactForm'>
               <div className='row'>
                <div className='col-md-12'>
                  <h1 className='text-center'>Contact Us</h1>
                  <h6 className='text-center mb-2 fw-600'>FOR ANY ASSISTANCE AND QUERIES FEEL FREE TO LEAVE A NOTE.</h6>
                  <h6 className='text-center mb-2'>-OR-</h6>
                  <h6 className='text-center mb-1 fw-600'>REACH US AT</h6>
                  <h6 className='text-center mb-1 fw-600'>Mobile: 8080540679</h6>
                  <h6 className='text-center mb-1 fw-600'>Mail: care@bcplindia.com</h6>
                  <h6 className='text-center mb-3 fw-600'>We will respond to you message within 24 hours.</h6>
                   {successMessage!='' ?
                  <h5 className='text-center  text-success fw-bold'>{successMessage}</h5>
                : ''
                }
                {errorMessage!='' ?
                  <h5 className='text-center  text-danger fw-b'>{errorMessage}</h5>
                  : ''
                }
                </div>
                <div className='col-md-6 form-group mb-3'>
                  <label>Name <span className='text-danger'>*</span></label>
                  <input type='text' name='name' className='form-control' placeholder='Your Name' onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className='col-md-6 form-group mb-3'>
                  <label>Email <span className='text-danger'>*</span></label>
                  <input type='email' name='email' className='form-control' placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='col-md-6 form-group mb-3'>
                  <label>Phone Number <span className='text-danger'>*</span></label>
                  <input type='number' name='number' className='form-control' placeholder='Your Number' onChange={(e)=>setNumber(e.target.value)} />
                </div>
                <div className='col-md-6 form-group mb-3'>
                  <label>Subject </label>
                  <input type='text' name='subject' className='form-control' onChange={(e)=>setSubject(e.target.value)} placeholder='Your Subject'/>
                </div>
                <div className='col-md-12 form-group mb-3'>
                  <label>Message</label>
                  
                  <textarea className='form-control' name='message' rows={3} placeholder='Your Message' onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>
                <div className='w-100 text-center'>
                  <button type='submit' className='btn btn-sm btn-dark rounded'>Send Enquiry</button>
                </div>
               </div>
               </form>
          </div>

          <div className="container-fluid">
        {category_arr?
        <Footer category={category_arr}/>:""
        }
      </div>
		</Fragment>
	)
}

export default Contact;