# CloudCost Navigator

This application is a capacity calculator for Aruba Cloud services. It allows users to estimate costs for various cloud resources including compute, storage, networking, and container services.

CloudCost Navigator is an intuitive web application that allows users to plan and activate Aruba Cloud resources, staying within their desired budget, with a simple click.

CloudCost Navigator is designed to transform the way businesses and developers manage cloud resources. Leveraging an integrated cost analysis from the Aruba Cloud catalog, it allows users to explore different combinations of resources such as compute, networking, and storage, evaluating the most economical and efficient solution. The platform offers a user-friendly interface that includes a dynamic cost calculator and advanced configuration options to customize resources based on specific needs. Thanks to direct integration with the Aruba Cloud APIs, resource activation is quick and secure, optimizing time and resources.

## Features

- Interactive UI for selecting cloud resources
- Real-time cost calculation
- Support for different billing periods (hourly, monthly, yearly, 3-year)
- Detailed breakdown of costs per resource type
- Reset functionality for individual resource types and all selections

## Installation

1. Clone the repository
2. Navigate to the project directory: cd aruba-cloud-calculator
3. Install the dependencies: npm install
4. Run the development server: npm run dev
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Demo

https://youtu.be/YkGTGkea3ss

## How It Works

The application is built using Next.js and React, with Tailwind CSS for styling. Here's a breakdown of the main components:

1. `capacity-calculator.tsx`: This is the main component that renders the calculator interface. It manages the state for selected resources and calculates the costs.

2. UI Components: The application uses custom UI components built with Radix UI primitives and styled with Tailwind CSS. These components include Button, Card, Input, Label, Select, and Tabs.

3. Catalog Data: The application uses a predefined catalog of cloud resources (`catalogData`) that includes details about various compute instances, storage options, networking resources, and container services.

4. Cost Calculation: When a user selects resources and clicks the "Calculate Cost" button, the application calculates the cost based on the selected resources and billing period. It provides a breakdown of costs per resource type and a total cost.

5. Reset Functionality: Users can reset their selections for individual resource types or all selections at once using the reset buttons.

## Customization

To add or modify the available resources, you can update the `catalogData` object in the `capacity-calculator.tsx` file. Each resource should follow the structure defined in the `Resource` type.
