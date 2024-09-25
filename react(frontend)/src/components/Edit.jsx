import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Edit() {
  const location = useLocation();

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");



  useEffect(() => {
    let params = {
      id: location.state.id,
    };

    fetch("http://127.0.0.1:8000/api/viewtaskbyid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((result) => {
        setTask(result[0].task);
        setDescription(result[0].description);
        setStatus(result[0].status);
      });
  }, []);

  const handleUpdate = () => {
    let params = {
      id: location.state.id,
      task: task,
      description: description,
      status: status,
    };

    fetch("http://127.0.0.1:8000/api/viewtaskbyidandupdate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        window.location.href = "/";
      });
  };

  return (
    <>
    <Navbar/>
    <div>
  <section className="vh-100" style={{ backgroundColor: "#e5e5e" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-9 col-xl-7">
          <div className="card rounded-3">
            <div className="card-body p-4">
              <h4 className="text-center my-3 pb-3">ToDo App</h4>

              <div className="row g-3 justify-content-center mb-4 pb-2">
                <div className="col-12">
                  <div className="form-outline">
                    <input
                      type="text"
                      className="form-control"
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                      id="taskInput"
                      required
                    />
                    <label className="form-label" htmlFor="taskInput">
                      Enter a task here
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-outline">
                    <textarea
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      id="descriptionInput"
                      rows="3"
                      required
                    ></textarea>
                    <label className="form-label" htmlFor="descriptionInput">
                      About the task
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-outline">
                    <select
                      className="form-select"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      id="statusSelect"
                      required
                    >
                      <option value="" disabled>
                        Change Status
                      </option>
                      <option value="1">Completed</option>
                      <option value="0">Pending</option>
                    </select>
                    <label className="form-label" htmlFor="statusSelect">
                      Change Status
                    </label>
                  </div>
                </div>

                <div className="col-12 text-center">
                  <button
                    type="button" // Changed to button to prevent form submission
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  );
}

export default Edit;
