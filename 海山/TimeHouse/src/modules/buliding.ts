export function createFloor (
    model: BoxShape,
    transform: Transform,
): Entity {
    const entity = new Entity()
    engine.addEntity(entity)
    entity.addComponent(model)
    entity.addComponent(transform)
    return entity
}

export function createWall (
    model: BoxShape,
    transform: Transform
): Entity {
    const entity = new Entity()
    engine.addEntity(entity)
    entity.addComponent(model)
    entity.addComponent(transform)
    return entity
}

export function createBuilding (){
    //Preset floor shape
    const floorShape = new BoxShape

    //Adding floors
    createFloor(
    floorShape,
    new Transform({ 
        position: new Vector3(8,0.05,8),
        scale: new Vector3(16,0.1,16),
    }),
    )
    createFloor(
    floorShape,
    new Transform({
        position: new Vector3(8,6.15,8),
        scale: new Vector3(16,0.1,16)
    }),
    )
    createFloor(
    floorShape,
    new Transform({
        position: new Vector3(8,12.15,8),
        scale: new Vector3(16,0.1,16),
    }),
    )
    createFloor(
    floorShape,
    new Transform({
        position: new Vector3(8,18.15,8),
        scale: new Vector3(16,0.1,16),
    }),
    )

    //preset wall shape
    const wallShape = new BoxShape

    //Preset wall transform position and scale
    const wallPosformPositions = [
    new Vector3(8,0,0.05),
    new Vector3(8,0,15.95)
    ]
    const wallPosformScale = new Vector3(16,40,0.1)

    //Adding walls
    for(const wallPosformPosition of wallPosformPositions) {
    createWall(
        wallShape,
        new Transform({
        position: wallPosformPosition,
        scale: wallPosformScale,
        })
    )
    createWall(
        wallShape,
        new Transform({
        position: new Vector3(15.95,0,8),
        scale: new Vector3(0.1,40,16),
        })
    )
    createWall(
        wallShape,
        new Transform({
        position: new Vector3(0.05,19.05,8),
        scale: new Vector3(0.1,1.9,16),
        })
    )
    }
}
