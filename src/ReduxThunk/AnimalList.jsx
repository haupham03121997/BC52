import React from "react";
import { useSelector } from "react-redux";

const AnimalList = () => {
  const { animalList } = useSelector((state) => state.animal);
  console.log("animalList", animalList);
  return (
    <div className="mt-5">
      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Type</th>
              <th scope="col">Descriptions</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {animalList.map((item) => {
              return (
                <tr className="">
                  <td scope="row">{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.image} width={100} height={100} />
                  </td>
                  <td>{item.type}</td>
                  <td>{item.descriptions}</td>
                  <td>
                    <button className="btn btn-danger ">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <button className="btn btn-success ms-3">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnimalList;
