import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [viewtask, setViewTask] = useState([]);
  const [ refresh, setRefresh ] = useState(0);
  console.log(viewtask, "viewtask");

  const handleTask = () => {
    let params = {
      task: task,
      description: description,
    };
    fetch("http://127.0.0.1:8000/api/task", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        window.location.reload();
      });
  };

  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/viewtask")
      .then((res) => res.json())
      .then((result) => {
        console.log(result[0].created_at);
        let date = new Date(result[0].created_at).toLocaleDateString();

        console.log(date);

        // console.log();

        setViewTask(result);
      });
  }, [refresh]);

  const handleDelete = (id) => {
    fetch("http://127.0.0.1:8000/api/deletetask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((result) => {
        setRefresh(refresh + 1);
      });
  };

  return (
    <div>
 
      <Navbar/>
      <section className="vh-100" style={{ backgroundColor: "#e5e5e" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
        
            <div className="col-md-7">
              <div className="card rounded-3" style={{ width: "100%" }}>
                <div className="card-body p-4">
                  <span className="my-3 pb-3 fs-3 fw-bold">ToDo App</span>
                  <div className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                    <div className="col-12">
                      <div data-mdb-input-init className="form-outline">
                        <input
                          type="text"
                          id="form1"
                          className="form-control"
                          onChange={(e) => {
                            setTask(e.target.value);
                          }}
                        />
                        <label className="form-label" htmlFor="form1">
                          Enter a task here
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div data-mdb-input-init className="form-outline">
                        <textarea
                          type="text"
                          id="form1"
                          className="form-control"
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                        ></textarea>
                        <label className="form-label" htmlFor="form1">
                          About the task
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-primary"
                        onClick={handleTask}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <table className="table mb-4 table-striped table-danger">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Task</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {viewtask.map((item, index) => (
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{item.task}</td>
                          <td>{item.description}</td>
                          <td>{item.status == 0 ? "Pending" : "Completed"}</td>
                          <td>
                            {moment(
                              item.created_at,
                              "YYYY-MM-DD hh:mm:ss"
                            ).format("MM-DD-YYYY")}
                          </td>
                          <td>
                            <Link
                              to="/edit"
                              className="btn btn-success btn-sm"
                              state={{ id: item.id }}
                            >
                              <i className="fa-regular fa-pen-to-square"></i>
                            </Link>
                            &nbsp;
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDelete(item.id)}
                            >
                              <i className="fa-solid fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

           
            <div className="col-md-5">
              <div className="card rounded-3" style={{ width: "100%",backgroundColor:"#ffc2d1" }}>
                <div className="card-body p-4">
                    
                  <span className="text-center my-3 pb-3 fs-3 fw-bold">
                    ToDo Status
                  </span>
                 
                  <div className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                    <div className="col-12">

                        <div className="row mt-3">
                            <div className="col-4"><h5>
                        Summary:{" "}
                        
                      </h5></div>
                            <div className="col-5">{viewtask.filter((item) => item.status == 1).length}/
                            {viewtask.length} todos Completed</div>
                        </div>
                      

                      <div className="row">
                        <div className="col">
                          <h5 className="fw-bold">Pending</h5>
                        </div>

                        <div className="col">
                          
                        </div>
                        <div className="row">
                            <div className="col-4">
                            {viewtask
                            .filter((item) => item.status == 0)
                            .map((item, index) => (
                              <div
                                key={index}
                                className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
                              >
                                <div className="col-12">
                                  <span className="fs-5">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      checked={item.status == 1}
                                    />
                                    {item.task}
                                  </span>
                                </div>
                              </div>
                            ))}
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-5">
                            <h5 className="fw-bold">Completed</h5>
                            </div>
                        </div>

                        <div className="row ms-2">
                            <div className="col-3">
                            {viewtask
                            .filter((item) => item.status == 1)
                            .map((item, index) => (
                              <div
                                key={index}
                                className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
                              >
                                <div className="col-12">
                                  <span className="fs-5">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      checked={item.status == 1}
                                    />
                                    {item.task}
                                  </span>
                                </div>
                              </div>
                            ))}
                            </div>
                        </div>
                        <div className="col"></div>
                      </div>



                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* new code */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
