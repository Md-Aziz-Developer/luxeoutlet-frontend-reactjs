import banner from 'assets/pictures/banner.png';
import { Fragment } from 'react';
import { API_ENDPOINTS, useQuery } from 'utilities';

const Slider = ({ shop_id }) => {
    const { data } = useQuery(`${API_ENDPOINTS.SLIDER_IMAGES}?shop=${shop_id}`)

    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div class="carousel-indicators">
                {data.map((item, idx) => (
                    <button key={idx} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={idx} className={idx === 0 ? 'active' : ''}aria-current="true" aria-label={`Slide ${idx+1}`}></button>
                    ))}
  </div>
            <div className="carousel-inner">
                {data.map((item, idx) => (
                    <Fragment key={idx}>
                        <div className={`carousel-item ${idx === 0 ? 'active' : ''} `}>
                            <img src={item.image || banner} className="d-block w-100" alt="..." />
                        </div>
                    </Fragment>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
        </div>
    )
}

export default Slider