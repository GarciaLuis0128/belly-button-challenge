# Belly Button Biodiversity Dashboard

![Belly Button Biodiversity Dashboard](screenshots/dashboard.png)

This interactive dashboard allows users to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. It displays top 10 operational taxonomic units (OTUs) found in an individual, a bubble chart showing each sample, and sample metadata. Users can select different samples from a dropdown menu to update all plots and metadata simultaneously.

## Demo

You can view a live demo of the dashboard [here](https://garcialuis0128.github.io/belly-button-challenge/).

## Features

- **Horizontal Bar Chart**: Displays the top 10 OTUs found in an individual, with sample values as the bar lengths, OTU IDs as the labels, and OTU labels as hover text.
- **Bubble Chart**: Shows each sample, with OTU IDs as the x-values, sample values as the y-values, sample values as marker sizes, OTU IDs as marker colors, and OTU labels as text values.
- **Sample Metadata**: Displays demographic information for the selected sample.
- **Dropdown Menu**: Allows users to select different samples to update all plots and metadata.

## Technologies Used

- **D3.js**: Used for data visualization.
- **Plotly.js**: Used for creating interactive plots.
- **HTML/CSS**: Used for layout and styling.
- **JavaScript**: Used for scripting and interactivity.

## Installation

To run this project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/garcialuis0128/belly-button-challenge.git
