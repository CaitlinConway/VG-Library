from flask import Blueprint, jsonify, request, session, redirect, url_for
from app.models import User, db, GameRequest, Game, Library, Console


game_routes = Blueprint('games', __name__)


@game_routes.route('/')
def getAllGames():
  games = Game.query.all()
  if games:
    return {"games": games}
  return "No games"


@game_routes.route('/<gameName>')
def getGame():
  r = requests.get(f'http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={gameName}&format=json')
  res = r.json()
  return {"gameInfo": res}


# @game_routes.route('/consoles/<consoleId>')
# def getGamesByConsole():
#     games = Game.query.filter(Game.consoleID == consoleId).all()
#     if games:
#         return {consoleId: games}
#     return "No games"


@game_routes.route('/consoles')
def getAllConsoles():
  consoleArray = []
  # gamesObj = {}
  consoles = Console.query.all()
  if consoles:
    for console in consoles:
      consoleName = Console.query.filter(
      Console.id == console.id).first()
      consoleArray.append(consoleName.name)
        #     games = Game.query.filter(console.id == Game.consoleId).all()
        #     gamesObj[consoleName.name] = []
        #     array = gamesObj[consoleName.name]
        #     print(array)
        #     for game in games:
        #         array.append(game.name)
        # print(games)
        # return {"consoles": consoleArray, "games": gamesObj}
    return{"consoles": consoleArray}
  return "No consoles"


@game_routes.route('/console/<consoleName>')
def getGamesByConsole(consoleName):
  console = Console.query.filter(Console.name == consoleName).first()
  consoleId = console.id
  print(consoleId)
  games = Game.query.filter(Game.consoleId == console.id).all()
  gameArray =[]
  if games:
    for game in games:
      gameName = game.name
      gameArray.append(gameName)
    print (gameArray)
    return {console.name: gameArray}
  return "No games"
