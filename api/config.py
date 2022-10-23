"""Flask configuration."""

TESTING = True
DEBUG = True
FLASK_ENV = 'development'
DB_PATH = 'api/database.db'
# this is relative to the app subfolder
SQLALCHEMY_DATABASE_URI = 'sqlite:///database.db'