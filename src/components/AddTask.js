import React, { useState } from "react";
import "./AddTask.css";

const AddTask = ({ tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);

  function handleChange(event) {
    setTaskValue(event.target.value);
  }

  function handleReset() {
    setTaskValue("");
    setProgress(false);
  }

  function handleForm(event) {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10),
      name: taskValue,
      completed: Boolean(progress)
    };
    console.log(task);
    setTasks([...tasks, task]);
  }

  return (
    <section className="addtask">
      <form onSubmit={handleForm}>
        <input
          onChange={handleChange}
          type="text"
          value={taskValue}
          name="task"
          id="task"
          placeholder="Enter about task"
          maxLength={40}
          autoComplete="off"
        />
        <select
          onChange={(event) => setProgress(event.target.value)}
          value={progress}
        >
          <option value="false">pending</option>
          <option value="true">completed</option>
        </select>
        <button type="Submit">Submit</button>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
      </form>
      <p>{taskValue}</p>
    </section>
  );
};

export default AddTask;

// import React, { useState } from "react";
// import "./AddTask.css";

// const AddTask = (tasks, setTasks) => {

//   const [taskValue, setTaskValue] = useState("");
//   const [progress, setProgress] = useState(false);

//   function handleChange(event) {
//     // console.log(event.target.value);
//     setTaskValue(event.target.value);
//   }

//   function handleReset() {
//     // console.log(event.target.value);
//     setTaskValue("");
//     setProgress(false);
//   }
//   function handleform(event) {
//     event.preventDefault();
//     const task = {
//       id: Math.floor(Math.random() * 10),
//       name: taskValue,
//       completed: Boolean(progress)
//     };
//     console.log(task);
//     setTasks([...tasks, task])
//     // console.log(task);
//   }

//   return (
//     <section className="addtask">
//       <form onSubmit={handleform}>
//         {/* <label htmlFor="task">Task Name:</label> */}
//         <input
//           onChange={handleChange}
//           type="text"
//           value={taskValue}
//           name="task"
//           id="task"
//           placeholder="Enter about task"
//           maxLength={40}
//           autoComplete="off"
//         />
//         <select
//           onChange={(event) => setProgress(event.target.value)}
//           value={progress}
//         >
//           <option value="false">pending</option>
//           <option value="true">completed</option>
//         </select>
//         <button type="Submit">Submit</button>
//         <span onClick={handleReset} className="reset">
//           Reset
//         </span>
//       </form>
//       <p>{taskValue}</p>
//       {/* <p>lenght : {taskValue.length}</p> */}
//     </section>
//   );
// };

// export default AddTask;
