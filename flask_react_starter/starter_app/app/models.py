from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  firstName = db.Column(db.String(255), nullable= False)
  lastName = db.Column(db.String(255), nullable= False)
  zipCode = db.Column(db.Integer, nullable= False)

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "firstName": self.firstName,
      "lastName": self.lastName,
      "zipCode": self.zipCode
    }
