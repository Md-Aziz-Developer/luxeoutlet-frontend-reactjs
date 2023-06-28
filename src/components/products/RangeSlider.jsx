import React, { useState } from 'react';
import Slider from 'react-slider';
import '../../style.css';
import { useNavigate } from 'react-router-dom';

const PriceSlider = () => {
  const [values, setValues] = useState([1, 30000]);
  const navigate=useNavigate();
  const handleUpdate = newValues => {
    setValues(newValues)
};
 const  handleSearch =() =>{
 // console.log('drag stop')
   setTimeout(function(){
        navigate('/products?price_min='+values[0]+'&price_max='+values[1]);
    },300);
}

  return (
    <div style={{ padding: '10px 20px 0px 9px'  }}>
     
      <Slider
        className="slider"
        value={values}
        onChange={handleUpdate}
        step={50}
        min={1}
        max={30000}
        onAfterChange={handleSearch}
        onChangeComplete={handleSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <label className='mt-3' style={{fontSize:12 , fontWeight:500}}>{'₹ ' +values[0]}</label>
          <input
            type="hidden"
            id="minPrice"
            value={values[0].toLocaleString()}
            onChange={(e) => handleUpdate([+e.target.value, values[1]])}
          />
        </div>
        <div>
        <label className='mt-3' style={{fontSize:12 , fontWeight:500}}>{'₹ ' +values[1]+ '+'}</label>
          <input
            type="hidden"
            id="maxPrice"
            value={values[1].toLocaleString()}
            onChange={(e) => handleUpdate([values[0], +e.target.value])}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;