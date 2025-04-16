# Visionoir — a blindfold chess training app

## Summary of application
Visionoir is a chess tool designed to improve board awareness by challenging users to click on specific squares without seeing the board coordinates. The game consists of ten rounds, where the goal is to be as accurate as possible while a timer runs, testing both precision and speed. This engaging training tool helps players sharpen their spatial memory and focus under time pressure.

## Table of Content
1. [How to Run](#how-to-run)
    - [Prerequisites](#prerequisites)
    - [Project Structure](#project-structure)
    - [Steps to Run the Application](#steps-to-run-the-application)
2. [Accessability & SEO](#accessability--seo)
3. [Tracking](#tracking)
4. [Security](#security)

## How to Run
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
To ensure that my application is accessible, I have followed best practices for web accessibility. This includes using semantic HTML elements to provide structure and meaning to the content. I have also ensured sufficient color contrast for readability, implemented proper ARIA roles and attributes where necessary, and provided keyboard navigation support so users can interact with the application without a mouse.

I've improved SEO by adding a meta description element which provides a summary of the application's content that search engines include in search results. A high-quality, unique meta description makes my page appear more relevant and can increase my search traffic.

## Tracking
I have implemented Google Analytics tracking to gain insights into how users interact with the features and to identify opportunities for improvement. The tracking only collects anonymous usage data, such as page views, number of unique users and number of active users, which helps me optimize the user experience. I do not collect any personally identifiable information, and I am mindful of user privacy in all analytics practices.

## Security
Web applications are commonly exposed to security threats such as Cross-Site Scripting (XSS) and Distributed Denial of Service (DDoS) attacks. XSS can occur when attackers inject malicious scripts through user input fields, potentially compromising user data or the integrity of the application. DDoS attacks, on the other hand, attempt to overwhelm the server with excessive requests, making the application slow or unavailable to legitimate users. In this project, I am particularly mindful of XSS, since users can submit their names as highscores. To mitigate this risk, I use the validator library in my API controller to escape all user input before it is stored in the database, ensuring that any potentially harmful code is neutralized and cannot be executed when displayed. While DDoS attacks are more challenging to prevent at the application level, being aware of their impact is important for future scaling and security planning.
