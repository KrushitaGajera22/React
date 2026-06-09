import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const [error, setError] = useState("");
  const [edit, setEdit] = useState(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) {
      setError("Please fill in above both fields");
      return;
    }

    setError("");

    if (edit !== null) {
      const copyTask = [...task];

      copyTask[edit] = {
        title: title.trim(),
        details: details.trim(),
      };

      setTask(copyTask);
      setEdit(null);
    } else {
      setTask([
        ...task,
        {
          title: title.trim(),
          details: details.trim(),
        },
      ]);
    }

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);

    setTask(copyTask);

    if (edit === idx) {
      // deleted the note being edited
      setEdit(null);
      setTitle("");
      setDetails("");
      setError("");
    } else if (edit !== null && idx < edit) {
      // deleted a note before the edited note
      setEdit(edit - 1);
    }
  };

  const editNote = (idx) => {
    setTitle(task[idx].title);
    setDetails(task[idx].details);
    setEdit(idx);
  };

  const cancelEdit = () => {
    setEdit(null);
    setTitle("");
    setDetails("");
    setError("");
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
        className="flex lg:w-1/2 items-start p-10 flex-col gap-4"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 h-10 w-full font-medium y-2 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError("");
          }}
        />
        <textarea
          type="text"
          placeholder="Write Details Here"
          className="px-5 h-32 w-full py-2 font-medium items-start flex-row border-2 outline-none rounded"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
            setError("");
          }}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex gap-3 w-full">
          <button
            type="submit"
            className="flex-1 font-medium px-5 py-2 rounded bg-white active:bg-gray-300 text-black"
          >
            {edit !== null ? "Update Note" : "Add Note"}
          </button>

          {edit !== null && (
            <button
              type="button"
              onClick={cancelEdit}
              className="px-5 py-2 rounded bg-red-500 hover:bg-red-600 text-white"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
      <div className="p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 p-3 mt-5 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                onClick={() => editNote(idx)}
                className={`relative h-52 w-40 bg-cover rounded-2xl text-black py-9 px-4 cursor-pointer transition-transform
                ${
                  edit === idx
                    ? "scale-105 shadow-[0_0_20px_rgba(250,204,21,0.8)]"
                    : "hover:scale-105"
                }
                bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]`}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNote(idx);
                  }}
                  className="absolute -top-1.5 -right-1.5 z-10 bg-red-500 hover:bg-red-600 p-1 rounded-full shadow-lg cursor-pointer"
                >
                  <X size={14} color="#fff" strokeWidth={2.75} />
                </button>
                <h3 className="leading-tight text-lg font-bold line-clamp-2">
                  {elem.title}
                </h3>
                <p className="mt-4 leading-tight text-xs font-semibold text-gray-600 line-clamp-7">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
