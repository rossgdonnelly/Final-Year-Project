const canvasT = document.querySelector("canvas");
const c = canvasT.getContext("2d");

canvasT.width = 3024;
canvasT.height = 3024;

c.fillStyle = "white";
c.fillRect(0, 0, canvasT.width, canvasT.height);

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 340) {
  collisionsMap.push(collisions.slice(i, i + 340));
}
const interactionsMap = [];
for (let i = 0; i < interactions.length; i += 340) {
  interactionsMap.push(interactions.slice(i, i + 340));
}

const offset = {
  x: -3250,
  y: -1850,
};
const boundaries = [];

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol == 10945)
      boundaries.push(
        new Boundary({
          position: {
            x: j * 16 + offset.x,
            y: i * 16 + offset.y,
          },
        })
      );
  });
});

const interactionsArr = [];
interactionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol != 0)
      interactionsArr.push(
        new Boundary({
          position: {
            x: j * 16 + offset.x,
            y: i * 16 + offset.y,
          },
          code: symbol,
        })
      );
  });
});

const bgImage = new Image();
bgImage.src = "./img/Town_Map_Big.png";

const treeDreamImg = new Image();
treeDreamImg.src = "./img/Tree_Dream.png";

const dumpDreamImg = new Image();
dumpDreamImg.src = "./img/Dump_Dream.png";

const playerDownImage = new Image();
playerDownImage.src = "./img/playerDown.png";

const playerUpImage = new Image();
playerUpImage.src = "./img/playerUp.png";

const playerleftImage = new Image();
playerleftImage.src = "./img/playerLeft.png";

const playerRightImage = new Image();
playerRightImage.src = "./img/playerRight.png";

const foreGrndImg = new Image();
foreGrndImg.src = "./img/Town_Map_Foreground.png";

const boxImg = new Image();
boxImg.src = "./img/HOME_MESSAGE.png";

const boatMessageImg = new Image();
boatMessageImg.src = "./img/Boat_Big.png";

const boatMessageBigImg = new Image();
boatMessageBigImg.src = "./img/Boat_Message.png";

const choiceTBMImg = new Image();
choiceTBMImg.src = "./img/Choice_TBM.png";

const choiceLeftImg = new Image();
choiceLeftImg.src = "./img/Choice_Left.png";

const choiceRightImg = new Image();
choiceRightImg.src = "./img/Choice_Right.png";

const blankImg = new Image();
blankImg.src = "./img/Blank.png";

const taskListImg = new Image();
taskListImg.src = "./img/Task_List.png";

taskListImgDefault = taskListImg;

const tlItemsImg = new Image();
tlItemsImg.src = "./img/tl.png";

const taskListMiniImg = new Image();
taskListMiniImg.src = "./img/Task_List_Mini.png";

const defaultIntImg = new Image();
defaultIntImg.src = "./img/Default_Interaction.png";

const choiceBoxImg = new Image();
choiceBoxImg.src = "./img/ChoiceBox.png";

const clickerImg = new Image();
clickerImg.src = "./img/Clicker.png";

const announcementImg = new Image();
announcementImg.src = "./img/Announcement.png";

const announcementRespImg = new Image();
announcementRespImg.src = "./img/Announcement_Response.png";

const attendPTChoice = new Image();
attendPTChoice.src = "./img/AttendPT.png";

const bakeryWelcomeImg = new Image();
bakeryWelcomeImg.src = "./img/Bakery Welcome.png";

const boatChoiceImg = new Image();
boatChoiceImg.src = "./img/BoatChoice.png";

const busImg = new Image();
busImg.src = "./img/Bus.png";

const busChoiceImg = new Image();
busChoiceImg.src = "./img/BusChoice.png";

const carImg = new Image();
carImg.src = "./img/Car.png";

const cutTreesImg = new Image();
cutTreesImg.src = "./img/CutTrees.png";

defaultTrees = cutTreesImg;

