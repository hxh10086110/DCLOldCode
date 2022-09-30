import * as utils from '@dcl/ecs-scene-utils'

export function timerArea (
    transform: Transform,
    triggercomponent: utils.TriggerComponent
): Entity {
    const entity = new Entity()
    engine.addEntity(entity)
    entity.addComponent(transform)
    entity.addComponent(new BoxShape())
    entity.getComponent(BoxShape).withCollisions = false
    const thisMaterial = new Material()
    let transparent = new  Color4(0, 0, 0, 0)
    thisMaterial.albedoColor = transparent
    entity.addComponent(thisMaterial)
    entity.addComponent(triggercomponent)
    return entity
}



