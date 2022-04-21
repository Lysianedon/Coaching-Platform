
import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function CreateTodo() {
    const [data, setData] = useState({  content: "" });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target._id]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios
            .post("http://localhost:8000//admin/users", { withCredentials: true }, data)
            .then((res) => {
                setData({ content: "" });
                console.log(res.data.content);
            })
            .catch((err) => {
                console.log("Error couldn't create TODO");
                console.log(err.message);
            });
    }

    return (
        <section className="container">
            <Link to="/">
                <button type="button" className="button button-back">
                    back
                </button>
            </Link>

            <section className="contents">
                <form
                    onSubmit={handleSubmit}
                    className="form-container"
                    // noValidate
                >
                    <label className="label" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        className="input"
                    />
                    <label className="label" htmlFor="description">
                        Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        value={data.content}
                        onChange={handleChange}
                        className="input"
                    />
                    <button type="submit" className="button">
                        create todo
                    </button>
                </form>
            </section>
        </section>
    );
}

export default CreateTodo;