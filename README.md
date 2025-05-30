# Trusterlabs (Next.js Frontend + Laravel API Backend)

This repository houses a full-stack application, featuring a dynamic frontend built with Next.js and a robust API backend powered by Laravel. This setup allows for a highly interactive user experience decoupled from the backend logic, making it scalable and flexible.

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Prerequisites](#prerequisites)
* [Installation & Setup](#installation--setup)
    * [Backend (Laravel API)](#backend-laravel-api)
    * [Frontend (Next.js)](#frontend-nextjs)
* [Running the Applications](#running-the-applications)
    * [Running the Backend](#running-the-backend)
    * [Running the Frontend](#running-the-frontend)
* [API Endpoints](#api-endpoints)
* [Environment Variables](#environment-variables)
* [Contributing](#contributing)
* [License](#license)

## Features

### Frontend (Next.js)
* User-friendly interface for [briefly describe core frontend functionality, e.g., email subscription].
* Responsive design for various devices.
* Fast page loads with Next.js optimizations.
* [Add any other specific frontend features, e.g., user authentication flows]

### Backend (Laravel API)
* RESTful API for managing [e.g., email subscriptions, user data].
* Secure and robust data handling.
* Email sending capabilities (e.g., newsletters, notifications).
* [Add any other specific backend features, e.g., authentication system, data processing]

## Technologies Used

### Frontend
* **Next.js** - React Framework for Production
* **React** - A JavaScript library for building user interfaces
* **[Add UI Framework, e.g., Tailwind CSS, Material-UI, Bootstrap]** - For styling and UI components
* **[Add State Management, e.g., Zustand, Redux, Context API]** - For global state management
* **[Add Data Fetching Library, e.g., SWR, React Query, Axios]** - For API interactions

### Backend
* **Laravel 11** - The PHP Framework for Web Artisans
* **PHP 8.3+** - The server-side scripting language
* **MySQL / PostgreSQL / SQLite** - Database system
* **Laravel Sanctum** - For API authentication (used or planned)
* **PHPMailer** - For sending emails (or Laravel's built-in Mailer with a service)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

* **Node.js** (v18.x or higher, includes npm)
    * [Download Node.js](https://nodejs.org/)
* **Yarn** (optional, but recommended for frontend)
    * `npm install -g yarn`
* **PHP** (v8.2 or higher)
    * [Download PHP](https://www.php.net/downloads.php) or use a tool like XAMPP/WAMP/Laragon (Windows), Homebrew (macOS), or your system's package manager (Linux).
* **Composer**
    * [Download Composer](https://getcomposer.org/download/)
* **Database Server** (e.g., MySQL)
    * Ensure your chosen database server is running.

## Installation & Setup

Follow these steps to get both the frontend and backend applications running.

### Backend (Laravel API)

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Install Composer dependencies:**
    ```bash
    composer install
    ```
3.  **Create a copy of the environment file:**
    ```bash
    cp .env.example .env
    ```
4.  **Generate an application key:**
    ```bash
    php artisan key:generate
    ```
5.  **Configure your database:**
    Open the `.env` file and update your database credentials (e.g., `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`). Ensure your database is created.
6.  **Run database migrations:**
    ```bash
    php artisan migrate
    ```
    This will create the `subscribers` table and any other necessary tables.
7.  **Enable API routes (if not already):**
    If `routes/api.php` is missing, run:
    ```bash
    php artisan install:api
    ```
8.  **Configure CORS and Mailer (if using custom `MailService`):**
    * Ensure `bootstrap/app.php` has the correct CORS configuration as detailed in development notes (e.g., `statefulPages` method).
    * Update your `.env` for mailer settings (e.g., `MAIL_MAILER`, `MAIL_HOST`, `MAIL_USERNAME`, `MAIL_PASSWORD`, `MAIL_PORT`).
9.  **Clear Laravel Caches:**
    ```bash
    php artisan optimize:clear
    ```

### Frontend (Next.js)

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```
2.  **Install Node.js dependencies:**
    ```bash
    npm install # or yarn install
    ```
3.  **Create a copy of the environment file:**
    ```bash
    cp .env.example .env.local
    ```
4.  **Configure API URL:**
    Open `frontend/.env.local` and set the backend API URL:
    ```dotenv
    NEXT_PUBLIC_API_URL=[http://127.0.0.1:8000/api](http://127.0.0.1:8000/api)
    ```

## Running the Applications

You'll need to run both the backend and frontend simultaneously.

### Running the Backend

From the `backend` directory:

```bash
php artisan serve