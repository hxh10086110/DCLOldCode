import { getUserData } from "@decentraland/Identity";
import { movePlayerTo } from "@decentraland/RestrictedActions";
import { createBuilding } from "./modules/buliding";
import { timerArea } from "./modules/Timer";
import { createTransferButtom } from "./modules/transferButtom";
import { redFloor } from './modules/red'
import { connect } from "./modules/connection";
import * as utils from '@dcl/ecs-scene-utils'

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

//
// Connect to Colyseus server! 
// Set up the scene after connection has been established.
//
connect("my_room").then((room) => {
  log("Connected!!!!!!!!!!!")

  //---Here to send the data to server---

  room.onMessage("Enter",(data) =>{
    log(data.text)
  })
 

  var trigger = new utils.TriggerComponent(
    new utils.TriggerBoxShape(
      new Vector3(15.2,12,15.2),
    ), 
  {
    onCameraEnter: () => {
      // Camera enter
      log("I am IN!")
      room.send("onCameraEnter",{
        userData: getUserData()
      })
      room.onMessage("yourScore",(data) => {
        text.value = "Your score is : "+data.score
      })
    },
    onCameraExit: () => {
      // Camera exit
      log("I am OUT!")
      room.send('onCameraExit')
    },
  }
  )


  timerArea(
    new Transform({
      position: new Vector3(8,6,8),
      scale: new Vector3(15.2,12,15.2),
    }),
    trigger
  )


})




createBuilding()

executeTask(async () => {
  let userData = await getUserData()
  let userID = userData?.userId
  let userWearables = userData?.avatar.wearables
  log(userData)
  log(userID)
  log(userWearables)
})

const transferButtomPositions = [
  new Vector3(15.945,1.5,8),
  
  new Vector3(15.945,7.5,8),
  new Vector3(15.945,13.5,8),
] 

for (const transferButtomPosition of transferButtomPositions){
  createTransferButtom(
    new BoxShape(),
    new Transform({
      position: transferButtomPosition,
      scale: new Vector3(0.1,1,1),
    }),
    new OnPointerDown(() => {
      
      movePlayerTo({x: transferButtomPosition.x-13, y: transferButtomPosition.y+7.35, z: transferButtomPosition.z })
    },{
      hoverText:"UP"
    }),
  )
}




redFloor(new Vector3(8,6.2,3))