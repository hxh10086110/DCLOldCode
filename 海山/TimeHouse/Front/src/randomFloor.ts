import * as utils from '@dcl/ecs-scene-utils'

export function randomFloor(
    position: Vector3,
    color: Color4,
):Entity {
    const entity = new Entity()
    engine.addEntity(entity)
    entity.addComponent(new Transform({
        position: position,
        scale: new Vector3(2,0.1,2),
    }))
    entity.addComponent(new BoxShape())
    entity.getComponent(BoxShape).withCollisions = false
    const thisMaterial = new Material()
    thisMaterial.albedoColor = color
    entity.addComponent(thisMaterial)
    entity.addComponent(
        new utils.TriggerComponent(
            new utils.TriggerBoxShape(
                new Vector3(2,5,2),
            ),
            {
                onCameraEnter: () => {
                    log("INNNININ!")
                    
                },
                onCameraExit: () => {
                    log("OUTOUTOUTOUT")
                },
            }
        )
    )
    entity.addComponent(
        new utils.Interval(10000, () => {
            let randomX = (Math.random() * 14) + 1
            let randomY = (Math.random() * 14) + 1
            entity.getComponent(Transform).position.x = randomX
            entity.getComponent(Transform).position.z = randomY
          })
    )
    return entity
}