export function createTransferButtom (
    model: BoxShape,
    transform: Transform,
    OnClick: OnPointerDown,
): Entity {
    const entity = new Entity()
    engine.addEntity(entity)
    entity.addComponent(model)
    entity.addComponent(transform)
    entity.addComponent(OnClick)
    const thisMaterial = new Material()
    thisMaterial.albedoColor = Color3.Red()
    entity.addComponent(thisMaterial)
    return entity
}