const dumpImg = new Image();
dumpImg.src = "./img/Dump.png";

defaultDump = dumpImg;

const fountainImg = new Image();
fountainImg.src = "./img/Fountain.png";

const grabRCImg = new Image();
grabRCImg.src = "./img/GrabRCChoice.png";

const hdWelcomeImg = new Image();
hdWelcomeImg.src = "./img/HDWelcom.png";

const homeWelcomeImg = new Image();
homeWelcomeImg.src = "./img/Home.png";

const learnAffChoiceImg = new Image();
learnAffChoiceImg.src = "./img/LearnAfforestation.png";

const learnPBMessageImg = new Image();
learnPBMessageImg.src = "./img/LearnMessagePB.png";

const learnNBChoiceImg = new Image();
learnNBChoiceImg.src = "./img/LearnNB.png";

const learnPBChoiceImg = new Image();
learnPBChoiceImg.src = "./img/LearnPB.png";

const learnSUPChoiceImg = new Image();
learnSUPChoiceImg.src = "./img/LearnSUP.png";

const marketWelcomeImg = new Image();
marketWelcomeImg.src = "./img/MarketWelcome.png";

const meatDogChoiceImg = new Image();
meatDogChoiceImg.src = "./img/MeatDogChoice.png";

const meatDogOUImg = new Image();
meatDogOUImg.src = "./img/MeatHDOU.png";

const meatTacoChoiceImg = new Image();
meatTacoChoiceImg.src = "./img/MeatTacoChoice.png";

const meatTacoOUImg = new Image();
meatTacoOUImg.src = "./img/MeatTacoOU.png";

const napImg = new Image();
napImg.src = "./img/Nap.png";

const napChoiceImg = new Image();
napChoiceImg.src = "./img/NapChoice.png";

const noBoatImg = new Image();
noBoatImg.src = "./img/NoBoat.png";

const noRCChoiceImg = new Image();
noRCChoiceImg.src = "./img/NoRCChoice.png";

const notHouseImg = new Image();
notHouseImg.src = "./img/NotHouse.png";

const PBHDCHoiceImg = new Image();
PBHDCHoiceImg.src = "./img/PBHDCHOICE.png";

const PBHDOUImg = new Image();
PBHDOUImg.src = "./img/PBHDOU.png";

const PBTacoChoiceImg = new Image();
PBTacoChoiceImg.src = "./img/PBTacoChoice.png";

const PBTacoOUImg = new Image();
PBTacoOUImg.src = "./img/PlantTacoOU.png";

const RCreadyChoiceImg = new Image();
RCreadyChoiceImg.src = "./img/RCReadyChoice.png";

const tacoWelcomeImg = new Image();
tacoWelcomeImg.src = "./img/tacoWelcome.png";

const vegPastryImg = new Image();
vegPastryImg.src = "./img/VeganPastry2Choice.png";

const vegPastryAltImg = new Image();
vegPastryAltImg.src = "./img/VeganPastryCHoice.png";

const walkChoiceImg = new Image();
walkChoiceImg.src = "./img/WalkChoice.png";

const TLCrossImg = new Image();
TLCrossImg.src = "./img/TLCrossOne.png";

const dreamImg = new Image();
dreamImg.src = "./img/Town_Map_Dream.png";

const tlItemImg1 = new Image();
tlItemImg1.src = "./img/tl1.png";

const tlItemImg2 = new Image();
tlItemImg2.src = "./img/tl2.png";

const tlItemImg3 = new Image();
tlItemImg3.src = "./img/tl3.png";

const tlItemImg4 = new Image();
tlItemImg4.src = "./img/tl4.png";

const tlItemImg5 = new Image();
tlItemImg5.src = "./img/tl5.png";

const tlItemImg6 = new Image();
tlItemImg6.src = "./img/tl6.png";

const tlItemImg7 = new Image();
tlItemImg6.src = "./img/tl7.png";

