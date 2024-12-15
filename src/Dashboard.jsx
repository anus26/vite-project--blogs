import React, { useRef } from 'react'

const Dashboard = () => {
  const title = useRef();
  const description = useRef();

  const Submit = async (event) => {
    event.preventDefault();

    const FormData = {
      title: title.current.value,
      description: description.current.value,
    };

    try {
      const response = await fetch("http://localhost:3000/api/v1/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Registration failed");
      }

      const data = await response.json();
      console.log("Added successfully", data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="px-3">
      <h1 className="flex justify-center">Dashboard</h1>
      <div className="flex justify-center items-center px-5 py-12 space-x-6">
        <form onSubmit={Submit} className="flex flex-col gap-9">
          <label>
            <input
              type="text"
              placeholder="Title"
              ref={title}
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </label>
          <label>
            <textarea
              placeholder="Description"
              ref={description}
              className="textarea textarea-primary w-full max-w-xs"
            ></textarea>
          </label>
          <button className="btn btn-active btn-neutral text-center" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
