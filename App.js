import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<JobList />} />
                <Route path="/post-job" element={<JobForm />} />
            </Routes>
        </Router>
    );
};

export default App;
