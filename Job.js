const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: String,
    description: String,
    company: String,
    location: String,
    salary: String,
    postedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);
