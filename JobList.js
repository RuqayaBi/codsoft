import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../api';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getJobs = async () => {
            const { data } = await fetchJobs();
            setJobs(data);
        };
        getJobs();
    }, []);

    return (
        <ul>
            {jobs.map((job) => (
                <li key={job._id}>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                    <p><strong>Company:</strong> {job.company}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                </li>
            ))}
        </ul>
    );
};

export default JobList;
