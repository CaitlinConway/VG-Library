from passlib.hash import sha256_crypt
from app.models import User, Game, Console, Library
from app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    bob = User(email='guest@guest.com', password=sha256_crypt.hash("password"),
               firstName="Bob", lastName="Smith", zipCode="53703")
    caitlin = User(email='coolcac@gmail.com', password=sha256_crypt.hash("caitlin"),
                   firstName="Caitlin", lastName="Conway", zipCode="53703")
    N64 = Console(name="N64")
    Nes = Console(name="NES")
    SNES = Console(name='SNES')
    Atari = Console(name='Atari')
    Odyssey_2 = Console(name='Odyssey 2')
    Wii = Console(name='Wii')
    WiiU = Console(name='WiiU')
    PS_1 = Console(name='PlayStation 1')
    PS_2 = Console(name='PlayStation 2')
    PS_4 = Console(name='PlayStation 4')
    Sega_Genesis = Console(name='Sega Genesis')
    XBOX_One = Console(name='XBOX One')
    Nintendo_Switch = Console(name='Nintendo Switch')
    XBOX_360 = Console(name='XBOX 360')
    Steam = Console(name='Steam')
    GameCube = Console(name='GameCube')
    Gameboy_3DS = Console(name='Gameboy 3DS')
    Gameboy = Console(name='Gameboy')
    Gameboy_SD = Console(name='Gameboy SD')
    boardgames = Console(name="Board Games")
    XBOX = Console(name='XBOX')
    banjo = Game(name="Banjo Tooie", consoleId=1)
    pikmin = Game(name="Pikmin 3", consoleId=7)
    mario = Game(name="Super Mario 3D AllStars", consoleId=7)
    banjoCaitlin = Library(gameId=1, userId=1)
    pikminCaitlin = Library(gameId=2, userId=1)
    marioCaitlin = Library(gameId=3, userId=1)
    db.session.add(bob)
    db.session.add(caitlin)
    db.session.add(N64)
    db.session.add(Nes)
    db.session.add(SNES)
    db.session.add(Atari)
    db.session.add(Odyssey_2)
    db.session.add(Wii)
    db.session.add(WiiU)
    db.session.add(PS_1)
    db.session.add(PS_2)
    db.session.add(PS_4)
    db.session.add(Sega_Genesis)
    db.session.add(XBOX_One)
    db.session.add(Nintendo_Switch)
    db.session.add(XBOX_360)
    db.session.add(Steam)
    db.session.add(GameCube)
    db.session.add(Gameboy_3DS	)
    db.session.add(Gameboy)
    db.session.add(Gameboy_SD)
    db.session.add(boardgames)
    db.session.add(XBOX)
    db.session.add(banjo)
    db.session.add(pikmin)
    db.session.add(mario)
    db.session.add(banjoCaitlin)
    db.session.add(pikminCaitlin)
    db.session.add(marioCaitlin)
    db.session.commit()
