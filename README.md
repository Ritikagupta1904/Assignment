# Assignment


# EmployWise User Management Application

This is a React-based user management application that integrates with the Reqres API. The app provides functionalities for user authentication, listing users with pagination, and performing operations like editing, deleting, and updating user data.

The project has been **deployed on Netlify** and can be accessed at: 
[Live Demo](https://playful-stroopwafel-177593.netlify.app)

---

## Features

### Level 1: Authentication Screen
- Users can log in with credentials:
  - **Email**: eve.holt@reqres.in
  - **Password**: cityslicka
- Upon successful login, a token is stored in local storage, and the user is redirected to the Users List page.

### Level 2: List All Users
- Fetch and display a paginated list of users from the Reqres API.
- Each user displays the first name, last name, and avatar.
- Implemented pagination for smooth navigation through user pages.

### Level 3: Edit, Delete, and Update Users
- **Edit**: Update user details like first name, last name, and email.
- **Delete**: Remove a user from the list.
- API endpoints are used to reflect changes.
- Success and error messages are displayed appropriately.

### Bonus Features:
- **React Router** for navigation between pages.
- Client-side search and filtering for users.
- Responsive design using **Bootstrap** for an enhanced user experience.

---

## Tech Stack & Libraries

- **React**: Front-end framework.
- **React Router**: For navigation between pages (Login, Users List, Edit User).
- **Axios**: To make HTTP requests to the Reqres API.
- **Bootstrap**: For responsive and user-friendly UI design.
- **Local Storage**: For persisting the login token.

---

## Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v14 or above)
- **npm** or **yarn** (Node Package Manager)

---

## Installation & Setup
Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone <YOUR_GITHUB_REPO_LINK>
   cd <project-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   Run the following command to start the project in development mode:
   ```bash
   npm run dev
   ```
   The app will be accessible at `http://localhost:5173/` (default Vite development port).

4. **Build for Production** (optional):
   ```bash
   npm run build
   ```

---

## API Endpoints
The application interacts with the Reqres API:

1. **Login**:
   - Endpoint: `POST https://reqres.in/api/login`
   - Body:
     ```json
     {
       "email": "eve.holt@reqres.in",
       "password": "cityslicka"
     }
     ```

2. **Get Users**:
   - Endpoint: `GET https://reqres.in/api/users?page=1`

3. **Update User**:
   - Endpoint: `PUT https://reqres.in/api/users/{id}`

4. **Delete User**:
   - Endpoint: `DELETE https://reqres.in/api/users/{id}`

---

## Folder Structure
```
project-folder/
├── public/                  # Public assets
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/              # React pages (Login, Users List, Edit User)
│   ├── services/           # API service (Axios calls)
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   └── styles/             # Custom CSS or Bootstrap overrides
├── .gitignore              # Ignored files for Git
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

---

## Deployed Application
The project has been deployed on **Netlify** and can be accessed at:
[https://playful-stroopwafel-177593.netlify.app](https://playful-stroopwafel-177593.netlify.app)

---

## Assumptions
- The application assumes the Reqres API responds as per its documentation.
- Only basic form validation is implemented.
- The token is stored in local storage for simplicity.

---

## Future Improvements
- Add real authentication with dynamic credentials.
- Enhance form validation.
- Implement a more robust state management solution (e.g., Redux).

---

## Author
- **Ritika Gupta**
- Developed as part of the EmployWise Assignment

---

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

Thank you for exploring the project! 😊
