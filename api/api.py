from flask import Flask, jsonify
import sqlite3
from flask_cors import cross_origin

connection = None
CONNECTION_TIMEOUT = 5000

def connect_db():

  conn = sqlite3.connect('database.db')
  print("connected to db")
  return conn

  
def get_cursor(connection): 
  connection.ping(reconnect=True)
  return connection.cursor()

app = Flask(__name__)

@app.route('/')
@cross_origin()
def hello_world():
    # test connection to database by fetching data from table 'users'
    connection = connect_db()
    cur = connection.cursor()
    cur.execute('CREATE TABLE IF NOT EXISTS users (name TEXT)')
    cur.execute('INSERT INTO users (name) VALUES (?)', ("alice",))  
    getUser = "SELECT * FROM users"
    cur.execute(getUser)
    results = cur.fetchone()
    jsonResp = {'hello': 'world', 'results': results}
    return jsonify(jsonResp)

if __name__ == '__main__':
    app.run(debug=False)