const learnBoxImg = new Image();
learnBoxImg.src = "./img/LearnBoxes.png";

const returnProtestImg = new Image();
returnProtestImg.src = "./img/ReturnLater.png";

const goToBoatImg = new Image();
goToBoatImg.src = "./img/goBoat.png";

const overlayImg = new Image();
overlayImg.src = "./img/overlay.png";

const player = new Sprite({
  position: {
    x: canvasT.width / 2 - 192,
    y: canvasT.height / 2 + 800 - 68,
  },
  image: playerDownImage,
  frames: {
    max: 4,
    elapsed: 0,
  },
  sprites: {
    up: playerUpImage,
    left: playerleftImage,
    right: playerRightImage,
    down: playerDownImage,
  },
});

//canvas.width / 2 -  this.image.width,
//   canvas.height / 2 + 800 -  this.image.height,

const background = new Sprite({
  position: { x: offset.x, y: offset.y },
  image: bgImage,
});
const foreground = new Sprite({
  position: { x: offset.x, y: offset.y },
  image: foreGrndImg,
});
const keys = {
  w: { pressed: false },
  a: { pressed: false },
  s: { pressed: false },
  d: { pressed: false },
};

const diaBox = new Sprite({
  position: {
    x: player.position.x,
    y: player.position.y,
  },
  image: defaultIntImg,
});

const Clicker = new Sprite({
  position: {
    x: player.position.x + 170,
    y: player.position.y + 375,
  },
  image: clickerImg,
});

const taskList = new Sprite({
  position: {
    x: player.position.x - 800,
    y: player.position.y + 100,
  },
  image: taskListMiniImg,
  height: 10,
});

const taskListItem2 = new Sprite({
  position: {
    x: player.position.x - 100,
    y: player.position.y - 100,
  },
  frames: {
    max: 2,
    elapsed: 0,
  },
  image: tlItemImg1,
});

const taskListItem3 = new Sprite({
  position: {
    x: player.position.x - 100,
    y: player.position.y - 70,
  },
  frames: {
    max: 2,
    elapsed: 0,
  },
  image: tlItemImg2,
});

const taskListItem4 = new Sprite({
  position: {
    x: player.position.x - 100,
    y: player.position.y - 20,
  },
  frames: {
    max: 2,
    elapsed: 0,
  },
  image: tlItemImg3,
});

const taskListItem5 = new Sprite({
  position: {
    x: player.position.x - 100,
    y: player.position.y + 20,
  },
  frames: {
    max: 2,
    elapsed: 0,
  },
  image: tlItemImg4,
});

const taskListItem6 = new Sprite({
  position: {
    x: player.position.x - 100,
    y: player.position.y + 60,
  },
  frames: {
    max: 2,
    elapsed: 0,
  },
  image: tlItemImg5,
});

const taskListItem7 = new Sprite({
  position: {
    x: player.position.x - 100,
    y: player.position.y + 100,
  },
  frames: {
    max: 2,
    elapsed: 0,
  },
  image: tlItemImg6,
});

const choiceBoxes = new Sprite({
  position: {
    x: player.position.x,
    y: player.position.y,
  },
  image: choiceTBMImg,
});

const testBoundary = new Boundary({
  position: {
    x: 1400,
    y: 2400,
  },
});

const testChoiceBoxLeft = new choiceBox({
  position: {
    x: player.position.x,
    y: player.position.y,
  },
  image: blankImg,
  correctChoice: false,
  selected: false,
});
const testChoiceBoxRight = new choiceBox({
  position: {
    x: player.position.x + 250,
    y: player.position.y,
  },
  image: blankImg,
  correctChoice: false,
  selected: false,
});

const napChoiceBox = new choiceBox({
  position: {
    x: player.position.x + 270,
    y: player.position.y + 70,
  },
  image: napChoiceImg,
  correctChoice: false,
  selected: false,
});

