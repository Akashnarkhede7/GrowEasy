const ContactUs = () => {
  return (
    <div className="text-color m-2 ">
      <section class="banner-bottom ">
        <div class="container py-md-2">
          <h3 class="title-wthree mb-lg-4 mb-3 text-center"><b> Contact Us </b> </h3>
          <div class="row contact_information">
            <div class="col-md-12 d-flex justify-content-center w-100">
             
              <iframe height="300px"
                width="75%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59614.25291289313!2d75.5580843752056!3d20.956899749942195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fa4a1eab90f%3A0x37f67bd21bff0a3c!2sJalgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692607826007!5m2!1sen!2sin" ></iframe>
            </div>

            <div class="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
              <div class="mt-5 information-wthree">
                <h4 class="text-capitalize mb-4">
                  <span class="fa fa-comments"></span> Contact Details
                </h4>
                <p><ul>Manoj Nerkar <br />+91 7757913879</ul>
                <ul>Vivek Shinde <br />+91 7038648364</ul>
                <ul>Akash Narkhede <br />+91 8855064205</ul>
                </p>
                <p class="cont-wthree-para mb-3 text-lowecase">
                  <a href="mailto:groweasy@gmail.com"> groweasy@gmail.com</a>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
              <div class="mt-5 information-wthree">
                <h4 class="text-capitalize mb-4">
                  <span class="fa fa-life-ring"></span> Address
                </h4>
                <p class="cont-wthree-para mb-3 text-capitalize">
                  Jalgaon-425001 Maharashtra - India
                  <label>+91 8855064205 </label>.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
              <div class="mt-5 information-wthree">
                <h4 class="text-capitalize mb-4">
                  <span class="fa fa-map"></span> Queries
                </h4>
                <p class="cont-wthree-para mb-3 text-capitalize">
                  we are ready to help! if you have any queries or issues,
                  contact us for support <label>+91 7038648364</label>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
