from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User
from passlib.hash import sha256_crypt

with app.app_context():
  db.drop_all()
  db.create_all()

  bob = User(email = 'guest@guest.com', password=sha256_crypt.hash("password"), firstName = "Bob", lastName = "Smith", zipCode = "53703")


  db.session.add(bob)

  db.session.commit()
