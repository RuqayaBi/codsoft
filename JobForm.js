import React, { useState } from 'react';
import { createJob } from '../api';

const JobForm = () => {
    const [job, setJob] = useState({ title: '', description: '', company: '', location: '', salary: '' });

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createJob(job);
        alert('Job posted successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" onChange={handleChange} />
            <textarea name="description" placeholder="Description" onChange={handleChange} />
            <input name="company" placeholder="Company" onChange={handleChange} />
            <input name="location" placeholder="Location" onChange={handleChange} />
            <input name="salary" placeholder="Salary" onChange={handleChange} />
            <button type="submit">Post Job</button>
        </form>
    );
};

export default JobForm;
