
from flask import Blueprint, jsonify, request, session, redirect, url_for
from app.models import User, db, GameRequest, Game, Library
from passlib.hash import sha256_crypt


game_request_routes = Blueprint('gameRequests', __name__)


@game_request_routes.route('/', methods=["GET", "POST"])
def getAllRequests():
  if (request.method == 'GET'):
    requestsFrom = GameRequest.query.all()
    if requests:
      return {'requests': requests}
    return "No requests"
  if(request.method == "POST"):
    data = request.json
    userName = data["requestOf"].split(" ")
    requestOf = User.query.filter(User.firstName == userName[0]).filter(User.lastName== userName[1]).first()
    game = Game.query.filter(Game.name == data['game']).first()
    newRequest = GameRequest(gameId=game.id, userLibraryId=requestOf.id, userRequestId=data['requestFrom'], requestStatus="Pending")
    db.session.add(newRequest)
    db.session.commit()
    return "success"
  else:
    return "No Requests"


@game_request_routes.route('/<userId>', methods=['GET', 'DELETE', 'PUT'])
def requestID(userId):
  if (request.method == 'GET'):
    requestsFrom = GameRequest.query.filter(GameRequest.userLibraryId == userId).all()
    requestsTo = GameRequest.query.filter(GameRequest.userRequestId == userId).all()
    requestsFromArray =[]
    requestsToArray =[]
    if requestsFrom:
      for grequest in requestsFrom:
        print(grequest)
        game = Game.query.filter(grequest.gameId== Game.id).first()
        user = User.query.filter(User.id == grequest.userLibraryId).first()
        userName = user.firstName +" " + user.lastName
        requestsFromObj ={"game": game.name, "requestFrom": userName, "status": grequest.requestStatus, "requestId": grequest.id}
        requestsFromArray.append(requestsFromObj)
    if requestsTo:
      for grequest in requestsTo:
        game = Game.query.filter(grequest.gameId== Game.id).first()
        user = User.query.filter(User.id == grequest.userRequestId).first()
        userName = user.firstName +" " + user.lastName
        requestsToObj ={"game": game.name, "requestTo": userName, "status": grequest.requestStatus, "requestId": grequest.id}
        requestsToArray.append(requestsToObj)
    return {"requestsFrom": requestsFromArray, "requestsTo": requestsToArray}
    return "No Request"
    # if (request.method == 'DELETE'):
    #     request = GameRequest.query.filter(GameRequest.id == requestId).one()
    #     if request:
    #         requestId = request.id
    #         db.session.delete(request)
    #         db.session.commit
    #         return {'requestId': requestId}
    # if (request.method == 'PUT'):
    #     request = GameRequest.query.filter(GameRequest.id == requestId).one()
    #     if request:
    #         status = request.requestStatus
    #         if status == 'Pending':
    #             request.requestStatus = 'Complete'
    #         return {"requestStatus": 'Complete'}
    return "No Request"
