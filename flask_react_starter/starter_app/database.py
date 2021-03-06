from passlib.hash import sha256_crypt
from app.models import User, Game, Console, Library
from app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()


    caitlin = User(email='coolcac@gmail.com', password=sha256_crypt.hash("caitlin"),            firstName="Caitlin", lastName="Conway", zipCode="53703")
    bob = User(email='guest@guest.com', password=sha256_crypt.hash("password"),        firstName="Bob", lastName="Smith", zipCode="53703")
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
    gameCube = Console(name='GameCube')
    gameboy_3DS = Console(name='Gameboy 3DS')
    gameboy = Console(name='Gameboy')
    gameboy_SD = Console(name='Gameboy SD')
    boardgames = Console(name="Board Games")
    XBOX = Console(name='XBOX')

    game1 = Game(name="Captain Toad Treasure Tracker", consoleId=7)
    game2 = Game(name="Skylanders Swap Force", consoleId=7)
    game3 = Game(name="Mario Kart 8", consoleId=7)
    game4 = Game(name="Yoshi's Wooly World", consoleId=7)
    game5 = Game(name="Super Mario 3D World", consoleId=7)
    game6 = Game(name="WiiFit U", consoleId=7)
    game7 = Game(name="Super Smash Bros for WiiU", consoleId=7)
    game8 = Game(name="Just Dance 2015", consoleId=7)
    game9 = Game(name="Legend of Zelda: Breath of the Wild", consoleId=7)
    game10 = Game(name="Just Dance 4", consoleId=7)
    game11 = Game(name="Just Dance 2014", consoleId=7)
    game12 = Game(name="Pikmin 3", consoleId=7)
    game13 = Game(name="NintendoLand", consoleId=7)
    game14 = Game(name="Donkey Kong Country Tropical Freeze", consoleId=7)
    game15 = Game(name="Legend of Zelda: Skyward Sword", consoleId=6)
    game16 = Game(name="Smarty Pants", consoleId=6)
    game17 = Game(name="Mario Kart Wii", consoleId=6)
    game18 = Game(name="WiiFit", consoleId=6)
    game19 = Game(name="Trivial Pursuit", consoleId=6)
    game20 = Game(name="Wii Sports Resort", consoleId=6)
    game21 = Game(name="Super Smash Bros Brawl", consoleId=6)
    game22 = Game(name="Super Mario Galaxy", consoleId=6)
    game23 = Game(name="Metroid Prime Trilogy", consoleId=6)
    game24 = Game(name="Super Mario Galaxy 2", consoleId=6)
    game25 = Game(name="Super Paper Mario", consoleId=6)
    game26 = Game(name="Super Smash Bros Melee", consoleId=16)
    game27 = Game(name="Mario Party 6", consoleId=16)
    game28 = Game(name="Mario Kart Double Dash", consoleId=16)
    game29 = Game(name="Mario Strikers", consoleId=16)
    game30 = Game(name="Mario & Luigi Dream Team", consoleId=17)
    game31 = Game(name="Legend of Zelda Majora's Mask 3D", consoleId=17)
    game32 = Game(name="Pokemon X", consoleId=17)
    game33 = Game(name="Yoshi's New Island", consoleId=17)
    game34 = Game(name="Animal Crossing New Leaf", consoleId=17)
    game35 = Game(name="Banjo Tooie", consoleId=1)
    game36 = Game(name="StarFox 64", consoleId=1)
    game37 = Game(name="Major League Baseball featuring Ken Griffey Jr", consoleId=1)
    game38 = Game(name="Star Wars=Shadows of the Empire", consoleId=1)
    game39 = Game(name="Legend of Zelda Ocarina of Time", consoleId=1)
    game40 = Game(name="Gauntlet Legends", consoleId=1)
    game41 = Game(name="Mario Golf", consoleId=1)
    game42 = Game(name="Wayne Gretzky's 3D Hockey", consoleId=1)
    game43 = Game(name="Kobe Bryant in NBA Courtside", consoleId=1)
    game44 = Game(name="NFL Blitz", consoleId=1)
    game45 = Game(name="Mario Party 2", consoleId=1)
    game46 = Game(name="Star Wars Episode 1 Pod Racer", consoleId=1)
    game47 = Game(name="Diddy Kong Racing", consoleId=1)
    game48 = Game(name="Donkey Kong 64", consoleId=1)
    game49 = Game(name="Super Smash Bros", consoleId=1)
    game50 = Game(name="Quest 64", consoleId=1)
    game51 = Game(name="Mario Party 3", consoleId=1)
    game52 = Game(name="Rampage 2 Universal Tour", consoleId=1)
    game53 = Game(name="Okami Den", consoleId=17)
    game54 = Game(name="Super Mario Party", consoleId=13)
    game55 = Game(name="1-2 Switch", consoleId=13)
    game56 = Game(name="Super Mario Odyssey", consoleId=13)
    game57 = Game(name="Keep Talking and Nobody Explodes", consoleId=13)
    game58 = Game(name="Yoshi's Crafted World", consoleId=13)
    game59 = Game(name="Mario Tennis Aces", consoleId=13)
    game60 = Game(name="Super Smash Bros Ultimate", consoleId=13)
    game61 = Game(name="Animal Crossing New Horizons", consoleId=13)
    game62 = Game(name="Katamari Damacy Reroll", consoleId=13)
    game63 = Game(name="Watermelon Party", consoleId=13)
    game64 = Game(name="Tetris 99", consoleId=13)
    game65 = Game(name="Surgeon Simulator CPR", consoleId=13)
    game66 = Game(name="Conduct Together!", consoleId=13)
    game67 = Game(name="Speed Dating for Ghosts", consoleId=13)
    game68 = Game(name="Puzzle Book", consoleId=13)
    game69 = Game(name="Drawful 2", consoleId=13)
    game70 = Game(name="Super Kirby Clash", consoleId=13)
    game71 = Game(name="The Turing Test", consoleId=13)
    game72 = Game(name="Help Me, Doctor!", consoleId=13)
    game73 = Game(name="Thief Simulator", consoleId=13)
    game74 = Game(name="Untitled Goose Game", consoleId=13)
    game75 = Game(name="Luigi's Mansion 3", consoleId=13)
    game76 = Game(name="Catan", consoleId=13)
    game77 = Game(name="Stardew Valley", consoleId=13)
    game78 = Game(name="Zelda Link's Awakening", consoleId=13)
    game79 = Game(name="Transistor", consoleId=13)
    game80 = Game(name="Lovers in a Dangerous Spacetime", consoleId=13)
    game81 = Game(name="Bastion", consoleId=13)
    game82 = Game(name="Crypt of the NecroDancer", consoleId=13)
    game83 = Game(name="Overcooked! 2", consoleId=13)
    game84 = Game(name="Overcooked!", consoleId=13)
    game85 = Game(name="Child of Light", consoleId=13)
    game86 = Game(name="Monopoly", consoleId=13)
    game87 = Game(name="Lego Harry Potter", consoleId=13)
    game88 = Game(name="Dark Souls Remastered", consoleId=13)
    game89 = Game(name="Golf Story", consoleId=13)
    game90 = Game(name="Pokemon Let's Go Eevee!", consoleId=13)
    game91 = Game(name="Hollow Knight", consoleId=13)
    game92 = Game(name="Okami HD", consoleId=13)
    game93 = Game(name="Tecmo Bowl", consoleId=2)
    game94 = Game(name="Super Mario Bros 2", consoleId=2)
    game95 = Game(name="Kirby's Adventure", consoleId=2)
    game96 = Game(name="Final Fantasy", consoleId=2)
    game97 = Game(name="Dragon Warrior", consoleId=2)
    game98 = Game(name="Top Gun Second Mission", consoleId=2)
    game99 = Game(name="Tetris", consoleId=2)
    game100 = Game(name="Trojan", consoleId=2)
    game101 = Game(name="ChessMaster", consoleId=2)
    game102 = Game(name="Lunar Pool", consoleId=2)
    game103 = Game(name="Silent Service", consoleId=2)
    game104 = Game(name="Double Dribble", consoleId=2)
    game105 = Game(name="Guardian Legend", consoleId=2)
    game106 = Game(name="Solstice", consoleId=2)
    game107 = Game(name="Super Game Boy Adapter", consoleId=2)
    game108 = Game(name="RC Pro-Am", consoleId=2)
    game109 = Game(name="Elevator Action", consoleId=2)
    game110 = Game(name="Legend of Zelda", consoleId=2)
    game111 = Game(name="Bases Loaded", consoleId=2)
    game112 = Game(name="Mario & Luigi Superstar Saga + Bowser's Minions", consoleId=17)
    game113 = Game(name="Final Fantasy 3", consoleId=3)
    game114 = Game(name="Madden 96", consoleId=3)
    game115 = Game(name="Ken Griffey Jr Presents Major League Baseball", consoleId=3)
    game116 = Game(name="Madden 95", consoleId=3)
    game117 = Game(name="Donkey Kong Country", consoleId=3)
    game118 = Game(name="Madden 94", consoleId=3)
    game119 = Game(name="PGA Tour Golf", consoleId=3)
    game120 = Game(name="Bulls vs Blazers", consoleId=3)
    game121 = Game(name="John Madden Football", consoleId=3)
    game122 = Game(name="X-Men Mutant Apocalypse", consoleId=3)
    game123 = Game(name="Super Star Wars", consoleId=3)
    game124 = Game(name="Street Fighter 2 Turbo", consoleId=3)
    game125 = Game(name="StarFox", consoleId=3)
    game126 = Game(name="Spider-Man X-Men Arcade's Revenge", consoleId=3)
    game127 = Game(name="Secret of Mana", consoleId=3)
    game128 = Game(name="NHLPA Hockey", consoleId=3)
    game129 = Game(name="Breath of Fire", consoleId=3)
    game130 = Game(name="Arkanoid - Doh It Again", consoleId=3)
    game131 = Game(name="Final Fantasy Mystic Quest", consoleId=3)
    game132 = Game(name="Super Battleship", consoleId=3)
    game133 = Game(name="Virtual Bart", consoleId=3)
    game134 = Game(name="Turn and Burn No Fly Zone", consoleId=3)
    game135 = Game(name="Final Fantasy 2", consoleId=3)
    game136 = Game(name="Fouinox", consoleId=3)
    game137 = Game(name="George Foreman's KO Boxing", consoleId=3)
    game138 = Game(name="NBA Jam", consoleId=3)
    game139 = Game(name="Lufia", consoleId=3)
    game140 = Game(name="Jurassic Park Part 2=The Chaos Continues", consoleId=3)
    game141 = Game(name="Batman Returns", consoleId=3)
    game142 = Game(name="NBA Jamz", consoleId=3)
    game143 = Game(name="Spindizzy Worlds", consoleId=3)
    game144 = Game(name="The Castlevania Adventure", consoleId=18)
    game145 = Game(name="Donkey Kong", consoleId=18)
    game146 = Game(name="CosmoTank", consoleId=18)
    game147 = Game(name="Teenage Mutant Ninja Turtles Fall of the Foot Clan", consoleId=18)
    game148 = Game(name="Solar Striker", consoleId=18)
    game149 = Game(name="Krusty's Fun House", consoleId=18)
    game150 = Game(name="Double Dragon", consoleId=18)
    game151 = Game(name="Mega Man", consoleId=18)
    game152 = Game(name="Pokemon Trading Card Game", consoleId=18)
    game153 = Game(name="Super Mario Land", consoleId=18)
    game154 = Game(name="Pokemon Red", consoleId=18)
    game155 = Game(name="Pokemon Blue", consoleId=18)
    game156 = Game(name="Final Fantasy Legend", consoleId=18)
    game157 = Game(name="F1 Race", consoleId=18)
    game158 = Game(name="Final Fantasy Legend 3", consoleId=18)
    game159 = Game(name="Metroid Return of Samus", consoleId=18)
    game160 = Game(name="Mercenary Force", consoleId=18)
    game161 = Game(name="Wordtris", consoleId=18)
    game162 = Game(name="Jeopardy! Teen Tournament", consoleId=18)
    game163 = Game(name="Final Fantasy Legend 2", consoleId=18)
    game164 = Game(name="Bugs Bunny 2 Crazy Castle", consoleId=18)
    game165 = Game(name="Tetris SD", consoleId=18)
    game166 = Game(name="Final Fantasy Adventure", consoleId=18)
    game167 = Game(name="Boggle Plus", consoleId=18)
    game168 = Game(name="Mega Man 2", consoleId=18)
    game169 = Game(name="Simpsons Night of the Living Treehouse of Horror", consoleId=18)
    game170 = Game(name="Star Trek", consoleId=18)
    game171 = Game(name="Simpson's Road Rage", consoleId=19)
    game172 = Game(name="Lego Star Wars SD", consoleId=19)
    game173 = Game(name="Legend of Zelda A Link to the Past Four Swords", consoleId=19)
    game174 = Game(name="Tony Hawk's Pro Skater 3", consoleId=19)
    game175 = Game(name="The Sims Bustin' Out", consoleId=19)
    game176 = Game(name="Sim City 2000", consoleId=19)
    game177 = Game(name="Spongebob Squarepants Battle for Bikini Bottom", consoleId=19)
    game178 = Game(name="Fairly Oddparents! Breakin' Da Rules", consoleId=19)
    game179 = Game(name="Star Wars The New Droid Army", consoleId=19)
    game180 = Game(name="Ninja Gaiden Black", consoleId=21)
    game181 = Game(name="NBA Street Vol 2", consoleId=21)
    game182 = Game(name="Star Wars Battlefront", consoleId=21)
    game183 = Game(name="Grand Theft Auto=Vice City", consoleId=21)
    game184 = Game(name="Star Wars Battlefront 2", consoleId=21)
    game185 = Game(name="Fusion Frenzy", consoleId=21)
    game186 = Game(name="Shenmue II", consoleId=21)
    game187 = Game(name="Aggressive Inline", consoleId=21)
    game188 = Game(name="Halo 2", consoleId=21)
    game189 = Game(name="Halo", consoleId=21)
    game190 = Game(name="SSX Tricky", consoleId=21)
    game191 = Game(name="Jade Empire", consoleId=21)
    game192 = Game(name="Star Wars: Knights of the Old Republic", consoleId=21)
    game193 = Game(name="Star Wars: Knights of the Old Republic II", consoleId=21)
    game194 = Game(name="Fable", consoleId=21)
    game195 = Game(name="Ghost Recon 2", consoleId=21)
    game196 = Game(name="NBA Street", consoleId=16)
    game197 = Game(name="Grand Theft Auto V", consoleId=14)
    game198 = Game(name="Halo 3 ODST", consoleId=14)
    game199 = Game(name="Fable The Lost Chapters", consoleId=14)
    game200 = Game(name="Dishonored", consoleId=14)
    game201 = Game(name="Assassin's Creed IV=Black Flag", consoleId=14)
    game202 = Game(name="Call of Duty: Modern Warfare 2", consoleId=14)
    game203 = Game(name="Lego Batman", consoleId=14)
    game204 = Game(name="Halo 4", consoleId=14)
    game205 = Game(name="Battlefield 3", consoleId=14)
    game206 = Game(name="Batman Arkham Origins", consoleId=14)
    game207 = Game(name="Skyrim", consoleId=14)
    game208 = Game(name="Fable III", consoleId=14)
    game209 = Game(name="Batman Arkham City", consoleId=14)
    game210 = Game(name="Call of Duty: MW 2", consoleId=14)
    game211 = Game(name="Call of Duty: Black Ops", consoleId=14)
    game212 = Game(name="Mass Effect", consoleId=14)
    game213 = Game(name="Oblivion", consoleId=14)
    game214 = Game(name="Lego Star Wars", consoleId=14)
    game215 = Game(name="Fable II", consoleId=14)
    game216 = Game(name="Mirror's Edge Catalyst", consoleId=12)










    library1 = Library(gameId=1, userId=1)
    library2 = Library(gameId=2, userId=1)
    library3 = Library(gameId=3, userId=1)
    library4 = Library(gameId=4, userId=1)
    library5 = Library(gameId=5, userId=1)
    library6 = Library(gameId=6, userId=1)
    library7 = Library(gameId=7, userId=1)
    library8 = Library(gameId=8, userId=1)
    library9 = Library(gameId=9, userId=1)
    library10 = Library(gameId=10, userId=1)
    library11 = Library(gameId=11, userId=1)
    library12 = Library(gameId=12, userId=1)
    library13 = Library(gameId=13, userId=1)
    library14 = Library(gameId=14, userId=1)
    library15 = Library(gameId=15, userId=1)
    library16 = Library(gameId=16, userId=1)
    library17 = Library(gameId=17, userId=1)
    library18 = Library(gameId=18, userId=1)
    library19 = Library(gameId=19, userId=1)
    library20 = Library(gameId=20, userId=1)
    library21 = Library(gameId=21, userId=1)
    library22 = Library(gameId=22, userId=1)
    library23 = Library(gameId=23, userId=1)
    library24 = Library(gameId=24, userId=1)
    library25 = Library(gameId=25, userId=1)
    library26 = Library(gameId=26, userId=1)
    library27 = Library(gameId=27, userId=1)
    library28 = Library(gameId=28, userId=1)
    library29 = Library(gameId=29, userId=1)
    library30 = Library(gameId=30, userId=1)
    library31 = Library(gameId=31, userId=1)
    library32 = Library(gameId=32, userId=1)
    library33 = Library(gameId=33, userId=1)
    library34 = Library(gameId=34, userId=1)
    library35 = Library(gameId=35, userId=1)
    library36 = Library(gameId=36, userId=1)
    library37 = Library(gameId=37, userId=1)
    library38 = Library(gameId=38, userId=1)
    library39 = Library(gameId=39, userId=1)
    library40 = Library(gameId=40, userId=1)
    library41 = Library(gameId=41, userId=1)
    library42 = Library(gameId=42, userId=1)
    library43 = Library(gameId=43, userId=1)
    library44 = Library(gameId=44, userId=1)
    library45 = Library(gameId=45, userId=1)
    library46 = Library(gameId=46, userId=1)
    library47 = Library(gameId=47, userId=1)
    library48 = Library(gameId=48, userId=1)
    library49 = Library(gameId=49, userId=1)
    library50 = Library(gameId=50, userId=1)
    library51 = Library(gameId=51, userId=1)
    library52 = Library(gameId=52, userId=1)
    library53 = Library(gameId=53, userId=1)
    library54 = Library(gameId=54, userId=1)
    library55 = Library(gameId=55, userId=1)
    library56 = Library(gameId=56, userId=1)
    library57 = Library(gameId=57, userId=1)
    library58 = Library(gameId=58, userId=1)
    library59 = Library(gameId=59, userId=1)
    library60 = Library(gameId=60, userId=1)
    library61 = Library(gameId=61, userId=1)
    library62 = Library(gameId=62, userId=1)
    library63 = Library(gameId=63, userId=1)
    library64 = Library(gameId=64, userId=1)
    library65 = Library(gameId=65, userId=1)
    library66 = Library(gameId=66, userId=1)
    library67 = Library(gameId=67, userId=1)
    library68 = Library(gameId=68, userId=1)
    library69 = Library(gameId=69, userId=1)
    library70 = Library(gameId=70, userId=1)
    library71 = Library(gameId=71, userId=1)
    library72 = Library(gameId=72, userId=1)
    library73 = Library(gameId=73, userId=1)
    library74 = Library(gameId=74, userId=1)
    library75 = Library(gameId=75, userId=1)
    library76 = Library(gameId=76, userId=1)
    library77 = Library(gameId=77, userId=1)
    library78 = Library(gameId=78, userId=1)
    library79 = Library(gameId=79, userId=1)
    library80 = Library(gameId=80, userId=1)
    library81 = Library(gameId=81, userId=1)
    library82 = Library(gameId=82, userId=1)
    library83 = Library(gameId=83, userId=1)
    library84 = Library(gameId=84, userId=1)
    library85 = Library(gameId=85, userId=1)
    library86 = Library(gameId=86, userId=1)
    library87 = Library(gameId=87, userId=1)
    library88 = Library(gameId=88, userId=1)
    library89 = Library(gameId=89, userId=1)
    library90 = Library(gameId=90, userId=1)
    library91 = Library(gameId=91, userId=1)
    library92 = Library(gameId=92, userId=1)
    library93 = Library(gameId=93, userId=1)
    library94 = Library(gameId=94, userId=1)
    library95 = Library(gameId=95, userId=1)
    library96 = Library(gameId=96, userId=1)
    library97 = Library(gameId=97, userId=1)
    library98 = Library(gameId=98, userId=1)
    library99 = Library(gameId=99, userId=1)
    library100 = Library(gameId=100, userId=1)
    library101 = Library(gameId=101, userId=1)
    library102 = Library(gameId=102, userId=1)
    library103 = Library(gameId=103, userId=1)
    library104 = Library(gameId=104, userId=1)
    library105 = Library(gameId=105, userId=1)
    library106 = Library(gameId=106, userId=1)
    library107 = Library(gameId=107, userId=1)
    library108 = Library(gameId=108, userId=1)
    library109 = Library(gameId=109, userId=1)
    library110 = Library(gameId=110, userId=1)
    library111 = Library(gameId=111, userId=1)
    library112 = Library(gameId=112, userId=1)
    library113 = Library(gameId=113, userId=1)
    library114 = Library(gameId=114, userId=1)
    library115 = Library(gameId=115, userId=1)
    library116 = Library(gameId=116, userId=1)
    library117 = Library(gameId=117, userId=1)
    library118 = Library(gameId=118, userId=1)
    library119 = Library(gameId=119, userId=1)
    library120 = Library(gameId=120, userId=1)
    library121 = Library(gameId=121, userId=1)
    library122 = Library(gameId=122, userId=1)
    library123 = Library(gameId=123, userId=1)
    library124 = Library(gameId=124, userId=1)
    library125 = Library(gameId=125, userId=1)
    library126 = Library(gameId=126, userId=1)
    library127 = Library(gameId=127, userId=1)
    library128 = Library(gameId=128, userId=1)
    library129 = Library(gameId=129, userId=1)
    library130 = Library(gameId=130, userId=1)
    library131 = Library(gameId=131, userId=1)
    library132 = Library(gameId=132, userId=1)
    library133 = Library(gameId=133, userId=1)
    library134 = Library(gameId=134, userId=1)
    library135 = Library(gameId=135, userId=1)
    library136 = Library(gameId=136, userId=1)
    library137 = Library(gameId=137, userId=1)
    library138 = Library(gameId=138, userId=1)
    library139 = Library(gameId=139, userId=1)
    library140 = Library(gameId=140, userId=1)
    library141 = Library(gameId=141, userId=1)
    library142 = Library(gameId=142, userId=1)
    library143 = Library(gameId=143, userId=1)
    library144 = Library(gameId=144, userId=1)
    library145 = Library(gameId=145, userId=1)
    library146 = Library(gameId=146, userId=1)
    library147 = Library(gameId=147, userId=1)
    library148 = Library(gameId=148, userId=1)
    library149 = Library(gameId=149, userId=1)
    library150 = Library(gameId=150, userId=1)
    library151 = Library(gameId=151, userId=1)
    library152 = Library(gameId=152, userId=1)
    library153 = Library(gameId=153, userId=1)
    library154 = Library(gameId=154, userId=1)
    library155 = Library(gameId=155, userId=1)
    library156 = Library(gameId=156, userId=1)
    library157 = Library(gameId=157, userId=1)
    library158 = Library(gameId=158, userId=1)
    library159 = Library(gameId=159, userId=1)
    library160 = Library(gameId=160, userId=1)
    library161 = Library(gameId=161, userId=1)
    library162 = Library(gameId=162, userId=1)
    library163 = Library(gameId=163, userId=1)
    library164 = Library(gameId=164, userId=1)
    library165 = Library(gameId=165, userId=1)
    library166 = Library(gameId=166, userId=1)
    library167 = Library(gameId=167, userId=1)
    library168 = Library(gameId=168, userId=1)
    library169 = Library(gameId=169, userId=1)
    library170 = Library(gameId=170, userId=1)
    library171 = Library(gameId=171, userId=1)
    library172 = Library(gameId=172, userId=1)
    library173 = Library(gameId=173, userId=1)
    library174 = Library(gameId=174, userId=1)
    library175 = Library(gameId=175, userId=1)
    library176 = Library(gameId=176, userId=1)
    library177 = Library(gameId=177, userId=1)
    library178 = Library(gameId=178, userId=1)
    library179 = Library(gameId=179, userId=1)
    library180 = Library(gameId=180, userId=1)
    library181 = Library(gameId=181, userId=1)
    library182 = Library(gameId=182, userId=1)
    library183 = Library(gameId=183, userId=1)
    library184 = Library(gameId=184, userId=1)
    library185 = Library(gameId=185, userId=1)
    library186 = Library(gameId=186, userId=1)
    library187 = Library(gameId=187, userId=1)
    library188 = Library(gameId=188, userId=1)
    library189 = Library(gameId=189, userId=1)
    library190 = Library(gameId=190, userId=1)
    library191 = Library(gameId=191, userId=1)
    library192 = Library(gameId=192, userId=1)
    library193 = Library(gameId=193, userId=1)
    library194 = Library(gameId=194, userId=1)
    library195 = Library(gameId=195, userId=1)
    library196 = Library(gameId=196, userId=1)
    library197 = Library(gameId=197, userId=1)
    library198 = Library(gameId=198, userId=1)
    library199 = Library(gameId=199, userId=1)
    library200 = Library(gameId=200, userId=1)
    library201 = Library(gameId=201, userId=1)
    library202 = Library(gameId=202, userId=1)
    library203 = Library(gameId=203, userId=1)
    library204 = Library(gameId=204, userId=1)
    library205 = Library(gameId=205, userId=1)
    library206 = Library(gameId=206, userId=1)
    library207 = Library(gameId=207, userId=1)
    library208 = Library(gameId=208, userId=1)
    library209 = Library(gameId=209, userId=1)
    library210 = Library(gameId=210, userId=1)
    library211 = Library(gameId=211, userId=1)
    library212 = Library(gameId=212, userId=1)
    library213 = Library(gameId=213, userId=1)
    library214 = Library(gameId=214, userId=1)
    library215 = Library(gameId=215, userId=1)
    library216 = Library(gameId=216, userId=1)
    db.session.add(caitlin)
    db.session.add(bob)
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
    db.session.add(gameCube)
    db.session.add(gameboy_3DS	)
    db.session.add(gameboy)
    db.session.add(gameboy_SD)
    db.session.add(boardgames)
    db.session.add(XBOX)
    banjoCaitlin = Library(gameId=1, userId=2)
    pikminCaitlin = Library(gameId=2, userId=2)
    marioCaitlin = Library(gameId=3, userId=2)
    banjoBob = Library(gameId=1, userId=1)
    db.session.add(banjoCaitlin)
    db.session.add(pikminCaitlin)
    db.session.add(marioCaitlin)
    db.session.add(banjoBob)






    db.session.add(game1)
    db.session.add(game2)
    db.session.add(game3)
    db.session.add(game4)
    db.session.add(game5)
    db.session.add(game6)
    db.session.add(game7)
    db.session.add(game8)
    db.session.add(game9)
    db.session.add(game10)
    db.session.add(game11)
    db.session.add(game12)
    db.session.add(game13)
    db.session.add(game14)
    db.session.add(game15)
    db.session.add(game16)
    db.session.add(game17)
    db.session.add(game18)
    db.session.add(game19)
    db.session.add(game20)
    db.session.add(game21)
    db.session.add(game22)
    db.session.add(game23)
    db.session.add(game24)
    db.session.add(game25)
    db.session.add(game26)
    db.session.add(game27)
    db.session.add(game28)
    db.session.add(game29)
    db.session.add(game30)
    db.session.add(game31)
    db.session.add(game32)
    db.session.add(game33)
    db.session.add(game34)
    db.session.add(game35)
    db.session.add(game36)
    db.session.add(game37)
    db.session.add(game38)
    db.session.add(game39)
    db.session.add(game40)
    db.session.add(game41)
    db.session.add(game42)
    db.session.add(game43)
    db.session.add(game44)
    db.session.add(game45)
    db.session.add(game46)
    db.session.add(game47)
    db.session.add(game48)
    db.session.add(game49)
    db.session.add(game50)
    db.session.add(game51)
    db.session.add(game52)
    db.session.add(game53)
    db.session.add(game54)
    db.session.add(game55)
    db.session.add(game56)
    db.session.add(game57)
    db.session.add(game58)
    db.session.add(game59)
    db.session.add(game60)
    db.session.add(game61)
    db.session.add(game62)
    db.session.add(game63)
    db.session.add(game64)
    db.session.add(game65)
    db.session.add(game66)
    db.session.add(game67)
    db.session.add(game68)
    db.session.add(game69)
    db.session.add(game70)
    db.session.add(game71)
    db.session.add(game72)
    db.session.add(game73)
    db.session.add(game74)
    db.session.add(game75)
    db.session.add(game76)
    db.session.add(game77)
    db.session.add(game78)
    db.session.add(game79)
    db.session.add(game80)
    db.session.add(game81)
    db.session.add(game82)
    db.session.add(game83)
    db.session.add(game84)
    db.session.add(game85)
    db.session.add(game86)
    db.session.add(game87)
    db.session.add(game88)
    db.session.add(game89)
    db.session.add(game90)
    db.session.add(game91)
    db.session.add(game92)
    db.session.add(game93)
    db.session.add(game94)
    db.session.add(game95)
    db.session.add(game96)
    db.session.add(game97)
    db.session.add(game98)
    db.session.add(game99)
    db.session.add(game100)
    db.session.add(game101)
    db.session.add(game102)
    db.session.add(game103)
    db.session.add(game104)
    db.session.add(game105)
    db.session.add(game106)
    db.session.add(game107)
    db.session.add(game108)
    db.session.add(game109)
    db.session.add(game110)
    db.session.add(game111)
    db.session.add(game112)
    db.session.add(game113)
    db.session.add(game114)
    db.session.add(game115)
    db.session.add(game116)
    db.session.add(game117)
    db.session.add(game118)
    db.session.add(game119)
    db.session.add(game120)
    db.session.add(game121)
    db.session.add(game122)
    db.session.add(game123)
    db.session.add(game124)
    db.session.add(game125)
    db.session.add(game126)
    db.session.add(game127)
    db.session.add(game128)
    db.session.add(game129)
    db.session.add(game130)
    db.session.add(game131)
    db.session.add(game132)
    db.session.add(game133)
    db.session.add(game134)
    db.session.add(game135)
    db.session.add(game136)
    db.session.add(game137)
    db.session.add(game138)
    db.session.add(game139)
    db.session.add(game140)
    db.session.add(game141)
    db.session.add(game142)
    db.session.add(game143)
    db.session.add(game144)
    db.session.add(game145)
    db.session.add(game146)
    db.session.add(game147)
    db.session.add(game148)
    db.session.add(game149)
    db.session.add(game150)
    db.session.add(game151)
    db.session.add(game152)
    db.session.add(game153)
    db.session.add(game154)
    db.session.add(game155)
    db.session.add(game156)
    db.session.add(game157)
    db.session.add(game158)
    db.session.add(game159)
    db.session.add(game160)
    db.session.add(game161)
    db.session.add(game162)
    db.session.add(game163)
    db.session.add(game164)
    db.session.add(game165)
    db.session.add(game166)
    db.session.add(game167)
    db.session.add(game168)
    db.session.add(game169)
    db.session.add(game170)
    db.session.add(game171)
    db.session.add(game172)
    db.session.add(game173)
    db.session.add(game174)
    db.session.add(game175)
    db.session.add(game176)
    db.session.add(game177)
    db.session.add(game178)
    db.session.add(game179)
    db.session.add(game180)
    db.session.add(game181)
    db.session.add(game182)
    db.session.add(game183)
    db.session.add(game184)
    db.session.add(game185)
    db.session.add(game186)
    db.session.add(game187)
    db.session.add(game188)
    db.session.add(game189)
    db.session.add(game190)
    db.session.add(game191)
    db.session.add(game192)
    db.session.add(game193)
    db.session.add(game194)
    db.session.add(game195)
    db.session.add(game196)
    db.session.add(game197)
    db.session.add(game198)
    db.session.add(game199)
    db.session.add(game200)
    db.session.add(game201)
    db.session.add(game202)
    db.session.add(game203)
    db.session.add(game204)
    db.session.add(game205)
    db.session.add(game206)
    db.session.add(game207)
    db.session.add(game208)
    db.session.add(game209)
    db.session.add(game210)
    db.session.add(game211)
    db.session.add(game212)
    db.session.add(game213)
    db.session.add(game214)
    db.session.add(game215)
    db.session.add(game216)









    db.session.add(library1)
    db.session.add(library2)
    db.session.add(library3)
    db.session.add(library4)
    db.session.add(library5)
    db.session.add(library6)
    db.session.add(library7)
    db.session.add(library8)
    db.session.add(library9)
    db.session.add(library10)
    db.session.add(library11)
    db.session.add(library12)
    db.session.add(library13)
    db.session.add(library14)
    db.session.add(library15)
    db.session.add(library16)
    db.session.add(library17)
    db.session.add(library18)
    db.session.add(library19)
    db.session.add(library20)
    db.session.add(library21)
    db.session.add(library22)
    db.session.add(library23)
    db.session.add(library24)
    db.session.add(library25)
    db.session.add(library26)
    db.session.add(library27)
    db.session.add(library28)
    db.session.add(library29)
    db.session.add(library30)
    db.session.add(library31)
    db.session.add(library32)
    db.session.add(library33)
    db.session.add(library34)
    db.session.add(library35)
    db.session.add(library36)
    db.session.add(library37)
    db.session.add(library38)
    db.session.add(library39)
    db.session.add(library40)
    db.session.add(library41)
    db.session.add(library42)
    db.session.add(library43)
    db.session.add(library44)
    db.session.add(library45)
    db.session.add(library46)
    db.session.add(library47)
    db.session.add(library48)
    db.session.add(library49)
    db.session.add(library50)
    db.session.add(library51)
    db.session.add(library52)
    db.session.add(library53)
    db.session.add(library54)
    db.session.add(library55)
    db.session.add(library56)
    db.session.add(library57)
    db.session.add(library58)
    db.session.add(library59)
    db.session.add(library60)
    db.session.add(library61)
    db.session.add(library62)
    db.session.add(library63)
    db.session.add(library64)
    db.session.add(library65)
    db.session.add(library66)
    db.session.add(library67)
    db.session.add(library68)
    db.session.add(library69)
    db.session.add(library70)
    db.session.add(library71)
    db.session.add(library72)
    db.session.add(library73)
    db.session.add(library74)
    db.session.add(library75)
    db.session.add(library76)
    db.session.add(library77)
    db.session.add(library78)
    db.session.add(library79)
    db.session.add(library80)
    db.session.add(library81)
    db.session.add(library82)
    db.session.add(library83)
    db.session.add(library84)
    db.session.add(library85)
    db.session.add(library86)
    db.session.add(library87)
    db.session.add(library88)
    db.session.add(library89)
    db.session.add(library90)
    db.session.add(library91)
    db.session.add(library92)
    db.session.add(library93)
    db.session.add(library94)
    db.session.add(library95)
    db.session.add(library96)
    db.session.add(library97)
    db.session.add(library98)
    db.session.add(library99)
    db.session.add(library100)
    db.session.add(library101)
    db.session.add(library102)
    db.session.add(library103)
    db.session.add(library104)
    db.session.add(library105)
    db.session.add(library106)
    db.session.add(library107)
    db.session.add(library108)
    db.session.add(library109)
    db.session.add(library110)
    db.session.add(library111)
    db.session.add(library112)
    db.session.add(library113)
    db.session.add(library114)
    db.session.add(library115)
    db.session.add(library116)
    db.session.add(library117)
    db.session.add(library118)
    db.session.add(library119)
    db.session.add(library120)
    db.session.add(library121)
    db.session.add(library122)
    db.session.add(library123)
    db.session.add(library124)
    db.session.add(library125)
    db.session.add(library126)
    db.session.add(library127)
    db.session.add(library128)
    db.session.add(library129)
    db.session.add(library130)
    db.session.add(library131)
    db.session.add(library132)
    db.session.add(library133)
    db.session.add(library134)
    db.session.add(library135)
    db.session.add(library136)
    db.session.add(library137)
    db.session.add(library138)
    db.session.add(library139)
    db.session.add(library140)
    db.session.add(library141)
    db.session.add(library142)
    db.session.add(library143)
    db.session.add(library144)
    db.session.add(library145)
    db.session.add(library146)
    db.session.add(library147)
    db.session.add(library148)
    db.session.add(library149)
    db.session.add(library150)
    db.session.add(library151)
    db.session.add(library152)
    db.session.add(library153)
    db.session.add(library154)
    db.session.add(library155)
    db.session.add(library156)
    db.session.add(library157)
    db.session.add(library158)
    db.session.add(library159)
    db.session.add(library160)
    db.session.add(library161)
    db.session.add(library162)
    db.session.add(library163)
    db.session.add(library164)
    db.session.add(library165)
    db.session.add(library166)
    db.session.add(library167)
    db.session.add(library168)
    db.session.add(library169)
    db.session.add(library170)
    db.session.add(library171)
    db.session.add(library172)
    db.session.add(library173)
    db.session.add(library174)
    db.session.add(library175)
    db.session.add(library176)
    db.session.add(library177)
    db.session.add(library178)
    db.session.add(library179)
    db.session.add(library180)
    db.session.add(library181)
    db.session.add(library182)
    db.session.add(library183)
    db.session.add(library184)
    db.session.add(library185)
    db.session.add(library186)
    db.session.add(library187)
    db.session.add(library188)
    db.session.add(library189)
    db.session.add(library190)
    db.session.add(library191)
    db.session.add(library192)
    db.session.add(library193)
    db.session.add(library194)
    db.session.add(library195)
    db.session.add(library196)
    db.session.add(library197)
    db.session.add(library198)
    db.session.add(library199)
    db.session.add(library200)
    db.session.add(library201)
    db.session.add(library202)
    db.session.add(library203)
    db.session.add(library204)
    db.session.add(library205)
    db.session.add(library206)
    db.session.add(library207)
    db.session.add(library208)
    db.session.add(library209)
    db.session.add(library210)
    db.session.add(library211)
    db.session.add(library212)
    db.session.add(library213)
    db.session.add(library214)
    db.session.add(library215)
    db.session.add(library216)















    db.session.commit()
