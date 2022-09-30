import { Room, Client } from "colyseus";
import { Block, MyRoomState, Player } from "./schema/MyRoomState";

export class MyRoom extends Room<MyRoomState> {
  
    /*
  onCreate is the first method to be called 
  when a room is instantiated. 
  We will be initialising our game state 
  and wiring up our message listeners in onCreate
  */
  onCreate (options: any) {
    this.setState(new MyRoomState())
    console.log("Room created! ==>",options)
    //---Run your code here when room created---
    
  }


  /*
  onJoin is called as soon a new client connects to our game room
  */
  onJoin (client: Client, options: any) {
    //---Run your logic here when the player has in the room---
    console.log("joined! => ", options.userData);

    let gameScore: number = 0

    
    this.onMessage("onCameraEnter",(client: Client, message: any) => {
      console.log("cameraEnter")
      
      let score: number = gameScore
      let increment = 0.01000000000000001

      //---Stop when play exit
      this.onMessage("onCameraExit",(client: Client, message: any) => {
        console.log("cameraExit")
        clearInterval(interval)
        //score.toFixed(10) Returns a string
        gameScore = -(-score.toFixed(10))
        console.log("timerStop!");
        console.log("You gameScore is : ",gameScore);
      })

      //---Start the score loopsytem
      var interval = setInterval(() => {
        score = score + increment
        console.log("GameScore + ",score);

        //---Update the gameScore to display
        client.send('yourScore',{
          score: score
        })
      },600)

    })  


  }


  /*
  onLeave is the exact opposite to onJoin, 
  so whenever a client leaves, 
  disconnect and reconnection logic will be handled here
  */
  onLeave (client: Client, consented: boolean) {
    //---Run your code here when player has letfted---
    console.log("left!!!!!");
  }


  /*
  onDispose is the last method to be called right 
  before a game room will be disposed. 
  Things like storing game results to a database 
  and similar tasks might be carried out in onDispose
  */
  onDispose() {
    //---Run your code here when the room was disposing---
    console.log("Disposing room...");
  }

}