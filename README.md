# Financial Dashboard

A personal and family wealth management application designed to track, analyze, and visualize assets, liabilities, and family relationships in one unified platform.

## Features
* **User Authentication**: Secure user registration and login with JWT-based cookies.
* **Family Tree Visualizer**: Visual representation of family member relationships using interactive graphs.
* **Asset Tracking**: Register and manage various assets with details like purchase value, current value, and annual yield.
* **Liability Tracking**: Monitor debts, outstanding balances, and monthly payments.
* **Dashboard Overview**: Financial breakdowns and visual charts for quick analysis of total wealth, asset distribution, and liabilities.

---

## Tech Stack

### Frontend (UI)
* **Core Framework**: React 19 (built with Vite)
* **Routing**: React Router DOM (v7)
* **Data Visualization**: Chart.js, React-Chartjs-2, React D3 Tree, React Force Graph
* **HTTP Client**: Axios & js-cookie
* **Styling & Icons**: Lucide React & Tabler Icons

### Backend
* **Runtime & Framework**: Node.js & Express (v5)
* **Database ORM**: Prisma ORM
* **Database**: PostgreSQL
* **Authentication**: bcrypt (password hashing) & JSON Web Tokens (JWT)
* **Language Support**: TypeScript (compilation/execution via `tsx` & `nodemon`)

---

## Database Schema (Prisma)
The database structure consists of the following key models:
* **User**: Registered users who manage their family's dashboard.
* **FamilyMember**: Individuals related to the user, establishing hierarchical relationship chains (self, wife, son, daughter, etc.).
* **Asset**: Items of value owned by family members (e.g., real estate, stocks, savings).
* **Liability**: Financial obligations or debts held by family members (e.g., loans, credit cards).

---

## Getting Started

### Prerequisites
* **Node.js** (v18+)
* **PostgreSQL** database instance running locally or hosted

### Setup Database & Backend
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Configure the environment variables in a `.env` file inside the `backend` directory:
   ```env
   DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<dbname>?schema=public"
   PORT=3000
   JWT_SECRET="your_jwt_secret_key"
   ```
4. Run Prisma migrations to set up the database tables:
   ```bash
   npx prisma migrate dev
   ```
5. Generate the Prisma Client:
   ```bash
   npx prisma generate
   ```
6. Start the backend development server:
   ```bash
   npm run dev
   ```

### Setup Frontend (UI)
1. Navigate to the `ui` folder:
   ```bash
   cd ../ui
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The UI will be accessible by default at `http://localhost:2000`.
