d3.json('samples.json').then(({names}) => {

    names.forEach(id => {
        d3.select("select").append("option").text(id);
    });

    optionChanged(names[0])
});

const optionChanged = id => {
    console.log(id)
}

// Use D3.js to read in samples.json from the URL
d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then(data => {
    // Once the data is loaded, you can access it here
    console.log(data);
}).catch(error => console.error("Error loading data:", error));

// Use D3.js to read in samples.json from the URL
d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then(data => {
    // Function to create horizontal bar chart
    function createBarChart(sample) {
        const top10Values = sample.sample_values.slice(0, 10).reverse();
        const top10Ids = sample.otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);
        const top10Labels = sample.otu_labels.slice(0, 10).reverse();
        
        const trace = {
            x: top10Values,
            y: top10Ids,
            text: top10Labels,
            type: "bar",
            orientation: "h"
        };

        const layout = {
            title: "Top 10 OTUs Found",
            xaxis: { title: "Sample Values" }
        };

        Plotly.newPlot("bar", [trace], layout);
    }

    // Function to create bubble chart
    function createBubbleChart(sample) {
        const trace = {
            x: sample.otu_ids,
            y: sample.sample_values,
            text: sample.otu_labels,
            mode: 'markers',
            marker: {
                size: sample.sample_values,
                color: sample.otu_ids,
                colorscale: 'Earth',
                opacity: 0.7
            }
        };

        const layout = {
            title: 'OTU Bubble Chart',
            xaxis: { title: 'OTU ID' },
            yaxis: { title: 'Sample Values' }
        };

        Plotly.newPlot('bubble', [trace], layout);
    }

    // Function to display sample metadata
    function displayMetadata(metadata) {
        const metadataDiv = d3.select("#sample-metadata");
        metadataDiv.html(""); // Clear existing data
        Object.entries(metadata).forEach(([key, value]) => {
            metadataDiv.append("p").text(`${key}: ${value}`);
        });
    }

    // Function to update all charts and metadata based on selected sample
    function updateDashboard(selectedID) {
        const selectedSample = data.samples.find(sample => sample.id === selectedID);
        const selectedMetadata = data.metadata.find(metadata => metadata.id === parseInt(selectedID));
        createBarChart(selectedSample);
        createBubbleChart(selectedSample);
        displayMetadata(selectedMetadata);
    }

    // Populate dropdown menu with sample IDs
    const dropdown = d3.select("#selDataset");
    data.names.forEach(sample => {
        dropdown.append("option").attr("value", sample).text(sample);
    });

    // Initialize dashboard with first sample
    updateDashboard(data.names[0]);

    // Event listener for dropdown change
    dropdown.on("change", function() {
        const selectedID = this.value;
        updateDashboard(selectedID);
    });
}).catch(error => console.error("Error loading data:", error));
