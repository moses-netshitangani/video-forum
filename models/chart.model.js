const mongoose = require('mongoose');

// the chart schema
const chartSchema = new mongoose.Schema(
    {
        stats: {type: Array, required: true},
    },
    {
        timestamps: true
    });

chartSchema.set('collection', 'stats');
const Chart = mongoose.model('Chart', chartSchema);

module.exports = Chart;