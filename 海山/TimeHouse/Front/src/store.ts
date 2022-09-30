
let storeTexture = new Texture("images/storeEnter.png")


const store = new UICanvas()

const storeEnter = new UIImage(store, storeTexture)
storeEnter.width = 148 
storeEnter.height = 148 
storeEnter.sourceWidth = 148 
storeEnter.sourceHeight = 148 

storeEnter.positionX = "-43%"
storeEnter.positionY = "20%"

storeEnter.isPointerBlocker = true
storeEnter.onClick = new OnPointerDown(() => {
    log("clicked to open the store")
    const storePage = new UICanvas()
    let storeBackground = new Texture("images/storeBackground.png")
    const storeBack = new UIImage(storePage,storeBackground)
    storeBack.isPointerBlocker = false
    storeBack.sourceWidth = 477
    storeBack.sourceHeight = 310
    storeBack.width = 477
    storeBack.height = 310
    
    
    let exitTexture = new Texture("images/image-atlas.jpg")
    const exitCanvas = new UICanvas()
    const exitButton = new UIImage(exitCanvas, exitTexture)
    exitButton.sourceLeft = 346
    exitButton.sourceTop = 128
    exitButton.sourceWidth = 128 
    exitButton.sourceHeight = 128 
    exitButton.height = 32
    exitButton.width = 32
    exitButton.positionX = 200
    exitButton.positionY = 100
    exitButton.isPointerBlocker = true
    exitButton.onClick = new OnPointerDown(() => {
        storeBack.visible = false
        exitButton.visible = false
        twoTicket.visible = false
        threeTicket.visible =false
        twoText.visible = false
        twoHold.visible = false
        threeText.visible = false
        threeHold.visible = false
    })

    let twoTexture = new Texture("images/twoTicket.png")
    const twoCanvas = new UICanvas()
    const twoTicket = new UIImage(twoCanvas,twoTexture)
    twoTicket.sourceWidth = 64
    twoTicket.sourceHeight = 64
    twoTicket.height = 128
    twoTicket.width = 128
    twoTicket.positionX = -128
    twoTicket.positionY = -25

    let threeTexture = new Texture("images/threeTicket.png")
    const threeCanvas = new UICanvas()
    const threeTicket = new UIImage(threeCanvas,threeTexture)
    threeTicket.sourceWidth = 64
    threeTicket.sourceHeight = 64
    threeTicket.height = 128
    threeTicket.width = 128
    threeTicket.positionX = 128
    threeTicket.positionY = -25

    const Message = new UICanvas()
    const twoText = new UIText(Message)
    twoText.value = "兑换分数：100"
    twoText.fontSize = 15
    twoText.color = new Color4(0,0,0,1)
    twoText.vAlign = "center"
    twoText.positionX = -125
    twoText.positionY = 75
    
    const twoHold = new UIText(Message)
    twoHold.value = "当前持有：0"
    twoHold.fontSize = 15
    twoHold.color = new Color4(0,0,0,1)
    twoHold.vAlign = "center"
    twoHold.positionX = -125
    twoHold.positionY = -100

    const threeText = new UIText(Message)
    threeText.value = "兑换分数：1000"
    threeText.fontSize = 15
    threeText.color = new Color4(0,0,0,1)
    threeText.vAlign = "center"
    threeText.positionX = 125
    threeText.positionY = 75

    const threeHold = new UIText(Message)
    threeHold.value = "当前持有：0"
    threeHold.fontSize = 15
    threeHold.color = new Color4(0,0,0,1)
    threeHold.vAlign = "center"
    threeHold.positionX = 125
    threeHold.positionY = -100


})

