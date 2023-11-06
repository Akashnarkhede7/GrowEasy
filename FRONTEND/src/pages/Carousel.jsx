import carousel1 from "../images/Fertilizer3.jpg";
import carousel2 from "../images/Fertilizer1.jpg"
import carousel3 from "../images/Fertilizer2.jpg"

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img src={carousel2} class="d-block w-100" height="400px" width="200px" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src={carousel3} class="d-block w-100" height="400px" width="200px" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src={carousel1} class="d-block w-100" height="400px" width="200px" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
