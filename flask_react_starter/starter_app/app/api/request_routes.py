
from flask import Blueprint, jsonify, request, session, redirect, url_for
from app.models import User, db, GameRequest, Game, Library
from passlib.hash import sha256_crypt


game_request_routes = Blueprint('gameRequests', __name__)


@game_request_routes.route('/', methods=["GET", "POST"])
def getAllRequests():
  if (request.method == 'GET'):
    requests = GameRequest.query.all()
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


# @game_request_routes.route('/<requestId>', methods=['GET', 'DELETE', 'PUT'])
# def requestID():
#     if (request.method == 'GET'):
#         request = GameRequest.query.filter(GameRequest.id == requestId).one()
#         if request:
#             return {"request": request}
#         return "No Request"
#     if (request.method == 'DELETE'):
#         request = GameRequest.query.filter(GameRequest.id == requestId).one()
#         if request:
#             requestId = request.id
#             db.session.delete(request)
#             db.session.commit
#             return {'requestId': requestId}
#     if (request.method == 'PUT'):
#         request = GameRequest.query.filter(GameRequest.id == requestId).one()
#         if request:
#             status = request.requestStatus
#             if status == 'Pending':
#                 request.requestStatus = 'Complete'
#             return {"requestStatus": 'Complete'}
#     return "No Request"