const RCChoiceBox = new choiceBox({
  position: {
    x: player.position.x + 20,
    y: player.position.y + 70,
  },
  image: grabRCImg,
  correctChoice: true,
  selected: false,
});

const walkChoiceBox = new choiceBox({
  position: {
    x: player.position.x + 270,
    y: player.position.y + 70,
  },
  image: walkChoiceImg,
  correctChoice: true,
  selected: false,
});

const busChoiceBox = new choiceBox({
  position: {
    x: player.position.x + 20,
    y: player.position.y + 70,
  },
  image: busChoiceImg,
  correctChoice: false,
  selected: false,
});

//Store Choices

const grabRCBox = new choiceBox({
  position: {
    x: player.position.x + 270,
    y: player.position.y + 70,
  },
  image: noRCChoiceImg,
  correctChoice: true,
  selected: false,
});

const gotRCBox = new choiceBox({
  position: {
    x: player.position.x + 20,
    y: player.position.y + 70,
  },
  image: RCreadyChoiceImg,
  correctChoice: false,
  selected: false,
});

//Bakery
const vegPatry1Box = new choiceBox({
  position: {
    x: player.position.x + 270,
    y: player.position.y + 70,
  },
  image: vegPastryImg,
  correctChoice: true,
  selected: false,
});

const vegPastry2Box = new choiceBox({
  position: {
    x: player.position.x + 20,
    y: player.position.y + 70,
  },
  image: vegPastryAltImg,
  correctChoice: true,
  selected: false,
});

//Taco

const meatTacoBox = new choiceBox({
  position: {
    x: player.position.x + 270,
    y: player.position.y + 70,
  },
  image: meatTacoChoiceImg,
  correctChoice: true,
  selected: false,
});

const pbTacoBox = new choiceBox({
  position: {
    x: player.position.x + 20,
    y: player.position.y + 70,
  },
  image: PBTacoChoiceImg,
  correctChoice: false,
  selected: false,
});

//Hot Dog

const pbHDChoice = new choiceBox({
  position: {
    x: player.position.x + 270,
    y: player.position.y + 70,
  },
  image: PBHDCHoiceImg,
  correctChoice: true,
  selected: false,
});

const meatHDBox = new choiceBox({
  position: {
    x: player.position.x + 20,
    y: player.position.y + 70,
  },
  image: meatDogChoiceImg,
  correctChoice: false,
  selected: false,
});

//Learn Nature Based
const learnNBBox = new choiceBox({
  position: {
    x: player.position.x + 20,
    y: player.position.y + 70,
  },
  image: learnNBChoiceImg,
  correctChoice: true,
  selected: false,
});

//Learn Plant Based

const learnPBBox = new choiceBox({
  position: {
    x: player.position.x + 20,
    y: player.position.y + 70,
  },
  image: learnPBChoiceImg,
  correctChoice: true,
  selected: false,
});

//Learn SUP

const learnSUPBox = new choiceBox({
  position: {
    x: player.position.x + 20,
    y: player.position.y + 70,
  },
  image: learnSUPChoiceImg,
  correctChoice: true,
  selected: false,
});

//Learn Aff

const learnAffBox = new choiceBox({
  position: {
    x: player.position.x + 270,
    y: player.position.y + 70,
  },
  image: learnAffChoiceImg,
  correctChoice: true,
  selected: false,
});

//Boat Choice

const boatCBox = new choiceBox({
  position: {
    x: player.position.x + 270,
    y: player.position.y + 70,
  },
  image: boatChoiceImg,
  correctChoice: true,
  selected: false,
});

const attendBox = new choiceBox({
  position: {
    x: player.position.x + 20,
    y: player.position.y + 70,
  },
  image: attendPTChoice,
  correctChoice: true,
  selected: false,
});

const returnBox = new choiceBox({
  position: {
    x: player.position.x + 270,
    y: player.position.y + 70,
  },
  image: returnProtestImg,
  correctChoice: false,
  selected: false,
});

