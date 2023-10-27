// rafc
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { btFormActions } from "../store/BTForm/slice";

export const ProductForm = () => {
  const [formValue, setFormValue] = useState({
    id: "",
    image: "",
    name: "",
    productType: "",
    price: "",
    description: "",
  });

  const [formError, setFormError] = useState({
    id: "",
    image: "",
    name: "",
    productType: "",
    price: "",
    description: "",
  });

  const dispatch = useDispatch();

  const { productEdit } = useSelector((state) => state.btForm);
  console.log("productEdit: ", productEdit);

  console.log("formValue: ", formValue);

  // const handleFormValue = (ev, name) => {
  //     setFormValue({
  //         ...formValue,
  //         [name]: ev.target.value,
  //     })
  // }

  const validate = (name, value) => {
    switch (name) {
      case "id":
        if (value.trim() === "") {
          return "Vui lòng nhập thông tin";
        } else {
          return "";
        }

      case "name":
        if (value === "") {
          return "Vui lòng nhập thông tin";
        } else {
          return "";
        }

      case "image":
        if (value.trim() === "") {
          return "Vui lòng nhập thông tin";
        } else if (
          !value.match(
            new RegExp("^https?://[a-zA-Z0-9.-]+.[a-z]{2,}(/[^]*)?$")
          )
        ) {
          return "Vui lòng nhập đúng đường dẫn hình ảnh";
        } else {
          return "";
        }

      case "price":
        if (value === "") {
          return "Vui lòng nhập thông tin";
        } else if (!value.match(new RegExp("^[0-9]*$"))) {
          return "Giá tiền không hợp lệ";
        } else {
          return "";
        }

      case "productType":
        if (value === "") {
          return "Vui lòng nhập thông tin";
        } else {
          return "";
        }

      case "description":
        if (value === "") {
          return "Vui lòng nhập thông tin";
        } else {
          return "";
        }

      default:
        return "";
    }
  };

  // currying function
  const handleFormValue = (name) => (ev) => {
    //  Kiểm tra đầu vào dữ liệu (validate)
    // name : id , name , image, price , productType, description
    // if (ev.target.value === "") {
    //   setFormError({ ...formError, [name]: "Vui lòng nhập thông tin" });
    // }

    console.log("ev", ev);
    setFormError({ ...formError, [name]: validate(name, ev.target.value) });

    setFormValue({
      ...formValue,
      [name]: ev.target.value,
    });
  };

  useEffect(() => {
    if (productEdit) {
      // console.log('productEdit: ', productEdit)
      // set error về giá trị ban đầu
      setFormValue(productEdit);
    }
  }, [productEdit]);

  // button ở trong form => type = 'submit
  // => onSubmit ở form
  return (
    <div>
      <form
        className="row"
        id="btForm"
        onSubmit={(ev) => {
          // ngăn sự kiện reload của browser

          ev.preventDefault();
          const validationError = {};
          Object.keys(formValue).forEach((name) => {
            // key : id | name | price | image | productType
            const error = validate(name, formValue[name]); // Vui lòng nhập thông tin || ""
            if (error && error.length > 0) {
              validationError[name] = error;
            }
          });

          /**
           * a = {name : "123"}
           * b = {...a, age: 12} // { name : "123" , age : 12}
           * b[gender] = "20" // { name : "123" , age : 12 , gender: "20" }
           *
           *
           */

          if (Object.keys(validationError).length > 0) {
            setFormError({ ...validationError });
            return;
          }

          if (productEdit) {
            // console.log('ev: ', ev)
            // dispatch action Edit
            dispatch(btFormActions.editProduct(formValue));
          } else {
            dispatch(btFormActions.addProduct(formValue));
          }

          setFormValue({
            id: "",
            image: "",
            name: "",
            productType: "",
            price: "",
            description: "",
          });
        }}
      >
        <h2 className="p-3 bg-dark text-warning">Product Info</h2>
        <div className="col-6">
          <div>
            <p>ID</p>
            <input
              id="id"
              type="text"
              className="form-control"
              // onChange={(event) => {
              //     // console.log('e: ', event.target.value)
              //     setFormValue({
              //         ...formValue,
              //         id: event.target.value,
              //     })
              // }}
              onChange={handleFormValue("id")}
              onBlur={handleFormValue("id")}
              // value={productEdit?.id}
              disabled={formValue.id === productEdit?.id}
              value={formValue.id}
            />
            {formError.id && (
              <p>
                <small className="text-danger">{formError.id}</small>
              </p>
            )}
          </div>
          <div className="mt-3">
            <p>NAME</p>
            <input
              type="text"
              className="form-control"
              // onChange={(ev) => {
              //     setFormValue({
              //         ...formValue,
              //         name: ev.target.value,
              //     })
              // }}
              onChange={handleFormValue("name")}
              // value={productEdit?.name}
              value={formValue.name}
            />
            {formError.name && (
              <p>
                <small className="text-danger">{formError.name}</small>
              </p>
            )}
          </div>
          <div className="mt-3">
            <p>PRICE</p>
            <input
              type="text"
              className="form-control"
              onChange={handleFormValue("price")}
              value={formValue.price}
            />
            {formError.price && (
              <p>
                <small className="text-danger">{formError.price}</small>
              </p>
            )}
          </div>
        </div>
        <div className="col-6">
          <div>
            <p>IMAGE</p>
            <input
              type="text"
              className="form-control"
              onChange={handleFormValue("image")}
              value={formValue.image}
            />
            {formError.image && (
              <p>
                <small className="text-danger">{formError.image}</small>
              </p>
            )}
          </div>
          <div className="mt-3">
            <p>PRODUCT TYPE</p>
            <input
              type="text"
              className="form-control"
              onChange={handleFormValue("productType")}
              value={formValue.productType}
            />
            {formError.productType && (
              <p>
                <small className="text-danger">{formError.productType}</small>
              </p>
            )}
          </div>
          <div className="mt-3">
            <p>DESCRIPTION</p>
            <input
              type="text"
              className="form-control"
              onChange={handleFormValue("description")}
              value={formValue.description}
            />
            {formError.description && (
              <p>
                <small className="text-danger">{formError.description}</small>
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          {productEdit ? (
            <button className="btn btn-info">Update</button>
          ) : (
            <button className="btn btn-success">Create</button>
          )}
        </div>
      </form>
      {/* <button form="btForm">Submit</button> */}
    </div>
  );
};
