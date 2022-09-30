import { movePlayerTo } from "@decentraland/RestrictedActions";

export function createTransferButton (
    transform: Transform,
): Entity {
    const entity = new Entity()
    engine.addEntity(entity)
    entity.addComponent(new BoxShape())
    entity.addComponent(transform)
    entity.addComponent(
        new OnPointerDown(() => {
            movePlayerTo({x: 8, y: Camera.instance.position.y + 7, z: 8})
          },{
            hoverText:"UP"
          })
    )
    const thisMaterial = new Material()
    thisMaterial.albedoColor = Color3.Blue()
    entity.addComponent(thisMaterial)
    
    return entity
}