const LearnBoxes = new Sprite({
  position: {
    x: player.position.x - 600,
    y: player.position.y - 340,
  },
  image: learnBoxImg,
  frames: {
    max: 5,
  },
});

const overLay = new Sprite({
  position: {
    x: player.position.x - 600,
    y: player.position.y - 350,
  },
  image: overlayImg,
  frames: {
    max: 3,
  },
});

const battle = {
  initiated: false,
};

const movables = [background, ...boundaries, foreground, ...interactionsArr];
let loc = "";
interactionCode = "";
choiceBoxBool = false;
tasking = false;
points = 0;
hasReusables = false;
let learning = false;
defaultBoat = noBoatImg;
function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y + rectangle1.height * 0.8 <=
      rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height * 1.2 >= rectangle2.position.y
  );
}
//For auto complete/
//taskListItem2.frames.val = 1;
//taskListItem3.frames.val = 1;
//taskListItem4.frames.val = 1;
//taskListItem5.frames.val = 1;
//taskListItem6.frames.val = 1;
//taskListItem7.frames.val = 1;

function animate() {
  const animationID = window.requestAnimationFrame(animate);
  background.draw();
  boundaries.forEach((boundary) => {
    boundary.draw();
  });
  interactionsArr.forEach((interaction) => {
    interaction.draw();
  });
  player.draw();
  overLay.draw();
  foreground.draw();
  taskList.draw();

  let moving = true;
  player.moving = false;
  if (battle.initiated) return;
  let interacting = false;
  if (RCChoiceBox.selected) {
    hasReusables = true;
  }

  for (let i = 0; i < interactionsArr.length; i++) {
    const intZone = interactionsArr[i];
    interactionCode = intZone.code;
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: intZone,
      })
    ) {
      diaBox.position.x = intZone.position.x + 50;
      diaBox.position.y = intZone.position.y;
      diaBox.draw();
      interacting = true;

      break;
    }
  }
  document.addEventListener("keydown", function (event) {
    if (event.code == "KeyT") {
      taskList.image = taskListImgDefault;
      tasking = true;
      //draw the items
      //Item1.draw etc.
      taskList.position.x = player.position.x - 200;
      taskList.position.y = player.position.y - 200;
    } else if (event.code == "Escape") {
      learning = false;
      tasking = false;
      taskList.image = taskListMiniImg;
      (taskList.position.x = player.position.x - 800),
        (taskList.position.y = player.position.y + 100);
    }
  });

  if (tasking) {
    taskListItem2.draw();
    taskListItem3.draw();
    taskListItem4.draw();
    taskListItem5.draw();
    taskListItem6.draw();
    taskListItem7.draw();
  }

  if (interacting) {
    document.addEventListener("keydown", function (event) {
      if (
        event.code === "Enter" ||
        event.code == "KeyO" ||
        event.code == "KeyP"
      ) {
        switch (interactionCode) {
          case 59199:
            loc = "Buses";
            diaBox.image = busImg;
            choiceBoxBool = true;
            break;
          case 59187:
            loc = "Announcement";
            diaBox.image = announcementImg;
            choiceBoxBool = true;
            break;
          case 59197:
            loc = "Store";
            diaBox.image = marketWelcomeImg;
            choiceBoxBool = true;
            break;
          case 59190:
            loc = "Car";
            diaBox.image = carImg;
            choiceBoxBool = true;
            break;
          case 59195:
            loc = "My House";
            diaBox.image = homeWelcomeImg;
            choiceBoxBool = true;
            break;
          case 59188:
            loc = "Bakery";
            diaBox.image = bakeryWelcomeImg;
            choiceBoxBool = true;
            break;
          case 59189:
            loc = "Boat";
            diaBox.image = defaultBoat;

            break;
          case 59196:
            loc = "Other House";
            diaBox.image = notHouseImg;
            break;
          case 59191:
            loc = "Cut Trees";
            diaBox.image = defaultTrees;
            choiceBoxBool = true;
            break;
          case 59192:
            loc = "Dump";
            diaBox.image = defaultDump;
            break;
          case 59194:
            loc = "Hot Dog";
            diaBox.image = hdWelcomeImg;
            choiceBoxBool = true;
            break;
          case 59193:
            loc = "Fountain";
            diaBox.image = fountainImg;
            choiceBoxBool = true;
            break;
          case 59198:
            loc = "Tacos";
            diaBox.image = tacoWelcomeImg;
            choiceBoxBool = true;
            break;
          default:
            break;
        }
        //Change Image
        //Call Function
      } else if ((event.code = "KeyF" && interactionCode == 59189)) {
        //Finish Game
      } else {
        diaBox.image = defaultIntImg;
      }
    });
    //SHow the learnings
    if (choiceBoxBool) {
      if (interactionCode == 59195) {
        choiceBoxFN(napChoiceBox, RCChoiceBox);
      } else if (interactionCode == 59199) {
        choiceBoxFN(walkChoiceBox, busChoiceBox);

        taskListItem4.complete();
      } else if (interactionCode == 59197) {
        if (!hasReusables) {
          choiceBoxFN(testChoiceBoxLeft, grabRCBox);
        } else {
          choiceBoxFN(grabRCBox, learnSUPBox);
          taskListItem6.complete();
        }
      } else if (interactionCode == 59188) {
        //Bakery
        choiceBoxFN(vegPastry2Box, vegPatry1Box);
        taskListItem3.complete();
        //Show option to learn more
        if (vegPastry2Box.selected || vegPatry1Box.selected) {
          choiceBoxFN(learnSUPBox, learnPBBox);
        }
      } else if (interactionCode == 59193) {
        //Fountain
        //Make a noise
      } else if (interactionCode == 59194) {
        //Hot Dog
        choiceBoxFN(pbHDChoice, meatHDBox);
        taskListItem2.complete();
      } else if (interactionCode == 59198) {
        //Taco
        choiceBoxFN(pbTacoBox, meatTacoBox);
        taskListItem2.complete();
      } else if (interactionCode == 59191) {
        //Trees
        choiceBoxFN(learnNBBox, learnAffBox);
        taskListItem5.complete();
      } else if (interactionCode == 59187) {
        choiceBoxFN(returnBox, attendBox);
        taskListItem7.complete();
        //Finish Final task go to fight
        //Transition to Fight
      } else if (interactionCode == 59189) {
        choiceBoxFN(boatCBox, boatCBox);
        taskListItem2.frames.val++;
      }
    }
  }

  function choiceBoxFN(choiceRight, choiceLeft) {
    if (choiceBoxBool) {
      choiceRight.draw();
      choiceLeft.draw();
      Clicker.draw();
      document.addEventListener("keydown", function (event) {
        if (event.code == "KeyO") {
          Clicker.position.x = player.position.x + 170;
          lastKey = "lefty";
        } else if (event.code === "KeyP") {
          Clicker.position.x = player.position.x + 420;
          lastKey = "right";
        }
        if (event.code === "KeyL") {
          if (lastKey == "right") {
            points++;
            choiceLeft.selected = false;
            choiceRight.selected = true;
            //here
          } else {
            points++;
            choiceLeft.selected = true;
            choiceRight.selected = false;
          }
          choiceBoxBool = false;
        }
      });
    }
  }
  //All tasks complete go to the boat
  if (
    taskListItem2.frames.val != 0 &&
    taskListItem3.frames.val != 0 &&
    taskListItem4.frames.val != 0 &&
    taskListItem5.frames.val != 0 &&
    taskListItem6.frames.val != 0 &&
    taskListItem7.frames.val != 0
  ) {
    taskListItem2.image = goToBoatImg;
    taskListItem2.frames.val = 0;
    background.image = dreamImg;
    taskListItem3.image = blankImg;
    defaultBoat = boatMessageImg;
    defaultTrees = treeDreamImg;
    defaultDump = dumpDreamImg;
    taskListItem4.image = blankImg;

    taskListItem5.image = blankImg;

    taskListItem6.image = blankImg;

    taskListItem7.image = blankImg;
    //Go to boat
    //Change boat image
    defaultBoat = boatMessageBigImg;
    choiceBoxBool = true;
  }

  if (keys.w.pressed && lastKey == "w") {
    player.moving = true;
    player.image = player.sprites.up;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach((movable) => {
        movable.position.y += 5;
      });
  } else if (keys.a.pressed && lastKey == "a") {
    player.moving = true;
    player.image = player.sprites.left;

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach((movable) => {
        movable.position.x += 5;
      });
  } else if (keys.s.pressed && lastKey == "s") {
    player.moving = true;
    player.image = player.sprites.down;

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= 5;
      });
  } else if (keys.d.pressed && lastKey == "d") {
    player.moving = true;
    player.image = player.sprites.right;

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        moving = false;
        break;
      }
    }
    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= 5;
      });
  }
  //learning

  if (busChoiceBox.selected) {
    busChoiceBox.selected = false;
    player.position.y = player.position.y - 1750;
  } else if (learnPBBox.selected) {
    learning = true;
    LearnBoxes.frames.val = 2;
    learnPBBox.selected = false;
  } else if (learnSUPBox.selected) {
    LearnBoxes.frames.val = 1;
    learning = true;
    learnSUPBox.selected = false;
  } else if (learnAffBox.selected) {
    learning = true;
    LearnBoxes.frames.val = 4;
    learnAffBox.selected = false;

    //Change learning image
  } else if (learnNBBox.selected) {
    learning = true;
    LearnBoxes.frames.val = 3;
    learnNBBox.selected = false;
  } else if (boatCBox.selected) {
    diaBox.image = blankImg;
    LearnBoxes.image = blankImg;
    overLay.complete();
    //cancelAnimationFrame(animationID);
  } else if (attendBox.selected) {
    //actual transition
    //deactivate current
    background.image = dreamImg;
    window.cancelAnimationFrame(animationID);
    battle.initiated = true;
    gsap.to("#overlay", {
      opacity: 1,
      repeat: 3,
      yoyo: true,
      duration: 0.4,
      onComplete() {
        gsap.to("#overlay", {
          opacity: 1,
          duration: 0.4,
          onComplete() {
            console.log("animating fight");
            animateFight();
            gsap.to("#overlay", {
              opacity: 0,
              duration: 0.4,
            });
          },
        });
        //activate new animation
      },
    });
  } else {
  }

  if (learning) {
    LearnBoxes.draw();
  }
}

animate();

const fightMapImg = new Image();
fightMapImg.src = "./img/FightMap.png";

const fightBackground = new Sprite({
  position: { x: player.position.x - 600, y: player.position.y - 315 },
  image: fightMapImg,
});

function animateFight() {
  fightAnimationID = window.requestAnimationFrame(animateFight);
  fightBackground.draw();

  document.addEventListener("keydown", function (event) {
    if (event.code == "KeyB") {
      //fadeout
      gsap.to("#overlay", {
        opacity: 1,
        onComplete: () => {
          cancelAnimationFrame(fightAnimationID);
          animate();
          gsap.to("#overlay", {
            opacity: 0,
            duration: 0.4,
          });
        },
      });
    }
  });
}

let lastKey = "";
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      lastKey = "w";
      break;
    case "a":
      keys.a.pressed = true;
      lastKey = "a";

      break;
    case "s":
      keys.s.pressed = true;
      lastKey = "s";

      break;
    case "d":
      keys.d.pressed = true;
      lastKey = "d";

      break;
    case "g":
      overLay.complete();
      LearnBoxes.frames.val = 0;
      learning = true;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});
