
import { useState } from "react";
import axios from "axios";

function UpdateTodo({ _id, handleClose, handleUpdate }) {
    const [data, setData] = useState({  content: "" });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target._id]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log({ _id }, { data });

        axios
            .put("http://localhost:8000/user/list",{ withCredentials: true } , data)
            .then((res) => {
                setData({ content: "" });
                console.log(res.data.content);
            })
            .catch((err) => {
                console.log("Failed to update todo");
                console.log(err.message);
            });
    }

    return (
        <form
            className="form-container"
            onSubmit={(e) => {
                handleSubmit(e);
                handleUpdate();
                handleClose();
            }}
        >
            <label htmlFor="title" className="label">
                Title
            </label>
            <input
                type="text"
                name="title"
                className="input"
                onChange={handleChange}
            />
            <label htmlFor="description" className="label">
                Description
            </label>
            <input
                type="text"
                name="description"
                className="input"
                onChange={handleChange}
            />
            <button type="submit" className="button">
                Submit
            </button>
        </form>
    );
}

export default UpdateTodo;