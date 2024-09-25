 
# React & Laravel ToDo Application

This project is a full-stack web application that includes a React frontend and a Laravel backend with MySQL database integration. This guide provides instructions on how to set up and run the application locally.

## Prerequisites

Ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Composer](https://getcomposer.org/) (for Laravel)
- [PHP](https://www.php.net/) (v7.3 or later)
- [MySQL](https://www.mysql.com/) (or equivalent)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/gopika-1122/Todo-App.git 
```

### 2. Set up the Laravel Backend

#### Navigate to the backend folder:

```
cd laravel(backend)
```

#### Install dependencies:

```
composer install
```

#### Set up environment variables:

- Copy the `.env.example` to `.env`:

```bash
cp .env.example .env
```

- Update the `.env` file with your database and other configurations:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=todo
DB_USERNAME=root
DB_PASSWORD=
```

#### Generate application key:


#### Run database migrations:

```
php artisan migrate
```

#### Start the Laravel development server:

```
php artisan serve
```

The backend will be available at `http://127.0.0.1:8000`.

### 3. Set up the React Frontend

#### Navigate to the frontend folder:

```
cd react(frontend)
```

#### Install dependencies:

```
npm install
```



#### Run the React development server:

```
npm start
```

The frontend will be available at `http://localhost:3000`.

## Running the Application

- Ensure that both the Laravel backend (`http://127.0.0.1:8000`) and the React frontend (`http://localhost:3000`) servers are running.
- The application should now be accessible in your browser at `http://localhost:3000`.
