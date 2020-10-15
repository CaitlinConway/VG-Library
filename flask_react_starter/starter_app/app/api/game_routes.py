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
    r = requests.get(
        f'http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={gameName}&format=json')
    res = r.json()
    return {"gameInfo": res}


@game_routes.route('/consoles/<consoleId>')
def getGamesByConsole():
    games = Game.query.filter(Game.consoleID == consoleId).all()
    if games:
        return {consoleId: games}
    return "No games"


@game_routes.route('/consoles')
def getAllConsoles():
    consoleArray = []
    consoles = Console.query.all()
    print(consoles)
    if consoles:
        for console in consoles:
            consoleName = Console.query.filter(
                Console.id == console.id).first()
            consoleArray.append(consoleName.name)
        return {"consoles": consoleArray}
    return "No consoles"
