# Team Loom

![Team Loom Banner](./client/public/banner.png)

**A collaborative project management tool to streamline your workflow and enhance team productivity.**

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)

---

## 🌟 Introduction

Team Loom is a powerful, intuitive, and feature-rich project management application designed to help teams of all sizes organize their work, collaborate effectively, and achieve their goals faster. It provides a centralized platform to manage projects, tasks, and teams, with a focus on visual workflow and real-time updates.

This project is built with a modern tech stack, featuring a Next.js frontend and a Node.js/Express backend, ensuring a high-performance, scalable, and maintainable application.

## 🚀 Live Demonstration

You can see a live version of Team Loom deployed here:

**[https://main.d2lguap75cwei4.amplifyapp.com/](https://main.d2lguap75cwei4.amplifyapp.com/)**

Feel free to explore the features and get a feel for the application.

## ✨ Features

Team Loom comes packed with a variety of features to cover all your project management needs:

*   **Project Management:**
    *   Create, update, and delete projects.
    *   View projects in different layouts: Board, List, and Timeline.
    *   Visualize project progress and timelines.
*   **Task Management:**
    *   Create, assign, and manage tasks within projects.
    *   Organize tasks in columns (e.g., To Do, In Progress, Done).
    *   Drag-and-drop tasks between columns.
    *   Set task priorities (Urgent, High, Medium, Low).
*   **Team Collaboration:**
    *   Invite and manage team members.
    *   Assign tasks to specific team members.
    *   View team-specific tasks and workload.
*   **User Authentication:**
    *   Secure user registration and login.
    *   (Future) Role-based access control.
*   **Dashboard:**
    *   A comprehensive overview of your projects, tasks, and team activities.
*   **Search:**
    *   Quickly find projects, tasks, or users across the application.
*   **Responsive Design:**
    *   A seamless experience across all devices, from desktops to mobile phones.

## 💻 Tech Stack

This project is a monorepo with a separate client and server.

### Client (Frontend)

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [Shadcn/UI](https://ui.shadcn.com/)
*   **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
*   **UI Components:** [Radix UI](https://www.radix-ui.com/), [Recharts](https://recharts.org/)
*   **Drag & Drop:** [React DnD](https://react-dnd.github.io/react-dnd/about)
*   **Deployment:** [AWS Amplify](https://aws.amazon.com/amplify/)

### Server (Backend)

*   **Framework:** [Express.js](https://expressjs.com/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Database ORM:** [Prisma](https://www.prisma.io/)
*   **Database:** [PostgreSQL](https://www.postgresql.org/) (or any other Prisma-supported database)
*   **API:** REST API

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v18 or later recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
*   A running instance of a PostgreSQL database.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-repo/team-loom.git
    cd team-loom
    ```

2.  **Set up the server:**
    *   Navigate to the server directory:
        ```sh
        cd server
        ```
    *   Install dependencies:
        ```sh
        npm install
        ```
    *   Create a `.env` file in the `server` directory and add your database connection string:
        ```env
        DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
        ```
    *   Apply database migrations:
        ```sh
        npx prisma migrate dev
        ```
    *   Seed the database with initial data:
        ```sh
        npm run seed
        ```

3.  **Set up the client:**
    *   Navigate to the client directory from the root:
        ```sh
        cd ../client
        ```
    *   Install dependencies:
        ```sh
        npm install
        ```
    *   Create a `.env.local` file in the `client` directory and add the server API URL:
        ```env
        NEXT_PUBLIC_API_URL=http://localhost:5000
        ```

### Running the Application

1.  **Start the backend server:**
    *   In the `server` directory, run:
        ```sh
        npm run dev
        ```
    *   The server will start on `http://localhost:5000`.

2.  **Start the frontend development server:**
    *   In the `client` directory, run:
        ```sh
        npm run dev
        ```
    *   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌱 Seeding the Database

The project includes a seed script to populate the database with sample data. This is useful for development and testing.

To seed the database, run the following command in the `server` directory:
```sh
npm run seed
```
This will populate the database with users, projects, teams, and tasks. The seed data can be found in `server/prisma/seedData/`.

## 🚀 Deployment

The frontend of this application is deployed on **AWS Amplify**. The backend can be deployed on any platform that supports Node.js, such as AWS EC2, Heroku, or Vercel.

For the backend, you will need to set up your environment variables on the deployment platform.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Happy Coding!** 🚀
