from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  firstName = db.Column(db.String(255), nullable= False)
  lastName = db.Column(db.String(255), nullable= False)
  zipCode = db.Column(db.Integer, nullable= False)
  password = db.Column(db.String(255), nullable= False)

  def to_dict(self):
    return {
      "id": self.id,
      "email": self.email,
      "firstName": self.firstName,
      "lastName": self.lastName,
      "zipCode": self.zipCode
    }

class Console(db.Model):
  __tablename__ = "consoles"

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(255), nullable=False, unique=True)

class Game(db.Model):
  __tablename__ = "games"

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(255), nullable=False, unique=True)
  consoleId = db.Column(db.Integer, db.ForeignKey("consoles.id"))
  console = db.relationship("Console")


class Library(db.Model):
  __tablename__ = "libraries"

  id = db.Column(db.Integer, primary_key = True)
  gameId = db.Column(db.Integer, db.ForeignKey("games.id"))
  game = db.relationship("Game")
  userId = db.Column(db.Integer, db.ForeignKey("users.id"))
  user = db.relationship("User")


class GameRequest(db.Model):
  __tablename__ = "gameRequests"

  id = db.Column(db.Integer, primary_key = True)
  gameId = db.Column(db.Integer, db.ForeignKey("games.id"))
  game = db.relationship("Game")
  userLibraryId = db.Column(db.Integer, db.ForeignKey("libraries.id"))
  userLibrary = db.relationship("Library")
  userRequestId = db.Column(db.Integer, db.ForeignKey("users.id"))
  userRequest = db.relationship("User")
  requestStatus = db.Column(db.String(50))


class GameReview(db.Model):
  __tablename__ = "gameReviews"

  id = db.Column(db.Integer, primary_key = True)
  gameId = db.Column(db.Integer, db.ForeignKey("games.id"), nullable = False)
  game = db.relationship("Game")
  userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  user = db.relationship("User")
  rating = db.Column(db.Integer, nullable= False)
  comments = db.Column(db.String(255))
