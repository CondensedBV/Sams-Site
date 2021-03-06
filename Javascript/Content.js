/*this stores all the gamedata for the store page.
	Template:
	--------
	{
		Name: "GameName",
		Description: "A small description of 5 lines max.",
		Price: 5.00,
		Discount: 99,
		ImageUrl:"Images/Games/GamePlaceholder.jpg",
		VideoUrl: "",
		MinSpecs: {
			OS:"Windows 2.11",
			Processor: "Intel i3",
			Memory: 1.5,
			HardDisk: 15,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS:"Windows 2.11",
			Processor: "Intel i3",
			Memory: 1.5,
			HardDisk: 15,
			VideoCard: "DirectX 9.0"
		}
	}
	--------
*/

var Games = [{
		Name: "Call of Duty: Black Ops II",
		Description: "Call of Duty®: Black Ops II, dat de grenzen verlegt van de records vestigende entertainmentfranchise waar de fans gewend aan zijn, stuurt spelers naar de nabije toekomst, de Koude Oorlog van de 21e eeuw, waar technologie en wapens samenkomen om een nieuwe generatie oorlogsvoering te creëren.",
		Price: 59.99,
		Discount: 99,
		ImageUrl: "Images/Games/blackops2.jpg",
		VideoUrl: "https://www.youtube.com/embed/4wIZp_E2CxQ",
		MinSpecs: {
			OS: "Windows Vista SP2",
			Processor: "Intel Core2 Duo",
			Memory: 2,
			HardDisk: 16,
			VideoCard: "Nvidia GeForce 8800GT or ATI Radeon HD 3870"
		},
		RecSpecs: {
			OS: "Windows 10",
			Processor: "Intel i7",
			Memory: 16,
			HardDisk: 16,
			VideoCard: "Nvidia GeForce Titan X"
		}

	},
	{
		Name: "Borderlands 2",
		Description: "Een nieuw tijdperk van 'shoot and loot' staat te beginnen. Speel als één van de vier nieuwe vault hunters, die een gigantische nieuwe wereld vol schepsels, psychopaten en het kwaadaardige meesterbrein, Handsome Jack, het hoofd moeten bieden. Maak nieuwe vrienden, bewapen ze met een bazillioen wapens en vecht samen met hen in 4-speler co-op op een meedogenloze zoektocht naar wraak en verlossing dwars over de onontdekte en onvoorspelbare levende planeet.",
		Price: 29.99,
		Discount: 75,
		ImageUrl: "Images/Games/borderlands2.jpg",
		VideoUrl: "https://www.youtube.com/embed/5TW0wJTFLiw",
		MinSpecs: {
			OS: "Windows Vista SP2",
			Processor: "Intel Core2 Duo",
			Memory: 2,
			HardDisk: 16,
			VideoCard: "Nvidia GeForce 8800GT or ATI Radeon HD 3870"
		},
		RecSpecs: {
			OS: "Windows 10",
			Processor: "Intel i7",
			Memory: 16,
			HardDisk: 16,
			VideoCard: "Nvidia GeForce Titan X"
		}
	},
	{
		Name: "Garry's Mod",
		Description: "Garry's Mod is een natuurkundige zandbak. In tegenstelling tot andere spellen zijn er geen vooraf bepaalde plannen of doelen. We geven jou de materialen en je bepaalt zelf wat je ermee doet. Je produceert voorwerpen en voegt ze samen om je eigen apparaten te creëren, of het nu een voertuig is, een raket, een katapult of iets dat nog geen naam heeft... dat bepaal je helemaal zelf. En als je niet zo'n doe-het-zelver bent, geen probleem! Je kunt ook allerlei personages in malle standen zetten.",
		Price: 9.99,
		Discount: 95,
		ImageUrl: "Images/Games/Gmod.png",
		VideoUrl: "https://www.youtube.com/embed/jDchc5Ww_i8",
		MinSpecs: {
			OS: "Windows® Vista/XP",
			Processor: "Intel i3",
			Memory: 2,
			HardDisk: 5,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows® 7/8/8.1/10",
			Processor: "Intel i5",
			Memory: 8,
			HardDisk: 10,
			VideoCard: "Versie 9.0c"
		}
	},
	{
		Name: "Need For Speed: Hot Pursuit",
		Description: "Word de topagent of meest gezochte racer van Seacrest County!",
		Price: 14.99,
		Discount: 0,
		ImageUrl: "Images/Games/needforspeedhotpursuit.jpg",
		VideoUrl: "https://www.youtube.com/embed/D6ouHWP0KrY",
		MinSpecs: {
			OS: "Windows XP SP3",
			Processor: "Intel Core® 2 Duo 2.0 GHZ",
			Memory: 1,
			HardDisk: 8,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 7 (32- of 64-bit)",
			Processor: "Intel i5",
			Memory: 8,
			HardDisk: 20,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Binding of Isaac: Rebirth",
		Description: "The Binding of Isaac: Rebirth is a randomly generated action RPG shooter with heavy Rogue-like elements. Following Isaac on his journey players will find bizarre treasures that change Isaac’s form giving him super human abilities and enabling him to fight off droves of mysterious creatures, discover secrets.",
		Price: 14.99,
		Discount: 25,
		ImageUrl: "Images/Games/thebindingofisaac.png",
		VideoUrl: "https://www.youtube.com/embed/vSBW4N-Cgsk",
		MinSpecs: {
			OS: "Windows XP",
			Processor: "Intel Core 2 Duo",
			Memory: 0.5,
			HardDisk: 15,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: " Windows 8 / 7",
			Processor: "Intel i3",
			Memory: 8,
			HardDisk: 0.5,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Payday 2",
		Description: "PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew - Dallas, Hoxton, Wolf and Chains - as they descend on Washington DC for an epic crime spree.",
		Price: 59.99,
		Discount: 50,
		ImageUrl: "Images/Games/payday2.jpg",
		VideoUrl: "https://www.youtube.com/embed/Gb-_DKC6wc4",
		MinSpecs: {
			OS: "Windows 7",
			Processor: "Intel i3",
			Memory: 4,
			HardDisk: 31,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 10",
			Processor: "Intel i5",
			Memory: 8,
			HardDisk: 45,
			VideoCard: "DirectX 9.0",
		}
	},
	{
		Name: "Minecraft",
		Description: "Minecraft is sandbox en adventure game. Het kan gespeeld worden in de modus singleplayer of de modus multiplayer.",
		Price: 19.99,
		Discount: 89,
		ImageUrl: "Images/Games/minecraft.jpg",
		VideoUrl: "https://www.youtube.com/embed/FaMTedT6P0I",
		MinSpecs: {
			OS: "Windows 2.11",
			Processor: "Intel platinum",
			Memory: 2,
			HardDisk: 20,
			VideoCard: "DirectX 9.0",
		},
		RecSpecs: {
			OS: "Windows 2.11",
			Processor: "Intel i5",
			Memory: 8,
			HardDisk: 50,
			VideoCard: "DirectX 9.0",
		}
	},
	{
		Name: "Sid Meier’s Civilization® VI",
		Description: "Civilization VI biedt je nieuwe manieren om interactie aan te gaan met je wereld, je keizerrijk uit te breiden, je cultuur te laten groeien en om het op te nemen tegen de grootste leiders uit de geschiedenis. Bouw een beschaving die de tand de tijds kan doorstaan!",
		Price: 59.99,
		Discount: 0,
		ImageUrl: "Images/Games/SidMeiersCivilizationVI.png",
		VideoUrl: "https://www.youtube.com/embed/6z5WbNMRe_g",
		MinSpecs: {
			OS: "Windows 7",
			Processor: "Intel i3",
			Memory: 4,
			HardDisk: 12,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Intel i5",
			Memory: 8,
			HardDisk: 12,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Rocket League®",
		Description: "Soccer meets driving once again in the long-awaited, physics-based multiplayer-focused sequel to Supersonic Acrobatic Rocket-Powered Battle-Cars! Choose a variety of high-flying vehicles equipped with huge rocket boosters to score amazing aerial goals and pull-off incredible ",
		Price: 19.99,
		Discount: 0,
		ImageUrl: "Images/Games/rocketleague.jpg",
		VideoUrl: "https://www.youtube.com/embed/Vawwy2eu5sA",
		MinSpecs: {
			OS: " Windows 7",
			Processor: "Intel i3",
			Memory: 2,
			HardDisk: 7,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: " Windows 7",
			Processor: "Intel i5",
			Memory: 4,
			HardDisk: 7,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Cuphead",
		Description: "Cuphead is een klassieke 'run and gun' actiegame waarin baasgevechten centraal staan. De game is geïnspireerd door tekenfilms uit de jaren 1930. Voor het beeld en geluid zijn dezelfde technieken gebruikt als in die tijd.",
		Price: 19.99,
		Discount: 0,
		ImageUrl: "Images/Games/cuphead.jpg",
		VideoUrl: "https://www.youtube.com/embed/D-1n15aIgsE",
		MinSpecs: {
			OS: "Windows 7",
			Processor: "Intel Core2 Duo E8400",
			Memory: 2,
			HardDisk: 20,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Intel i3",
			Memory: 4,
			HardDisk: 20,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Counter-Strike: Global Offensive",
		Description: "Counter-Strike: Global Offensive (CS: GO) will expand upon the team-based action gameplay that it pioneered when it was launched 14 years ago. CS: GO features new maps, characters, and weapons and delivers updated versions of the classic CS content (de_dust2, etc.).",
		Price: 19.99,
		Discount: 0,
		ImageUrl: "Images/Games/Csgo.jpg",
		VideoUrl: "https://www.youtube.com/embed/bvI62FUDpKA",
		MinSpecs: {
			OS: "Windows XP",
			Processor: "Intel® Core™ 2 Duo E6600",
			Memory: 2,
			HardDisk: 15,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Intel i5",
			Memory: 8,
			HardDisk: 15,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Left 4 Dead 2",
		Description: "Left 4 Dead 2 (L4D2), dat zich afspeelt in de zombieapocalyps, is het langverwachte vervolg op het prijswinnende Left 4 Dead, de beste coöperatieve game van 2008. Deze coöperatieve actiehorror-FPS neemt jou en je vrienden mee door de steden, moerassen en begraafplaatsen van het diepe zuiden.",
		Price: 19.99,
		Discount: 0,
		ImageUrl: "Images/Games/left4dead2.jpg",
		VideoUrl: "https://www.youtube.com/embed/9XIle_kLHKU",
		MinSpecs: {
			OS: "Windows 2.11",
			Processor: "Pentium 4 3.0GHz",
			Memory: 2,
			HardDisk: 13,
			VideoCard: "Shader model 2.0. ATI X800"
		},
		RecSpecs: {
			OS: "Windows 2.11",
			Processor: "Intel core 2 duo 2.4GHz",
			Memory: 2,
			HardDisk: 13,
			VideoCard: "ATI X1600 or better"
		}
	},
	{
		Name: "Half-Life 2",
		Description: "1998. HALF-LIFE veroorzaakt een schok in de gamewereld met de combinatie van denderende actie en een samenhangende, pakkende verhaallijn. De debuutgame van Valve wint meer dan vijftig game-of-the-year-awards, voordat het door PC Gamer wordt uitgeroepen tot 'Best PC Game Ever'.",
		Price: 19.99,
		Discount: 99,
		ImageUrl: "Images/Games/halflife2.jpg",
		VideoUrl: "https://www.youtube.com/embed/ID1dWN3n7q4",
		MinSpecs: {
			OS: "Windows xp",
			Processor: "processor van 1,7 GHz",
			Memory: 0.512,
			HardDisk: 15,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Pentium 4-processor (3,0 GHz of meer)",
			Memory: 1,
			HardDisk: 15,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Plants vs. Zombies GOTY Edition",
		Description: "Een volledig nieuw actie/strategie spel van PopCap, de makers van Bejeweld en Peggle! Zombies vallen je huis aan en je enige verdediging is je arsenaal planten! Bewapend met een vreemde kas vol met zombieschietende planten, zoals erwtenknallers en kersenbommen, moet je snel denken en nog sneller.",
		Price: 4.99,
		Discount: 0,
		ImageUrl: "Images/Games/plantsvszombie.jpg",
		VideoUrl: "https://www.youtube.com/embed/CHAbHz8iYHc",
		MinSpecs: {
			OS: "Windows xp",
			Processor: "1.2GHz+ processor",
			Memory: 1,
			HardDisk: 0.5,
			VideoCard: "128 MB videogeheugen"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Intel i3",
			Memory: 1,
			HardDisk: 0.5,
			VideoCard: "128 MB videogeheugen"
		}
	},
	{
		Name: "Fallout 4",
		Description: "Bethesda Game Studios, de bekroonde makers van Fallout 3 en The Elder Scrolls V: Skyrim, heten je welkom in de wereld van Fallout 4 - hun meest ambitieuze spel ooit, en de volgende generatie van open-world gaming.",
		Price: 59.99,
		Discount: 10,
		ImageUrl: "Images/Games/fallout4.jpg",
		VideoUrl: "https://www.youtube.com/embed/GE2BkLqMef4",
		MinSpecs: {
			OS: "Windows 7/8/10 (64-bit OS required)",
			Processor: "Intel Core i5-2300 2.8 GHz/AMD",
			Memory: 8,
			HardDisk: 30,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 7/8/10 (64-bit OS required)",
			Processor: "Intel Core i7 4790 3.6 GHz/AMD FX-9590",
			Memory: 8,
			HardDisk: 30,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Saints Row IV",
		Description: " De President van de VS moet de aarde redden van buitenaardse overlord Zinyak met behulp van een arsenaal van grootmachten en vreemde wapens in de wildste open world spel ooit.",
		Price: 19.99,
		Discount: 0,
		ImageUrl: "Images/Games/saintrow4.jpg",
		VideoUrl: "https://www.youtube.com/embed/8LYfCs5bfyI",
		MinSpecs: {
			OS: "Windows vita",
			Processor: " Intel Core 2 Quad Q6600",
			Memory: 4,
			HardDisk: 10,
			VideoCard: "NVIDIA GTX 260"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Intel i3",
			Memory: 4,
			HardDisk: 10,
			VideoCard: "NVIDIA GTX 560"
		}
	},
	{
		Name: "Broforce",
		Description: " Wanneer kwaad dreigt de wereld, de wereld roept Broforce - een ondergefinancierd, overdreven aangedreven paramilitaire organisatie omgaan uitsluitend in buitensporig geweld. Koppel uw lendenen met maximaal vier spelers om te draaien pistool als tientallen verschillende bros en elimineren de tegengestelde terroristische krachten die een bedreiging vormen",
		Price: 13.99,
		Discount: 0,
		ImageUrl: "Images/Games/broforce.jpg",
		VideoUrl: "https://www.youtube.com/embed/8mOAQ7t9JjY",
		MinSpecs: {
			OS: "Windows Vista",
			Processor: " Intel Core™ Duo",
			Memory: 4,
			HardDisk: 1.3,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Intel i3",
			Memory: 8,
			HardDisk: 2,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Overcooked",
		Description: " Gaar is een chaotische Bank co-op koken spel voor één tot vier spelers. Werken als een team, moeten u en uw collega koks bereiden, koken en serveren van een verscheidenheid van smakelijke orders voor de baying klanten storm uit in een huff.",
		Price: 15.99,
		Discount: 0,
		ImageUrl: "Images/Games/Overcooked.jpg",
		VideoUrl: "https://www.youtube.com/embed/0ZK7veYPEJQ",
		MinSpecs: {
			OS: "Windows 7",
			Processor: " Dual Core 2.4Ghz",
			Memory: 2,
			HardDisk: 0.75,
			VideoCard: "GeForce 8800 GT"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Intel i3",
			Memory: 1.5,
			HardDisk: 1.5,
			VideoCard: "AMD HD 6850"
		}
	},
	{
		Name: "GTA V",
		Description: "Een jonge hustler, een gepensioneerde bankrover en een angstaanjagende psychopaat moeten een reeks gevaarlijke overvallen uitvoeren en zien te overleven in een meedogenloze stad waarin ze niemand kunnen vertrouwen, en elkaar nog het minst.",
		Price: 59.99,
		Discount: 0,
		ImageUrl: "Images/Games/gtaV.jpg",
		VideoUrl: "https://www.youtube.com/embed/QkkoHAzjnUs",
		MinSpecs: {
			OS: "Windows 7 64-bits,",
			Processor: " Intel Core 2 Quad Q6600, 2,40 GHz",
			Memory: 4,
			HardDisk: 72,
			VideoCard: "NVIDIA 9800 GT 1 GB"
		},
		RecSpecs: {
			OS: "Windows 10",
			Processor: " Intel Core i5 3470, 3,2 GHZ",
			Memory: 8,
			HardDisk: 72,
			VideoCard: "GeForce GTX 1080 Ti"
		}
	},
	{
		Name: "Ultimate Chicken Horse",
		Description: "Ultimate Chicken Horse is a party platformer game where you build the level as you play, placing traps and hazards to screw your friends over, but trying not to screw yourself.",
		Price: 19.99,
		Discount: 40,
		ImageUrl: "Images/Games/UltimateChickenHorseLogo.png",
		VideoUrl: "https://www.youtube.com/embed/sFdjL4elfPU",
		MinSpecs: {
			OS: "Windows XP SP2",
			Processor: "Intel i3",
			Memory: 2,
			HardDisk: 2,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Intel i5",
			Memory: 4,
			HardDisk: 15,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Hotline Miami",
		Description: "Hotline Miami is een intens actiespel met rauwe brutaliteit, koudbloedig geweergebruik en schedelverpletterende hand-tot-handgevechten in overvloed.",
		Price: 9.99,
		Discount: 0,
		ImageUrl: "Images/Games/hotlinemaimi.jpg",
		VideoUrl: "https://www.youtube.com/embed/2o9SUPgyZRY",
		MinSpecs: {
			OS: "Windows xp",
			Processor: "Intel i3",
			Memory: 1,
			HardDisk: 0.25,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 10",
			Processor: "Intel i5",
			Memory: 1.5,
			HardDisk: 0.25,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "PLAYERUNKNOWN'S BATTLEGROUNDS",
		Description: "PLAYERUNKNOWN'S BATTLEGROUNDS is a last-man-standing shooter being developed with community feedback. Players must fight to locate weapons and supplies in a massive 8x8 km island to be the lone survivor. This is BATTLE ROYALE.",
		Price: 59.99,
		Discount: 0,
		ImageUrl: "Images/Games/PLAYERUNKNOWNSBATTLEGROUNDS.jpg",
		VideoUrl: "https://www.youtube.com/embed/fsVPtZGisuY",
		MinSpecs: {
			OS: "Windows 7",
			Processor: "Intel i3",
			Memory: 6,
			HardDisk: 30,
			VideoCard: "Nvidia GeForce GTX 660 2GB "
		},
		RecSpecs: {
			OS: "Windows 10",
			Processor: "Intel i5",
			Memory: 8,
			HardDisk: 30,
			VideoCard: "GeForce GTX 1080 Ti"
		}
	},
	{
		Name: "red dead redemption 2",
		Description: "Red Dead Redemption 2 is een action-adventurespel in ontwikkeling bij verschillende Rockstar studio's. Het spel wordt uitgegeven door Rockstar Games en zal in de lente van 2018 uitkomen voor PlayStation 4 en Xbox One. Het is de opvolger van Red Dead Redemption, dat in 2010 uitkwam.",
		Price: 59.99,
		Discount: 0,
		ImageUrl: "Images/Games/reddeadredemption2.jpg",
		VideoUrl: "https://www.youtube.com/embed/gmA6MrX81z4",
		MinSpecs: {
			OS: "Windows 7",
			Processor: "Intel i3",
			Memory: 4,
			HardDisk: 30,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Intel i5",
			Memory: 8,
			HardDisk: 30,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Planet Coaster",
		Description: "Planet Coaster® - the future of coaster park simulation games has arrived! Surprise, delight and thrill incredible crowds as you build your coaster park empire - let your imagination run wild, and share your success with the world.",
		Price: 37.99,
		Discount: 0,
		ImageUrl: "Images/Games/PlanetCoaster.jpg",
		VideoUrl: "https://www.youtube.com/embed/91Kli1Uwk9g",
		MinSpecs: {
			OS: "Windows 7",
			Processor: "Intel i5",
			Memory: 8,
			HardDisk: 8,
			VideoCard: " Nvidia GTX 560 (2GB)"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Intel i7",
			Memory: 8,
			HardDisk: 12,
			VideoCard: " Nvidia GTX 980 (4GB)"
		}
	},
	{
		Name: "Bounty Train",
		Description: "Ontdek het gevaarlijke leven, de accurate historische gebeurtenissen en de moderne uitvindingen in het Noord-Amerika van de 19e eeuw. Verwerf een van de meest legendarische stoommachines en vorm het om tot een ondoordringbaar fort op wielen.",
		Price: 24.99,
		Discount: 60,
		ImageUrl: "Images/Games/BountyTrain.jpg",
		VideoUrl: "https://www.youtube.com/embed/GeeNIh4sMA0",
		MinSpecs: {
			OS: "Windows 2.11",
			Processor: "Intel i3",
			Memory: 4,
			HardDisk: 2,
			VideoCard: "GeForce 9600 GT"
		},
		RecSpecs: {
			OS: "Windows 2.11",
			Processor: "Intel i5",
			Memory: 6,
			HardDisk: 2,
			VideoCard: "GeForce 9600 GT"
		}
	},
	{
		Name: "Total War: WARHAMMER II ",
		Description: "Strategy gaming perfected. A breath-taking campaign of exploration, expansion and conquest across a fantasy world. Turn-based civilisation management and real-time epic strategy battles with thousands of troops and monsters at your command.",
		Price: 59.99,
		Discount: 0,
		ImageUrl: "Images/Games/TotalWarWARHAMMERII.jpg",
		VideoUrl: "https://www.youtube.com/embed/fXxe897bW-A",
		MinSpecs: {
			OS: "Windows 7",
			Processor: "Intel i3",
			Memory: 5,
			HardDisk: 60,
			VideoCard: "NVIDIA GTX 460 1GB"
		},
		RecSpecs: {
			OS: "Windows 10",
			Processor: "Intel i5",
			Memory: 8,
			HardDisk: 60,
			VideoCard: "NVIDIA GeForce GTX 770 4GB"
		}
	},
	{
		Name: "Bridge Constructor Portal",
		Description: "Betreed het Aperture Science Verrijkingscentrum en ervaar Bridge Constructor Portal - de unieke samenvoeging van de klassieke Portal™ - en Bridge Constructor™-games.",
		Price: 9.99,
		Discount: 0,
		ImageUrl: "Images/Games/BridgeConstructorPortal.jpg",
		VideoUrl: "https://www.youtube.com/embed/ho15qNNe8Gk",
		MinSpecs: {
			OS: "Windows 7",
			Processor: "Intel i3",
			Memory: 2,
			HardDisk: 0.2,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Intel i5",
			Memory: 8,
			HardDisk: 1,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Keep Talking and Nobody Explodes",
		Description: "Find yourself trapped alone in a room with a ticking time bomb. Your friends have the manual to defuse it, but they can't see the bomb, so you're going to have to talk it out – fast!",
		Price: 14.99,
		Discount: 0,
		ImageUrl: "Images/Games/KeepTalkingandNobodyExplodes.jpg",
		VideoUrl: "https://www.youtube.com/embed/C_dNn7aQbmQ",
		MinSpecs: {
			OS: "Windows 7",
			Processor: "Intel i3",
			Memory: 2,
			HardDisk: 1,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Intel i5",
			Memory: 4,
			HardDisk: 5,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "BattleBlock Theater®",
		Description: "Welcome to BattleBlock Theater! You’ve got no where to go but up...on stage. Play single player or co-op to free your friends and save Hatty Hattington! Jump, solve and battle your way through a mysterious theater inhabited by highly technological felines.",
		Price: 14.99,
		Discount: 0,
		ImageUrl: "Images/Games/battleblocktheater.jpg",
		VideoUrl: "https://www.youtube.com/embed/H6_By98v638",
		MinSpecs: {
			OS: "Windows XP",
			Processor: "Intel i3",
			Memory: 1,
			HardDisk: 1,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Intel i5",
			Memory: 4,
			HardDisk: 1,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Genital Jousting",
		Description: "Genital Jousting is an online and local multiplayer party game about flaccid penises and wiggly anuses for up to eight players at once.",
		Price: 4.99,
		Discount: 0,
		ImageUrl: "Images/Games/GenitalJousting.jpg",
		VideoUrl: "https://www.youtube.com/embed/64Jc_9lTObg",
		MinSpecs: {
			OS: "Windows 7",
			Processor: "Intel i3",
			Memory: 4,
			HardDisk: 0.5,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 10",
			Processor: "Intel i5",
			Memory: 8,
			HardDisk: 1,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Race The Sun",
		Description: "Je bent een ruimtevaartuig op zonne-energie. De zon is je doodsklok. Suis in een razend tempo richting de zonsondergang in een vergeefse race tegen de klok. Stel het onvermijdelijke uit door snelheidsboosts te vangen die de ondergaande zon laten omkeren - al is het maar voor even.",
		Price: 9.99,
		Discount: 0,
		ImageUrl: "Images/Games/RaceTheSun.jpg",
		VideoUrl: "https://www.youtube.com/embed/QmjAg0e_YYU",
		MinSpecs: {
			OS: "Windows XP",
			Processor: "Intel i3",
			Memory: 2,
			HardDisk: 0.5,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 10",
			Processor: "Intel i5",
			Memory: 4,
			HardDisk: 1,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Star Wars: Battlefront 2 (Classic, 2005)",
		Description: "Join the rise of Darth Vader’s elite 501st Legion of Stormtroopers as you fight through an all new story-based saga where every action you take impacts the battlefront and, ultimately, the fate of the Star Wars galaxy.",
		Price: 9.99,
		Discount: 0,
		ImageUrl: "Images/Games/StarWarsBattlefront2.jpg",
		VideoUrl: "https://www.youtube.com/embed/_q51LZ2HpbE",
		MinSpecs: {
			OS: "Windows XP",
			Processor: "Intel i3",
			Memory: 1,
			HardDisk: 4.3,
			VideoCard: "DirectX 9.0"
		},
		RecSpecs: {
			OS: "Windows 7",
			Processor: "Intel i5",
			Memory: 2,
			HardDisk: 4.3,
			VideoCard: "DirectX 9.0"
		}
	},
	{
		Name: "Spintires: MudRunner",
		Description: "Spintires: MudRunner, de ultieme versie van de miljoenen verkoop-hit Spintires, komt met een lading nieuwe content en functies. Bestuur 19 ongelooflijke terreinwagens door een extreem landschap. Het is niet alleen een verbeterde editie, het is de ultieme off-road simulatue ervaring!",
		Price: 29.99,
		Discount: 0,
		ImageUrl: "Images/Games/SpintiresMudRunner.jpg",
		VideoUrl: "https://www.youtube.com/embed/IDFTTEoLp1I",
		MinSpecs: {
			OS: "Windows 7",
			Processor: "Intel i3",
			Memory: 2,
			HardDisk: 1,
			VideoCard: "NVIDIA GeForce 9600 GT"
		},
		RecSpecs: {
			OS: "Windows 10",
			Processor: "Intel i5",
			Memory: 4,
			HardDisk: 1,
			VideoCard: " NVIDIA GeForce GTX 470"
		}
	},
];