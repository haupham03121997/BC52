import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getListAnimalApi } from "../store/Animals/slice";

const AnimalList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { animalList } = useSelector((state) => state.animal);

  //items : 100, pageSize: 10
  const pages = Array.from(
    { length: Math.ceil(99 / 10) },
    (_, index) => index + 1
  );

  const handleOnChangePage = (page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    dispatch(getListAnimalApi({ page: searchParams.get("page") }));
  }, [searchParams]);

  console.log("searchParams", searchParams.get("page"));

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
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        navigate(`${item.id}`);
                      }}
                    >
                      Xem chi tiết
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          {pages.map((page) => (
            <button className="btn" onClick={() => handleOnChangePage(page)}>
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimalList;
