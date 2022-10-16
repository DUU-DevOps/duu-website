# Duu Website

## Start React App

In the project directory, you can run:

### `npm install`

Installs necessary dependancies.

### `npm start`

Runs the React app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Flask and MySQL

In the react-flask/api directory, you can run:

### `pip install -r requirements.txt`

Installs necessary Python Flask dependencies.

### `python api.py`

Runs Flask in development mode. \
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

In the project directory, create a `.env` file with the following (filled in according to your local MySQL server): 

```
DB_CONNECTION=mysql
DB_HOST= 127.0.0.1
DB_PORT= 3306
DB_DATABASE= reactflask         
DB_USERNAME= root    
DB_PASSWORD=
```

If React and Flask are running correctly, then "world" should populate on the homepage. Test your MySQL database by adding a table `users` and uncommenting the `api.py` test case.