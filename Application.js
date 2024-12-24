import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ApplicationForm = () => {
    const { jobId } = useParams(); // Get jobId from the URL
    const [application, setApplication] = useState({
        name: '',
        email: '',
        resume: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setApplication({ ...application, [name]: value });
    };

    const handleFileChange = (e) => {
        setApplication({ ...application, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('jobId', jobId);
        formData.append('name', application.name);
        formData.append('email', application.email);
        if (application.resume) {
            formData.append('resume', application.resume);
        }

        try {
            await axios.post('http://localhost:5000/api/applications', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Application submitted successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to submit the application.');
        }
    };

    return (
        <div className="application-form">
            <h2>Apply for this Job</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={application.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={application.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                />
                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
};

export default ApplicationForm;
