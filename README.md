# AutoSync Form Submission

AutoSync Form Submission is a MERN stack application that allows users to fill out a form and handles offline data storage. When the user submits the form while offline, the data is saved locally and automatically sent to the backend when the internet connection is restored.

## Features

- Form submission with name and email fields.
- Offline data storage using local storage.
- Automatic data synchronization with the backend when the internet connection is restored.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Other**: Local Storage, Fetch API

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/autosync-form-submission.git
    cd autosync-form-submission
    ```

2. Install dependencies for both frontend and backend:

    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

### Setup

1. Create a `.env` file in the `backend` directory with your MongoDB URI:

    ```env
    MONGODB_URI=your_mongodb_uri
    ```

### Running the Application

1. Start the backend server:

    ```bash
    cd backend
    node server.js
    ```

2. Start the React application:

    ```bash
    cd frontend
    npm start
    ```

### Testing Offline Feature

1. Open your React application in a web browser.
2. Open Developer Tools (usually by pressing `F12` or right-clicking on the page and selecting "Inspect").
3. Go to the "Network" tab.
4. In the "Network" tab, look for an option to simulate offline mode. This is typically found in the online/offline dropdown menu. Select "Offline" to simulate an offline state.
   - In Chrome, there's a dropdown labeled "Online" which you can switch to "Offline".
   - In Firefox, you can do this by clicking the settings icon (three dots) in the Network tab and selecting "Offline".
5. Fill out the form and submit it. An alert should appear indicating that the data is saved locally.
6. Switch the browser back to "Online" mode using the same dropdown in the Network tab. The application should automatically detect that it is online and should attempt to send the saved data to the backend.

### Project Structure

```plaintext
autosync-form-submission/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── FormComponent.js
│   │   └── index.js
│   ├── package.json
│   └── .env
└── README.md
