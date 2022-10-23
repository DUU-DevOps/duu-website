from flask import Flask, jsonify
from flask_cors import cross_origin
from flask_sqlalchemy import SQLAlchemy
  
def get_cursor(connection): 
  connection.ping(reconnect=True)
  return connection.cursor()

app = Flask(__name__)
app.config.from_pyfile('config.py')
db = SQLAlchemy(app)

class Alumni(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(200), nullable=False)

  def __repr__(self):
    return '<Alum %r>' % self.id

  def __init__(self, name):
    self.name = name

def format_alum(alum):
  return {
    "name": alum.name,
    "id": alum.id
  }

@app.route('/')
@cross_origin()
def hello_world():
    # test connection to database by fetching data from table 'users'

    alum = Alumni("Alice")
    db.session.add(alum)
    db.session.commit()
    events = Alumni.query.order_by(Alumni.name.asc()).all()
    event_list = []
    for event in events:
      event_list.append(format_alum(event))
    jsonResp = {"events": event_list}
    return jsonResp 

db.init_app(app)
with app.app_context(): db.create_all()

if __name__ == '__main__':
    app.run(debug=False)