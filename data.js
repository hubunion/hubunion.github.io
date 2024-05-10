window.HUHUSdk = {
    getDomain: function() {
        return window.location.origin
    },
    getImgUrl(e) {
        return "https://img.gamescdn.top" + e;
    },
    getIconUrl(e) {
        if (e == "HyperCasual") {
            return "https://icons.gamescdn.top/Hypercasual.svg";
        }
        return "./" + e.toLowerCase() + ".svg";
        //return "https://icons.gamescdn.top/" + e.toLowerCase() + ".svg";
    },
    getGameUrl(e) {
        //return "https://oss.gamescdn.top" + e;
        return "./" + e;
    },
    getUrlParam(e) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
          , o = window.location.search.substr(1).match(t);
        return null != o ? unescape(o[2]) : null
    },
    getCategory: function() {
        const i = {};
        for (const e of window.HUHUSdk.list)
            i[e.category] || (i[e.category] = []);
        for (const e of window.HUHUSdk.list)
            i[e.category].push(e);
        return i;
    },
    searchGames: function(slug) {
        const i = [];
        for (const e of window.HUHUSdk.list) {
            if (e.name.toLowerCase().indexOf(slug.toLowerCase()) < 0)
                continue;
            i.push(e);
        }
        return i;
    },
    getGameById: function(id) {
        for (const e of window.HUHUSdk.list) {
            if (e.id == id)
                return e;
        }
    },
    getRandomData: function(e, t) {
        const n = [];
        for (let a = 0; a < t; a++) {
            let t;
            do {
                t = Math.floor(Math.random() * e)
            } while (n.includes(t));
            n.push(t)
        }
        return n
    },
    list: [{
        "id": "250",
        "category": "Casual",
        "name": "Zumbla Deluxe",
        "url": "/Zumbla_Deluxe/index.html",
        "description": "The classic match-3 bubble shooting mode has added many interesting ways to play, such as saving dragonflies, defeating bosses, and unlocking idol stones.",
        "instruction": "Very creative pinball shooting game",
        "image": "/Zumbla-Deluxe.jpg",
        "isPortrait": 1
    }, {
        "id": "26",
        "category": "Arcade",
        "name": "Knife Hit Up",
        "url": "/Knife_Hit_Up/index.html",
        "description": "An addicted Arcade game, simple to control, nice design, Fun and relax-able. Prove that you are a Skilled knife-throwing master.PLAY NOW!",
        "instruction": "Throw the knives into the logs to break them. Slash the apples and unlock new knives. Each 5th stage is defended by a boss - beat them to get exclusive knives! ",
        "image": "/Knife_Hit_Up.jpg",
        "isPortrait": 1
    }, {
        "id": "230",
        "category": "Casual",
        "name": "Bubble Legend",
        "url": "/BubbleLegend/index.html",
        "description": "Tap where you want to pop bubble",
        "instruction": "Bubble Legend is an addictive bubble shooter",
        "image": "/Bubble-Legend.jpg",
        "isPortrait": 1
    }, {
        "id": "164",
        "category": "Arcade",
        "name": "Kitten Hide And Seek",
        "url": "/Kitten-Hide-And-Seek/index.html",
        "description": "Do you like green light red light game? Are you ready to be the last man standing in squid survival game? The favourited puppy and cat-game – Hide and seek is back with a brand new kawaii versIon: Kitten Hide N’ Seek: Furry Neko Peekaboo Seeking",
        "instruction": "Kitten Hide N’ Seek: Furry Neko Peekaboo Seeking, a classic doge, cat and mouse peekaboo, is famous not only among Kids and girls but also people at all ages. If you love Tamagotchi or green light red light, this trap the cat seeking game is totally for you. Cat and mouse or trap the cat in squid doge mode and Tamagotchi has become familiar with Kids and adult. Now this cute game is back with doge puppy and kitty versIon which is as cute as cat and mouse with hamster. Don’t get found by seeking puppy and help the furry kitty successfully. Can you help the kawaii meow to escape from the puppy pug's seeking? Can you win this green light red light game? Can you reach to the end when the green light turns on?",
        "image": "/Kitten-Hide-And-Seek.png",
        "isPortrait": 1
    }, {
        "id": "126",
        "category": "Action",
        "name": "Popsicle Stack",
        "url": "/Popsicle_Stack/index.html",
        "description": "You scream, I scream, we all scream for ice cream!",
        "instruction": "Popsicle Stack brings you a beautiful popsicle building experience mixed with an ultra smooth runner game that's both easy to learn and Fun to play! Create massive stacks of popsicles and sell them to your eager customers to earn mountains of cash. Explore the vast array of different fillings and toppings, create any popsicle flavor you can imagine: chocolate vanilla strawberry, rainbow and sprinkles, fruit pop, chocolate dip, the possibilities are endless! Which flavors will make you the most money? That's for you to find out.",
        "image": "/Popsicle_Stack.png",
        "isPortrait": 1
    }, {
        "id": "249",
        "category": "Casual",
        "name": "Zumba Shooter",
        "url": "/Zumba_Shooter/index.html",
        "description": "The classic match-3 bubble shooting mode has added many interesting ways to play, such as saving dragonflies, defeating bosses, and unlocking idol stones.",
        "instruction": "Very creative pinball shooting game",
        "image": "/Zumba-Shooter.jpg",
        "isPortrait": 1
    }, {
        "id": "137",
        "category": "Shooting",
        "name": "Tuf War",
        "url": "/TufWar/index.html",
        "description": "The maximum number of participants in group chat has been increased from 50 to 100.",
        "instruction": "The maximum number of participants in group chat has been increased from 50 to 100.",
        "image": "/TufWar.png",
        "isPortrait": 1
    }, {
        "id": "96",
        "category": "HyperCasual",
        "name": "Train Snake",
        "url": "/Train_Snake/index.html",
        "description": "Now drive your train to pick up all the passengers and deliver them to your destinatIon!Don't forget the passengers, but also be Careful about the obstacles on the road!",
        "instruction": "Now drive your train to pick up all the passengers and deliver them to your destinatIon!Don't forget the passengers, but also be Careful about the obstacles on the road!",
        "image": "/Train_Snake.jpg",
        "isPortrait": 1
    }, {
        "id": "234",
        "category": "Action",
        "name": "Overlook Tank",
        "url": "/Overlook_Tank/index.html",
        "description": "*Different tanks have different accelerations including speed, armor, and firepower. \n*Choose a side you like and unlock all tanks to win the battle!",
        "instruction": "A chance to join World War II tank wars.",
        "image": "/Overlook-Tank.jpg",
        "isPortrait": 1
    }, {
        "id": "199",
        "category": "Racing",
        "name": "Mighty Mouse Dash",
        "url": "/Mighty_Mouse_Dash/index.html",
        "description": "DASH as fast as you can! Fight the oncoming Street!",
        "instruction": "Mighty Mouse Dash to win exclusive merch!",
        "image": "/Mighty_Mouse_Dash.jpg",
        "isPortrait": 1
    }, {
        "id": "179",
        "category": "HyperCasual",
        "name": "UnBlock The Ball",
        "url": "/Unblock_The_Ball/index.html",
        "description": "UnBlock Ball: Slide Puzzle is a simple and addictive Puzzle game. Use and storm your Brain and try to solve each Puzzle.",
        "instruction": "Mouse or tap to play.",
        "image": "/UnblockTheBall.jpg",
        "isPortrait": 1
    }, {
        "id": "208",
        "category": "Puzzle",
        "name": "Merge Block 2048",
        "url": "/MergeBlock2048/index.html",
        "description": "Tap, shoot and merge x2 block up to 2048 and more. More you yield, more points you get! 2048 is SUPER addictive puzzle game.",
        "instruction": "Are you ready to challenge yourself? Merge Block will keep you train and entertain your brain.",
        "image": "/MergeBlock2048.jpg",
        "isPortrait": 1
    }, {
        "id": "123",
        "category": "Racing",
        "name": "Police Panda Robot",
        "url": "/Police_Panda_Robot/index.html",
        "description": "Play this police panda transform robot Car game an ActIon-packed Adventure Car robot transformatIon game for 2022.",
        "instruction": "Get panda robot cop Car transform and face new challenges like never before. Face thrilling rescue missIons in panda robot Car transforming games 2022.",
        "image": "/Police_Panda_Robot.jpg",
        "isPortrait": 1
    }, {
        "id": "141",
        "category": "Shooting",
        "name": "Battle Tank",
        "url": "/Battle_Tank/index.html",
        "description": "Check out War Machines, which offers optIons for all-out army vs. army war, or play some quick 3-minute online military tank battles for a fast-paced adrenaline rush. War Machines is an epic free online war tank battle game, so download it now on your mobile device and become the world’s best military tank commander!",
        "instruction": "If you like to play top Car fighting games and live-or-die Shooting battles, this is definitely for you. Monsters dominate the world, global blitz combats take place across ground, sea and air. Hear the call? Unleash your Car's bullets, Shoot dead the enemies and win the game!",
        "image": "/Battle_Tank.png",
        "isPortrait": 1
    }, {
        "id": "226",
        "category": "Action",
        "name": "Air Warriors",
        "url": "/AirWarriors/index.html",
        "description": "In each of the 1945 Air Force campaigns, you will assume a squadron leader of an elite airforce unit, and engage in a team and solo action warfare.",
        "instruction": "Take control of a warplane and jump on the battlefield of 1945 Air Force - Airplane Shooting Games in this thrilling combat flight action game.",
        "image": "/Air-Warriors.jpg",
        "isPortrait": 1
    }, {
        "id": "172",
        "category": "Arcade",
        "name": "My Style Hotel Empire",
        "url": "/My-Style-Hotel-Empire/index.html",
        "description": "A GAME TO KEEP YOU FULLY OCCUPIED",
        "instruction": "A GAME TO KEEP YOU FULLY OCCUPIED",
        "image": "/My-Style-Hotel-Empire.png",
        "isPortrait": 1
    }, {
        "id": "229",
        "category": "Action",
        "name": "Mini War",
        "url": "/MiniWar/index.html",
        "description": "You, as a commander, will fight numerous battles through different terrains and weathers. You can choose from 20+ heroes and 50+ soldiers to build up your legion.",
        "instruction": "This is a Real-Time Strategy game",
        "image": "/Mini-War.jpg",
        "isPortrait": 1
    }, {
        "id": "212",
        "category": "Shooting",
        "name": "Millon Star",
        "url": "/Millon_Star/index.html",
        "description": "The alien invaders beat our squad, they destroyed all of galactica! Space team is waiting for your order! Please command ship to protect the galaxy and the surrounding asteroids.",
        "instruction": "Captain! We are in danger!",
        "image": "/Millon-Star.jpg",
        "isPortrait": 1
    }, {
        "id": "131",
        "category": "Arcade",
        "name": "Dunk Line",
        "url": "/DunkLine/index.html",
        "description": "New basketball hit is here!",
        "instruction": "Draw a line and make the falling ball to score the basket! Time your drawings properly and Avoid the bombs! Start drawing and dunk the balls!",
        "image": "/DunkLine.png",
        "isPortrait": 1
    }, {
        "id": "116",
        "category": "Racing",
        "name": "Fruit Rush",
        "url": "/Fruit-Rush/index.html",
        "description": "Fruit Rush is a Collecting running Arcade game with 3D watermelon Blocks and Platforms. As a pineapple man, you need to collect watermelon Blocks to overpass obstacles on the track to the finish line. The more you collect, the more coins you could win. Have a good time and complete all levels!",
        "instruction": "Touch to play",
        "image": "/Fruit-Rush.png",
        "isPortrait": 1
    }, {
        "id": "210",
        "category": "Shooting",
        "name": "Shoot Bubble Extreme",
        "url": "/Shoot_Bubble_Extreme/index.html",
        "description": "Form a group of 3 or more bubbles of the same color to pop the combination and clear the board. Win levels and advance along the bubble map",
        "instruction": "Pop bubbles and beat all the challenges!",
        "image": "/Shoot-Bubble-Extreme.jpg",
        "isPortrait": 1
    }, {
        "id": "191",
        "category": "Shooting",
        "name": "Bloody Battle",
        "url": "/Bloody_Battle/index.html",
        "description": "Destroy your enemies by using an arsenal of daggers,axes,swords,maces and hammers in the arena of champions.",
        "instruction": "Bloody Bastards is a physics-based medieval fighting game",
        "image": "/Bloody_Battle.jpg",
        "isPortrait": 1
    }, {
        "id": "167",
        "category": "Action",
        "name": "Like A Dino",
        "url": "/LikeADino/index.html",
        "description": "The most impressive game of 2020 so far! Jump from building to building and Shoot the dummies to destabilize them and make them fall from the top!",
        "instruction": "The most impressive game of 2020 so far! Jump from building to building and Shoot the dummies to destabilize them and make them fall from the top!",
        "image": "/LikeADino.png",
        "isPortrait": 1
    }, {
        "id": "166",
        "category": "Action",
        "name": "Knock balls",
        "url": "/knockballs/index.html",
        "description": "Throw balls at structures to make them collapse but be Careful not to exceed the allowed limit!",
        "instruction": "Each saved ball will count double at the next level, take advantage of it to apply you!One-tap easy-to-learn controls with stunning visual effects and addictive gameplay mechanics.",
        "image": "/knockballs.png",
        "isPortrait": 1
    }, {
        "id": "94",
        "category": "Arcade",
        "name": "Traffic Go",
        "url": "/Traffic_Go/index.html",
        "description": "Cross the streets without hitting Cars and get to the goal",
        "instruction": "Cross the streets without hitting Cars and get to the goal",
        "image": "/Traffic_Go.jpg",
        "isPortrait": 1
    }, {
        "id": "72",
        "category": "HyperCasual",
        "name": "Game Box",
        "url": "/Game_Box/index.html",
        "description": "This is a box Tetris",
        "instruction": "A Fun and challenging fruit slicing game You'll still need to plan your slice, which will keep repeating. Be Careful not to hit any bombs while slicing all the fruits in each level!",
        "image": "/Game_Box.jpg",
        "isPortrait": 1
    }, {
        "id": "136",
        "category": "Shooting",
        "name": "Count Shooter",
        "url": "/CountShooter/index.html",
        "description": "Grab your gun and enter the Shooting games!",
        "instruction": "Choose the best gate, pass through it, and Shoot the Zombie away in these Stickman games. Become the count master and lead your army to win!",
        "image": "/CountShooter.png",
        "isPortrait": 1
    }, {
        "id": "97",
        "category": "HyperCasual",
        "name": "Brain out",
        "url": "/brain_out/index.html",
        "description": "What is your IQ level? Blow your mind with Brain Out and show to your friends that you are not completely stupid!",
        "instruction": "Hey! Thank you for choosing us!",
        "image": "/brain_out.jpg",
        "isPortrait": 1
    }, {
        "id": "220",
        "category": "Casual",
        "name": "Jewels Blitz 4",
        "url": "/Jewels_Blitz4/index.html",
        "description": "Detonate as many gems as you can, 60 action-packed seconds at a time",
        "instruction": "Enjoy one minute of explosive match-3 fun",
        "image": "/Jewels-Blitz-4.jpg",
        "isPortrait": 1
    }, {
        "id": "90",
        "category": "Arcade",
        "name": "Slap King",
        "url": "/Slap_King/index.html",
        "description": "lay and have Fun with no repercussIons. See if you can K.O. the competitIon in this no-holds barred slap smacking tournament. Stick out your face to take a hit. Time everything right to lay out the competitIon. Do you know your own strength? You are about to find out!",
        "instruction": "lay and have Fun with no repercussIons. See if you can K.O. the competitIon in this no-holds barred slap smacking tournament. Stick out your face to take a hit. Time everything right to lay out the competitIon. Do you know your own strength? You are about to find out!",
        "image": "/Slap_King.jpg",
        "isPortrait": 1
    }, {
        "id": "91",
        "category": "HyperCasual",
        "name": "Slice It",
        "url": "/Slice_It/index.html",
        "description": "Cut everything in half. Slice It All is a Casual game, a very comfortable slice game. All you have to do is click the screen or mouse to keep the knife in the air and not drop it into the sea. Complete the level. Have Fun!",
        "instruction": "In this game, you need to slice obstacles ahead of you! Tap to flip your knife and neatly slice varIous obstacles on your path into equal halves! ",
        "image": "/Slice_It.jpg",
        "isPortrait": 1
    }, {
        "id": "240",
        "category": "Casual",
        "name": "Stack Ball",
        "url": "/Stack_Ball/index.html",
        "description": "Your ball moves like a brick through the colorful platforms that prevent it from landing, but once you hit a black one, it's over!",
        "instruction": "A 3D arcade game where players can smash",
        "image": "/Stack-Ball.jpg",
        "isPortrait": 1
    }, {
        "id": "225",
        "category": "Casual",
        "name": "Music Battle",
        "url": "/MusicBattle/index.html",
        "description": "Tap the music arrow when it reaches the scoring area",
        "instruction": "This a funkin music game",
        "image": "/Music-Battle.jpg",
        "isPortrait": 1
    }, {
        "id": "34",
        "category": "HyperCasual",
        "name": "Clean House 3D",
        "url": "/Clean_House_3D/index.html",
        "description": "Control the directIon of the eraser and clean the entire wall. Come and clean your house.",
        "instruction": "Open your own laundry! Serve people at the checkout and hire helpers. Upgrade the Skills of your employees to make your Clean House even more profitable!",
        "image": "/Clean_House_3D.jpg",
        "isPortrait": 1
    }, {
        "id": "188",
        "category": "Racing",
        "name": "Hill Climber Desert Edition",
        "url": "/Hill_Climber_Desert_Edition/index.html",
        "description": "Hill Climb Racing is free to play and offline but there are optional in-app purchases available.",
        "instruction": "From the Creators of the original Hill Climb Racing",
        "image": "/Hill_Climber_Desert_Edition.jpg",
        "isPortrait": 0
    }, {
        "id": "150",
        "category": "Racing",
        "name": "Bicycle Stunt Race",
        "url": "/BicycleStuntRace/index.html",
        "description": "Get ready for a thrilling bicycle stunt Adventure. Pedal your unchained BMX for a crazy bike riding experience.",
        "instruction": "Take control of your mountain bicycle and park in the parking lots by crossing all obstacles of mega ramps. Unleash your reckless driving and enjoy fearless bike riding on snow, dirt, and hill tracks of this crazy bicycle game.",
        "image": "/BicycleStuntRace.png",
        "isPortrait": 1
    }, {
        "id": "158",
        "category": "Action",
        "name": "Draw Defence",
        "url": "/Draw_Defence/index.html",
        "description": "An army is at your disposal. Simply draw your forces to set up a defense line and protect your castle!",
        "instruction": "Different drawing, different forces. Draw your best formatIon to counter enemy attack.Drawing consumes ink, make sure you use it wisely.",
        "image": "/Draw_Defence.png",
        "isPortrait": 1
    }, {
        "id": "223",
        "category": "Puzzle",
        "name": "Rescue Laura",
        "url": "/Rescue_Laura/index.html",
        "description": "This story is about a boy and his girlfriend. The girl was kidnapped by gangsters for ransom. Faced with many dangers, challenges and difficulties, the boy is determined to save the girl",
        "instruction": "Choose the correct answer to complete",
        "image": "/Rescue-Laura.jpg",
        "isPortrait": 1
    }, {
        "id": "246",
        "category": "Casual",
        "name": "2PlayerBattle",
        "url": "/2PlayerBattle/index.html",
        "description": "Welcome to 2 Player Games Online, the new and exciting casual game to make friends while playing your favorite 1v1 two player games",
        "instruction": "Try 1v1 two player games",
        "image": "/2PlayerBattle.png",
        "isPortrait": 1
    }, {
        "id": "228",
        "category": "Puzzle",
        "name": "PetCrush",
        "url": "/PetCrush/index.html",
        "description": "Match two or more blocks of the same color to clear the level and save the pets from the evil Pet Snatchers! Moves are limited so plan them carefully. Your puzzle skills will be tested with hours of block busting fun!",
        "instruction": "Pet Rescue Saga, from the makers of Candy Crush Saga & Farm Heroes Saga!",
        "image": "/PetCrush.jpg",
        "isPortrait": 1
    }, {
        "id": "140",
        "category": "Arcade",
        "name": "Stack Zoo",
        "url": "/StackyZoo/index.html",
        "description": "It's Stacky time!",
        "instruction": "Win animals to stack into giant, crazy Towers! Challenge friends to beat your Stack and level-up to unlock more residents for your collectIon.",
        "image": "/StackyZoo.png",
        "isPortrait": 1
    }, {
        "id": "100",
        "category": "HyperCasual",
        "name": "water flow",
        "url": "/water_flow/index.html",
        "description": "Extremely easy to play yet not that easy to give up.Adjust pins by pulling or dragging them.Make your way trough pipes.If you've been looking for a pull the pin Puzzle game for a long time, it's time to explore it.",
        "instruction": "Solve Puzzle to improve you logical thinking Skills with this extremely interesting Puzzle game! ",
        "image": "/water_flow.jpg",
        "isPortrait": 1
    }, {
        "id": "125",
        "category": "Arcade",
        "name": "Long Neck Run",
        "url": "/Long_Neck_Run/index.html",
        "description": "What will you do if you are tall enough to look down the Effiel Tower?",
        "instruction": "Here is a Collecting Arcade game with 3D Stickman game art animatIons. Your target is to collect as many of the same colorful rings as your current color as you can while running forward to the finish Platform. Then you will see taller and taller buildings and items. I hope you will unlock taller buildings!",
        "image": "/Long_Neck_Run.png",
        "isPortrait": 1
    }, {
        "id": "147",
        "category": "Action",
        "name": "Ninja Slash",
        "url": "/NinjaSlash/index.html",
        "description": "Ninja Slash ! A Fun Arcade game where all you have to do is dash, slash & slice!",
        "instruction": "Dash through the hundreds of challenging levels and cut all your targets in pieces who dare to stop you! Could you prove you're a true ninja master?",
        "image": "/NinjaSlash.png",
        "isPortrait": 1
    }, {
        "id": "222",
        "category": "Casual",
        "name": "Solitaire kawaii",
        "url": "/SolitaireKawaii/index.html",
        "description": "Choose between standard 1card or 3card draw",
        "instruction": "Play unlimited games with this Classic Solitai",
        "image": "/Solitaire-kawaii.jpg",
        "isPortrait": 1
    }, {
        "id": "214",
        "category": "Racing",
        "name": "Real Moto Race",
        "url": "/Real_Moto_Race/index.html",
        "description": "Surpass maximum speed around the circuit",
        "instruction": "Experience the top tier motorcycle racing!",
        "image": "/Real-Moto-Race.jpg",
        "isPortrait": 1
    }, {
        "id": "242",
        "category": "Racing",
        "name": "Stunt Motorcycle",
        "url": "/Stunt_MotorCycle/index.html",
        "description": "Let's explore a real bike stunt racing world that is full of challenging tracks and xtreme bike games!",
        "instruction": "Are you a trial bike stunt racing master",
        "image": "/Stunt-Motorcycle.jpg",
        "isPortrait": 1
    }, {
        "id": "236",
        "category": "Casual",
        "name": "Domino Master",
        "url": "/Domino/index.html",
        "description": "*This easy to learn but impossible to master strategy game is beautifully designed and endlessly entertaining! \n*Play opponents at your own pace or see who's online right now for even faster gameplay.",
        "instruction": "An addictive domino game",
        "image": "/Domino-Master.jpg",
        "isPortrait": 1
    }, {
        "id": "244",
        "category": "Puzzle",
        "name": "Brain Test",
        "url": "/BrainTest/index.html",
        "description": "Brain Challenge is an addicting free tough puzzle game with a series of challenging brain teasers to solve.",
        "instruction": "Use mouse to click and drag.",
        "image": "/Brain-Test.jpg",
        "isPortrait": 1
    }, {
        "id": "163",
        "category": "Arcade",
        "name": "HangMan Dily",
        "url": "/HangManDily/index.html",
        "description": "Enjoy the hangman game on your mobile or tablet! This gallow classic game is suitable for all ages, especially for those adults who want to practice their language Skills and vocabulary or Kids learning new words. The classic hangman for your device.",
        "instruction": "Hangman comes also with a 2 player mode where you can write your own word and play with your friends and family. Choose a word and enjoy the game with unlimited words. They will have to guess it using hints. Really Fun mode!",
        "image": "/HangManDily.png",
        "isPortrait": 1
    }, {
        "id": "142",
        "category": "Shooting",
        "name": "Battle RoYale",
        "url": "/BattleRoYale/index.html",
        "description": "If you like to play top Car fighting games and live-or-die Shooting battles, this is definitely for you. Monsters dominate the world, global blitz combats take place across ground, sea and air. Hear the call? Unleash your Car's bullets, Shoot dead the enemies and win the game!",
        "instruction": "If you like to play top Car fighting games and live-or-die Shooting battles, this is definitely for you. Monsters dominate the world, global blitz combats take place across ground, sea and air. Hear the call? Unleash your Car's bullets, Shoot dead the enemies and win the game!",
        "image": "/BattleRoYale.png",
        "isPortrait": 1
    }, {
        "id": "149",
        "category": "Shooting",
        "name": "Archery Training",
        "url": "/ArcheryTraining/index.html",
        "description": "Go fish in the sea, swim, collect fishes like goldfish, starfish, koi fish and add them in your fish tank to expand your aquarium mini mart and attract more visitors and buyers and become the best zoo tycoon in the Idle sea park!",
        "instruction": "Go fish in the sea, swim, collect fishes like goldfish, starfish, koi fish and add them in your fish tank to expand your aquarium mini mart and attract more visitors and buyers and become the best zoo tycoon in the Idle sea park!",
        "image": "/ArcheryTraining.png",
        "isPortrait": 1
    }, {
        "id": "192",
        "category": "Shooting",
        "name": "Monster Shooter World",
        "url": "/Monster_Shooter_World/index.html",
        "description": "You need to be a truly experienced and skilled warrior to make it through the hordes of enemies. The dynamic flow of the game will force you to use your fighting reflexes to their maximum,simultaneously putting your strategic thinking to a test. This space fighting-RPG game will keep you on your toes every second of the gameplay!",
        "instruction": "Set out together with your trusty companions on a space odyssey!",
        "image": "/Monster_Shooter_World.jpg",
        "isPortrait": 1
    }, {
        "id": "245",
        "category": "Puzzle",
        "name": "Troll Thief Stickman Puzzle",
        "url": "/Troll_Thief_Stickman_Puzzle/index.html",
        "description": "Thief puzzle is so amazing game where you can steal it! You will see skibidi toilet and steal something!",
        "instruction": "where you can control a mischievous stickman with an extraordinary skill",
        "image": "/Troll_Thief_Stickman_Puzzle.png",
        "isPortrait": 1
    }, {
        "id": "132",
        "category": "Racing",
        "name": "Flying Moto",
        "url": "/flyingmoto/index.html",
        "description": "Flying Motorcycle with ActIon filled bike flight and Moto tracks",
        "instruction": "Fly your US bike and cross hurdles to perform Fun Motorcycle stunt. Easy controls and stunning graphics of this US Real simulator would keep you engaged for hours.",
        "image": "/flyingmoto.png",
        "isPortrait": 1
    }, {
        "id": "73",
        "category": "HyperCasual",
        "name": "Jumpz",
        "url": "/Jumpz/index.html",
        "description": "Jump over Blocks and get a high score.",
        "instruction": "Obstacle course (Obby) Skill game, classic mode from your favorite game right in the browser on your computer and phone!",
        "image": "/Jumpz.jpg",
        "isPortrait": 1
    }, {
        "id": "202",
        "category": "Action",
        "name": "Spin Master",
        "url": "/Spin_Master/index.html",
        "description": "Explore hundreds of maps in the monster world.",
        "instruction": "This mini action RPG game is addictive.",
        "image": "/Spin_Master.png",
        "isPortrait": 1
    }, {
        "id": "224",
        "category": "Puzzle",
        "name": "SuDo Block",
        "url": "/SuDoBlock/index.html",
        "description": "*It's a relaxing yet strategic block puzzle that will have you hooked in no time!",
        "instruction": "Block Sudoku combines a wood block puzzle game",
        "image": "/SuDo-Block.jpg",
        "isPortrait": 1
    }, {
        "id": "95",
        "category": "Arcade",
        "name": "Traffic Run Online",
        "url": "/Traffic_Run_Online/index.html",
        "description": "Do you like to drive? Then play Traffic Run to see how fast you are and how good your reflexes are. Drive a variety of vehicles. Test your ability to navigate through intersectIons. It's possible that you'll have to leap over a train or other moving vehicles. Pass through a busy intersectIon until you reach the finish line. Enjoy all these and more for FREE! FEATURES: Tap/hold LMB to start the Car. Release to Stop. Unlock thirty-nine colorful vehicles either by coins or watching videos Try to complete as many levels as you can. The more you go further in the game, the harder the level. Get ready to encounter different types of vehicles, roads and intersectIons. Graphic and sound effects are good Background music is suitable for the game You will enjoy every colorful setting.",
        "instruction": "Cross the streets without hitting Cars and get to the goal",
        "image": "/Traffic_Run_Online.jpg",
        "isPortrait": 1
    }, {
        "id": "106",
        "category": "HyperCasual",
        "name": "Amaze",
        "url": "/Amaze/index.html",
        "description": "Super Hit mobile game \"Amaze!\" now comes to web. Swipe to move the ball and paint - you’ve got to color and paint your way across the AMAZE maze Puzzles.",
        "instruction": "It's a very excellent classic and simple style leisure and Fun mobile game. The game will definitely bring you the best Fun challenge. If you like 3D Puzzle game, don't miss this one. Color the whole area using your ball, have a good time in the game Amaze!!!",
        "image": "/Amaze.jpg",
        "isPortrait": 1
    }, {
        "id": "221",
        "category": "Casual",
        "name": "Ludo Mani Game",
        "url": "/LudoManiGame/index.html",
        "description": "You can only start moving when a 6 is rolled.",
        "instruction": "The best board game to play with friends!",
        "image": "/Ludo-Mani-Game.jpg",
        "isPortrait": 1
    }, {
        "id": "237",
        "category": "Puzzle",
        "name": "Dice",
        "url": "/dice/index.html",
        "description": "*Dice Master is a puzzle game where the same coloured dices are merged to form a new dice. \n*Unlimited merging fun for hours. Dice-Merge Puzzle is the game to go when you need something challenging and at the same time relaxing.",
        "instruction": "Check out Dic for a challenging",
        "image": "/Dice.jpg",
        "isPortrait": 1
    }, {
        "id": "107",
        "category": "HyperCasual",
        "name": "Color Roll 3D",
        "url": "/Color_Roll_3D/index.html",
        "description": "Color Roll 3D 2 is a Puzzle game. Unfold the color roll in order. But you need to be the same as the given picture. So you need to observe which one is on the top, and which one is on the bottom. It will help you play easily. Have Fun!",
        "instruction": "Color Roll 3D 2 is a Puzzle game. Unfold the color roll in order. But you need to be the same as the given picture. So you need to observe which one is on the top, and which one is on the bottom. It will help you play easily. Have Fun!",
        "image": "/Color_Roll_3D.jpg",
        "isPortrait": 1
    }, {
        "id": "195",
        "category": "Action",
        "name": "Conn Block",
        "url": "/ConnBlock/index.html",
        "description": "*Swipe numbers up, down, left, right, and diagonally in any of the eight directions, link the same numbers to connect;\nThe more numbers connected at one time, the larger numbers can be combined;\n*Get higher numbers when you merge multiple same numbers together.\n*Keep merging numbers to get the hi",
        "instruction": "This a simple and cool digital connection game",
        "image": "/ConnBlock_2248.png",
        "isPortrait": 1
    }, {
        "id": "143",
        "category": "Racing",
        "name": "Carrom Challenge",
        "url": "/CarromChallenge/index.html",
        "description": "Carrom Challenge is an Offline Carrom game designed to play with your friends and family members. It has all the Fun you may find in online games.",
        "instruction": "Carrom is a classic board game originated in the Indian subcontinent. In this game, one player has to score points by potting all the black pucks while another player has to pot white pucks. The player who pots all his pucks before the opponent is the winner of the game. The vital conditIon to complete the game is that a queen (red or pink puck) has to be socred followed by a puck cover. ",
        "image": "/CarromChallenge.png",
        "isPortrait": 1
    }, {
        "id": "235",
        "category": "Casual",
        "name": "Bubble vs Blocks",
        "url": "/BubbleVSBlocks/index.html",
        "description": "\"*Hold the screen with your finger and move to aim.\n*Bumping bricks with balls to cause damage to bricks\n*Bricks break will -1 per collision, when balls to 0, brick breaks.\n*When the bricks reach the bottom, the game ends.\n*Break all bricks, the game pass.\"",
        "instruction": "The most addictive Bricks Breaker game",
        "image": "/Bubble-vs-Blocks.jpg",
        "isPortrait": 1
    }, {
        "id": "251",
        "category": "Shooting",
        "name": "Bubble Pop Shoot",
        "url": "/BubblePopShoot/index.html",
        "description": "Form a group of 3 or more bubbles of the same color to pop the combination and clear the board. Win levels and advance along the bubble map",
        "instruction": "Pop bubbles and beat all the challenges!",
        "image": "/Bubble-Pop-Shoot.jpg",
        "isPortrait": 1
    }, {
        "id": "152",
        "category": "Puzzle",
        "name": "Braindom  Who Is Lying",
        "url": "/Braindom2WhoIsLying/index.html",
        "description": "Thinking games and riddles will twist your mind and Puzzle you. Wash your Brain with mind games and Puzzle games.",
        "instruction": "Do you have what it takes to beat each level? Who did it - solve riddles to find out who is who, who is lying and who is the culprit! Braindom 2 brings you the ultimate Brain app with tricky Puzzles in this, the best of thinking games and Brain games.",
        "image": "/Braindom2WhoIsLying.png",
        "isPortrait": 1
    }, {
        "id": "193",
        "category": "Racing",
        "name": "Moto Hunter",
        "url": "/Moto_Hunter/index.html",
        "description": "This tough survival and battle-type game is most suited to highly competitive gamers who love Bike Hunter War 3D : Moto Race Bike Game 2022 with an added bite! Sharp decision making and strategy,as well as hawk-like observation skills are extremely important here.",
        "instruction": "Are you ready for bike games?",
        "image": "/Moto_Hunter.jpg",
        "isPortrait": 1
    }, {
        "id": "151",
        "category": "Puzzle",
        "name": "Block Slither",
        "url": "/block_slither/index.html",
        "description": "Game based on the idea of Matching cubes color to have the best scoreyou have to play fast",
        "instruction": "Game based on the idea of Matching cubes color to have the best score you have to play fast",
        "image": "/block_slither.png",
        "isPortrait": 1
    }, {
        "id": "89",
        "category": "Shooting",
        "name": "Shot Trigger",
        "url": "/Shot_Trigger/index.html",
        "description": "Our hero will rescue the civilians from the underworld. Can you help him?",
        "instruction": "Our hero will rescue the civilians from the underworld. Can you help him?",
        "image": "/Shot_Trigger.jpg",
        "isPortrait": 1
    }, {
        "id": "165",
        "category": "Action",
        "name": "Knock Rush",
        "url": "/Knock_Rush/index.html",
        "description": "The most impressive game of 2020 so far! Jump from building to building and Shoot the dummies to destabilize them and make them fall from the top!",
        "instruction": "The most impressive game of 2020 so far! Jump from building to building and Shoot the dummies to destabilize them and make them fall from the top!",
        "image": "/Knock_Rush.png",
        "isPortrait": 1
    }, {
        "id": "105",
        "category": "HyperCasual",
        "name": "Emoji game",
        "url": "/Emoji_game/index.html",
        "description": "A new imaginatIon game in which you need to connect pairs of emotIons by associatIons. Think and find the idea of each Puzzle. Just tap one by one on the elements from different columns to connect them with a line. Or drag to draw a line and connect elements from different columns. If you correctly connect all the elements, you pass the level. Harder than you think!",
        "instruction": "Emoji Maze is a Fun game themed around the well-known Emojis, you can choose which Emoji to play with. Collect the likes through the maze, Avoiding being caught by enemies, complete all levels and be the winner.",
        "image": "/Emoji_game.jpg",
        "isPortrait": 1
    }, {
        "id": "232",
        "category": "Casual",
        "name": "Match Goods 3D",
        "url": "/Match_Goods_3D/index.html",
        "description": "Tap same 3d items to shopping cart* 3 of same items will be cleared* Enjoy fun match 3d game and great features like skill card collections* Complete the different missions and win great rewards* ATTENTION! Each level has a timer, so you must move fast & reach the level goal!",
        "instruction": "How much can you take away in a limited time?",
        "image": "/Match-Goods-3D.jpg",
        "isPortrait": 1
    }, {
        "id": "130",
        "category": "Arcade",
        "name": "Crazy Road",
        "url": "/Crazy_Road/index.html",
        "description": "Drive your Car safely and reach 100 points of your score",
        "instruction": "Try to collect starts on the road, each worths 10 points!!",
        "image": "/Crazy_Road.png",
        "isPortrait": 1
    }, {
        "id": "129",
        "category": "Shooting",
        "name": "Tug of War",
        "url": "/Tug_of_War/index.html",
        "description": "Multiple levels and environments are waiting for you to defeat your enemies!",
        "instruction": "Multiple levels and environments are waiting for you to defeat your enemies!",
        "image": "/Tug_of_War.png",
        "isPortrait": 1
    }, {
        "id": "211",
        "category": "Puzzle",
        "name": "Erase One Part",
        "url": "/EraseOnePart/index.html",
        "description": "Let your imagination run wild! Will the criminal succeed in robbing a bank, or will the police catch him first? What is the wife hiding from her husband?",
        "instruction": "Think you’re smart? Then delete one part!",
        "image": "/Erase-One-Part_icon.jpg",
        "isPortrait": 1
    }, {
        "id": "209",
        "category": "Puzzle",
        "name": "Rescue The Lover",
        "url": "/RescueTheLover/index.html",
        "description": "This story is about a boy and his girlfriend. The girl was kidnapped by gangsters for ransom. Faced with many dangers, challenges and difficulties, the boy is determined to save the girl",
        "instruction": "Choose the correct answer to complete",
        "image": "/Rescue-The-Lover.jpg",
        "isPortrait": 1
    }, {
        "id": "219",
        "category": "Puzzle",
        "name": "Maze Thief",
        "url": "/Maze_Thief/index.html",
        "description": "Tap on the thief to start drawing paths",
        "instruction": "Play as a thief and steal treasure",
        "image": "/Maze-Thief.jpg",
        "isPortrait": 1
    }, {
        "id": "185",
        "category": "Racing",
        "name": "Soccer ChampIonship",
        "url": "/soccer-championship/index.html",
        "description": "Manage your team and try to lead them to sweet success in this Fun and thrilling Soccer game. Includes hundreds of real football leagues and cups from around the world, as well as loads of local clubs and natIonal teams.",
        "instruction": "Take your natIonal team to Qatar and compete in the most prestigIous Soccer competitIon in the world.The sleek interface will completely immerse you in the electrifying drama of every match. Impress the fans and pass, dribble and Shoot your way to victory using intuitive swipe-controls.",
        "image": "/soccer-championship.png",
        "isPortrait": 0
    }, {
        "id": "148",
        "category": "Action",
        "name": "Num Breaker",
        "url": "/Num_Breaker/index.html",
        "description": "The ball flies to wherever you touched.Clear the stages by removing Bricks on the board. Break the Bricks and never let them hit the bottom.Find best positIons and angles to hit every brick.",
        "instruction": "The ball flies to wherever you touched.Clear the stages by removing Bricks on the board. Break the Bricks and never let them hit the bottom.Find best positIons and angles to hit every brick.",
        "image": "/Num_Breaker.png",
        "isPortrait": 1
    }, {
        "id": "162",
        "category": "Arcade",
        "name": "First Fury",
        "url": "/FirstFury/index.html",
        "description": "Fist of Fury is a martial arts guru game about the Balance between zen meditatIon and fierce fight.",
        "instruction": "Be fast. Be fearless. Be flexible. Empty your mind and be shapeless – like water. Forget about yourself and follow the opponents’ movements. Train harder, punch faster, unlock new epic heroes and try their exclusive power-ups.",
        "image": "/FirstFury.png",
        "isPortrait": 1
    }, {
        "id": "239",
        "category": "Racing",
        "name": "Battle Cars",
        "url": "/Battle_Cars/index.html",
        "description": "*A new game of racing, survival, explosion, extreme survival. \n*Drive your car and collect equipment on the track. \n*This will be your secret weapon for survival in the arena. \n*After entering the arena, you need to defeat all opponents to win.",
        "instruction": "Tap and slide to move.",
        "image": "/Battle-Cars.jpg",
        "isPortrait": 1
    }, {
        "id": "112",
        "category": "HyperCasual",
        "name": "Happy break",
        "url": "/Happy_break/index.html",
        "description": "he best killing time game ever！Happy Ball Brick is a classic and great brick game.Just touch on the screen to Shoot your physics balls and break the Bricks.",
        "instruction": "Shoot balls to the parcels to get your harvest.",
        "image": "/Happybreak.jpg",
        "isPortrait": 1
    }]
}
/*!Lazy Load 2.0.0-rc.2 - MIT license - Copyright 2007-2019 Mika Tuupola*/
!function(t, e) {
    "object" == typeof exports ? module.exports = e(t) : "function" == typeof define && define.amd ? define([], e) : t.LazyLoad = e(t)
}("undefined" != typeof global ? global : this.window || this.global, function(t) {
    "use strict";
    function e(t, e) {
        this.settings = s(r, e || {}),
        this.images = t || document.querySelectorAll(this.settings.selector),
        this.observer = null,
        this.init()
    }
    "function" == typeof define && define.amd && (t = window);
    const r = {
        src: "data-src",
        srcset: "data-srcset",
        selector: ".lazyload",
        root: null,
        rootMargin: "0px",
        threshold: 0
    }
      , s = function() {
        let t = {}
          , e = !1
          , r = 0
          , o = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0],
        r++);
        for (; r < o; r++)
            !function(r) {
                for (let o in r)
                    Object.prototype.hasOwnProperty.call(r, o) && (e && "[object Object]" === Object.prototype.toString.call(r[o]) ? t[o] = s(!0, t[o], r[o]) : t[o] = r[o])
            }(arguments[r]);
        return t
    };
    if (e.prototype = {
        init: function() {
            if (!t.IntersectionObserver)
                return void this.loadImages();
            let e = this
              , r = {
                root: this.settings.root,
                rootMargin: this.settings.rootMargin,
                threshold: [this.settings.threshold]
            };
            this.observer = new IntersectionObserver(function(t) {
                Array.prototype.forEach.call(t, function(t) {
                    if (t.isIntersecting) {
                        e.observer.unobserve(t.target);
                        let r = t.target.getAttribute(e.settings.src)
                          , s = t.target.getAttribute(e.settings.srcset);
                        "img" === t.target.tagName.toLowerCase() ? (r && (t.target.src = r),
                        s && (t.target.srcset = s)) : t.target.style.backgroundImage = "url(" + r + ")"
                    }
                })
            }
            ,r),
            Array.prototype.forEach.call(this.images, function(t) {
                e.observer.observe(t)
            })
        },
        loadAndDestroy: function() {
            this.settings && (this.loadImages(),
            this.destroy())
        },
        loadImages: function() {
            if (!this.settings)
                return;
            let t = this;
            Array.prototype.forEach.call(this.images, function(e) {
                let r = e.getAttribute(t.settings.src)
                  , s = e.getAttribute(t.settings.srcset);
                "img" === e.tagName.toLowerCase() ? (r && (e.src = r),
                s && (e.srcset = s)) : e.style.backgroundImage = "url('" + r + "')"
            })
        },
        destroy: function() {
            this.settings && (this.observer.disconnect(),
            this.settings = null)
        }
    },
    t.lazyload = function(t, r) {
        return new e(t,r)
    }
    ,
    t.jQuery) {
        const r = t.jQuery;
        r.fn.lazyload = function(t) {
            return t = t || {},
            t.attribute = t.attribute || "data-src",
            new e(r.makeArray(this),t),
            this
        }
    }
    return e
});
