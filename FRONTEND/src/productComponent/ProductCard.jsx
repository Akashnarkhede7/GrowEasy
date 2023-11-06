
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import CategoryNavigator from "./CategoryNavigator";

// const ProductCard = (product) => {
//   const productDetailLink = `/product/${product.item.id}/category/${product.item.category.id}`;


//   let isAdminLoggedIn = sessionStorage.getItem("isAdminLoggedIn");
//   let user = JSON.parse(isAdminLoggedIn);


//   return (
//     <div className="col">
//       <Link to={productDetailLink} style={{ textDecoration: "none" }}>
//         <div className="card border-0 rounded-card card-hover product-card custom-bg h-100">
//           <img
//             src={"http://localhost:8080/api/product/" + product.item.imageName}
//             className="card-img-top rounded mx-auto d-block m-2"
//             alt="img"
//             style={{
//               maxHeight: "270px",
//               maxWidth: "100%",
//               width: "auto",
//             }}
//           />

//           <div className="card-body text-muted">
//             <CategoryNavigator
//               item={{
//                 id: product.item.category.id,
//                 title: product.item.category.title,
//               }}
//             />
//             <h5 className="card-title font-weight-bold">
//               {product.item.title}
//             </h5>
//             <p className="card-text">
//               <b>{product.item.description}</b>
//             </p>
//           </div>
//           <div className="card-footer">
//             <div className="text-center">
//               <p>
//                 <span>
//                   <h4>Price : &#8377;{product.item.price}</h4>
//                 </span>
//               </p>
//             </div>
//             <div className="d-flex justify-content-between">

//               <Link
//                 to={productDetailLink}
//                 className="btn bg-light custom-bg-text border border-dark"
//               >
//                 {/* {user.isAdminLoggedIn?"Add to Cart":"NO"} */}
//                 Add to Cart
//               </Link>



//               <p className="text-color">
//                 <b>
//                   <i>Stock :</i> {product.item.quantity}
//                 </b>
//               </p>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;

import { Link } from "react-router-dom";
import CategoryNavigator from "./CategoryNavigator";

const ProductCard = (product) => {
  const productDetailLink = `/product/${product.item.id}/category/${product.item.category.id}`;

  // Check if admin is logged in
  // let isAdminLoggedIn = sessionStorage.getItem("isAdminLoggedIn");
  // let user = JSON.parse(isAdminLoggedIn);

  return (
    <div className="col">
      <Link to={productDetailLink} style={{ textDecoration: "none" }}>
        <div className="card border-0 rounded-card card-hover product-card custom-bg h-100">
          <img
            src={"http://localhost:8080/api/product/" + product.item.imageName}
            className="card-img-top rounded mx-auto d-block m-2"
            alt="img"
            style={{
              maxHeight: "270px",
              maxWidth: "100%",
              width: "auto",
            }}
          />

          <div className="card-body text-muted">
            <CategoryNavigator
              item={{
                id: product.item.category.id,
                title: product.item.category.title,
              }}
            />
            <h5 className="card-title font-weight-bold">
              {product.item.title}
            </h5>
            <p className="card-text">
              <b>{product.item.description}</b>
            </p>
          </div>
          <div className="card-footer">
            <div className="text-center">
              <p>
                <span>
                  <h4>Price : &#8377;{product.item.price}</h4>
                </span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <Link
                to={productDetailLink}
                className="btn bg-light custom-bg-text border border-dark"
              >
                Add to Cart
              </Link>


              <p className="text-color">
                <b>
                  <i>Stock :</i> {product.item.quantity}
                </b>
              </p>

            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

