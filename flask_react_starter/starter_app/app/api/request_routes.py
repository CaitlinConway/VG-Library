
from flask import Blueprint, jsonify, request, session, redirect, url_for
from app.models import User, db, GameRequest, Game, Library
from passlib.hash import sha256_crypt


request_routes = Blueprint('requests', __name__)

@request_routes.route('/')
def getAllRequests():
  if (request.method == 'GET'):
    requests = GameRequest.query.all()
    if requests:
      return {'requests': requests}
    return "No requests"
  else:
    data = request.json
    library = Library.query.filter(data['gameId'] == Library.gameId).one()
    userLibraryId = library.userId
    newRequest = GameRequest(gameId=data['gameId'], userLibraryId = userLibraryId, userRequestId=data['userRequestId'], requestStatus= "Pending")
    db.session.add(newRequest)
    db.session.commit()
    return {"request": newRequest}

@request_routes.route('/<requestId>', methods=['GET', 'DELETE', 'PUT'])
def requestID():
  if (request.method == 'GET'):
    request = GameRequest.query.filter(GameRequest.id == requestId).one()
    if request:
      return {"request": request}
    return "No Request"
  if (request.method == 'DELETE'):
    request = GameRequest.query.filter(GameRequest.id == requestId).one()
    if request:
      requestId = request.id
      db.session.delete(request)
      db.session.commit
      return {'requestId': requestId}
  if (request.method == 'PUT'):
    request = GameRequest.query.filter(GameRequest.id == requestId).one()
    if request:
      status = request.requestStatus
      if status == 'Pending'
        request.requestStatus = 'Complete'
      return {"requestStatus" : 'Complete'}
  return "No Request"
