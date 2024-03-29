import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="3" md="4" sm="4" className="mb-4 p-5">
    <div className="service__item">
      <div class="col-md-12  item">
        <div class="icon">
          <i class={item.icon} />
        </div>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
      </div>
    </div>
  </Col>
);

// const ServiceItem = ({ item }) => (
//   <section class="features text-center section-padding" id="service">
//           <div class="container">
//             <div class="row">
//               <div class="col-md-12">
//                 <div class="services">

//                   <div class="col-md-4 wp2 item">
//                     <div class="icon">
//                     <i class={item.icon} />
//                     </div>
//                     <h2>{item.title}</h2>
//                     <p>{item.desc}</p>
//                   </div>

//              </div>

//               </div>
//             </div>
//           </div>
//         </section>
// );
export default ServicesList;
