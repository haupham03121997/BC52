import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnimalApi } from "../store/Animals/slice";

const AnimalForm = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    name: "",
    image: "",
    type: "",
    descriptions: "",
  });

  const handleOnChange = (event) => {
    // name: event.target.name
    // value: event.target.value
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("formValue", formValue);
          dispatch(addAnimalApi(formValue));
        }}
      >
        <div className="row">
          <div className="col-6 mb-3">
            <label className="mb-2">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={formValue.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-6 mb-3">
            <label className="mb-2">Type</label>
            <input
              type="text"
              className="form-control"
              name="type"
              id="type"
              value={formValue.type}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-6 mb-3">
            <label className="mb-2">Image</label>
            <input
              type="text"
              className="form-control"
              name="image"
              id="image"
              value={formValue.image}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-6 mb-3">
            <label className="mb-2">Descriptions</label>
            <input
              type="text"
              className="form-control"
              name="descriptions"
              id="descriptions"
              value={formValue.descriptions}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-12 text-end">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
            <button type="submit" className="btn btn-success ms-3">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AnimalForm;
