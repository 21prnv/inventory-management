# Inventory Management Web App

This is a web-based inventory management system built using **Next.js**, **Node.js**, **PostgreSQL**, **Tailwind CSS**, **Redux**, and **TypeScript**. It allows users to manage inventory, track stock levels, and view detailed statistics and graphs of items in real-time. The app is hosted on **AWS EC2**, with data stored in **RDS** and assets served through **S3**.

## Live Demo

Check out the live application here: [Live Link](https://main.dsxac2zavypgo.amplifyapp.com/)

## Video Demo

Watch a screen recording of the application here:[Video](https://res.cloudinary.com/dqi42qbcr/image/upload/v1726637582/jmz5f78mezoamfalykfm.gif)

## Features

- **Real-time inventory tracking**: View item quantities and stock updates in real time.
- **Graphical representation**: Get insights on inventory trends with dynamic graphs and charts.
- **Responsive design**: The application is fully responsive, providing a great user experience on both desktop and mobile.
- **State management with Redux**: Redux is used for managing the global state across the app, ensuring efficient data flow and consistent state handling.
- **AWS Integration**: Leveraging AWS services like EC2, RDS, and S3 for hosting, database management, and file storage.
- **PostgreSQL**: Robust relational database to handle and manage inventory data efficiently.
- **TypeScript Support**: Codebase is written in TypeScript, providing type safety and better developer experience.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **State Management**: Redux
- **Backend**: Node.js, PostgreSQL
- **Database**: AWS RDS (PostgreSQL)
- **Hosting**: AWS EC2
- **Storage**: AWS S3 for asset storage
- **TypeScript**: For strict typing and code maintainability

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env.local` file and add your environment variables:
    ```env
    DATABASE_URL=your-postgres-db-url
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

Once installed, you can:

- Add, update, and delete inventory items.
- View real-time stock levels and update them as necessary.
- Analyze item trends through graphs and charts.


