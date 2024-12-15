"use client";
import { useState } from "react";

const TicketForm = () => {
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware problem",
  };
  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          required
          value={formData.title}
        />
        <label htmlFor="description">Description: </label>
        <textarea
          name="description"
          onChange={handleChange}
          required
          value={formData.description}
          rows={6}
        />
        <label htmlFor="category">Category</label>
        <select name="category" id="category">
          <option value="Hardware problem">Hardware problem</option>
          <option value="Software problem">Software problem</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="priority">Priority: </label>
        <input
          type="number"
          name="priority"
          onChange={handleChange}
          required
          value={formData.priority}
        />
        <label htmlFor="progress">Progress</label>
        <input
          type="range"
          name="progress"
          id="progress"
          onChange={handleChange}
          value={formData.progress}
          min={0}
          max={100}
        />
        <label htmlFor="status">Status: </label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input type="submit" className="btn" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
