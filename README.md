# Visionoir — a blindfold chess training app

## Summary of application
Visionoir is a tool designed to improve board awareness by challenging users to click on specific squares without seeing the board coordinates. The game consists of ten rounds, where the goal is to be as accurate as possible while a timer runs, testing both precision and speed. This engaging training tool helps players sharpen their spatial memory and focus under time pressure.

## How to run
Follow these steps below to run the application on your computer.

### Prerequisites
Before you begin, ensure you have the following installed on your computer:
- Node.js (v16 or higher): [Download Node.js](https://nodejs.org/en)

### Project Structure
The project is divided into two parts:
- Frontend: The user interface built with Vite and React.
- Backend: The API server built with Node.js and Express.

### Steps to Run the Application
1. Clone the Repository

  First, clone the repository to your local machine using Git:

  ```bash
  git clone https://github.com/kevingarciamartin/blindfold-chess-trainer.git
  ```

  Navigate into the project folder:

  ```bash
  cd blindfold-chess-trainer
  ```

2. Install Dependencies

  Install dependencies for both the frontend and backend from the root directory. 

  Run the following command:

  ```bash
  npm run install:all
  ```

  This script installs dependencies for both the frontend and backend folders.

  Alternatively, you can manually install dependencies for each part:

  ```bash
  # Install backend dependencies
  cd backend
  npm install

  # Install frontend dependencies
  cd ../frontend
  npm install
  ```

3. Start the Application

  From the root directory, use the following command to start both the backend and frontend simultaneously:
  
  ```bash
  npm run dev
  ```
  
  This will:

  - Start the backend server on http://localhost:4000.

  - Start the frontend development server on http://localhost:5173.

  Alternatively, you can start them individually:
  
  ```bash
  # Start backend server
  cd backend
  npm run dev

  # Start frontend server in a separate terminal
  cd ../frontend
  npm run dev
  ```

4. Open in Browser

  Once both servers are running:

  - Open your browser and navigate to http://localhost:5173 to access the application.


## Accessability & SEO
To ensure that my application is accessible, I have followed best practices for web accessibility. This includes using semantic HTML elements to provide structure and meaning to the content. I have also ensured sufficient color contrast for readability, and provided keyboard navigation support so users can interact with the application without a mouse.

I've improved SEO by adding a meta description element which provides a summary of the application's content that search engines include in search results. A high-quality, unique meta description makes my page appear more relevant and can increase my search traffic.

## Tracking
I have implemented Google Analytics tracking to gain insights into how users interact with the features and to identify opportunities for improvement. The tracking only collects anonymous usage data, such as page views, number of unique users and number of active users, which helps me optimize the user experience. I do not collect any personally identifiable information, and I am mindful of user privacy in all analytics practices.

## Security
