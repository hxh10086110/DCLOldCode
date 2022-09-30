import { createBuilding } from "./build";
import { connect } from "./connection";
import { createTransferButton } from "./transferButton";
import * as utils from '@dcl/ecs-scene-utils';
import { getUserData } from "@decentraland/Identity";
import { randomFloor } from "./randomFloor";

//---Setting variables and constants---

//Set connection to connect server
var connection = connect("my_room")

// Create screenspace component
const canvas = new UICanvas()

// Create a textShape component, setting the canvas as parent
const text = new UIText(canvas)
text.fontSize = 25
text.width = 120
text.height = 30
text.vAlign = "bottom"
text.positionX = -80
text.positionY = 650
text.color = new Color4(255,165,0,0.5)
const transferButtomPositions = [
  new Vector3(15.945,1.5,8),
  new Vector3(15.9,7.5,8),
  new Vector3(15.9,13.5,8),
]


  
    

//----------------------------------


//---Create basic entities---

//Create Building
createBuilding()

//Create randomFloor
randomFloor(new Vector3(8,6.2,3),new Color4(1,0,0,0.25))
randomFloor(new Vector3(8,12.2,3),new Color4(1,0,0,0.25))

//Create transferButtom
for(const transferButtomPosition of transferButtomPositions){
  createTransferButton(
    new Transform({
      position: transferButtomPosition,
      scale: new Vector3(0.1,1,1),
    })
  )
}


//------------------------

const maxPosition = new Vector3(16,20,16)
const minPosition = new Vector3(0,0,0)
const playerPosition = Camera.instance.feetPosition
let palyerEnter = false

if (minPosition < playerPosition && playerPosition < maxPosition ) {
  palyerEnter = true
  log(playerPosition)
  connection.then((room: any) => {
    room.send("onCameraEnter",{
      userData: getUserData(),
      position: playerPosition,
    })
    room.onMessage("yourScore",(data: any) => {
      text.value = "Your score is : "+data.score
    })
  })
}


if ( playerPosition < minPosition && maxPosition < playerPosition ) {
  connection.then((room: any) => {
    room.send('onCameraExit')
  })
}



if (playerPosition.x % 2 == 0 || playerPosition.y % 2 == 0) {
  log(playerPosition)
  connection.then((room: any) => {
    room.send('updatePosition'), {
      position: playerPosition
    }
  })
}



