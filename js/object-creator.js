import * as THREE from 'three'

function createAmbientLight () {
  return new THREE.AmbientLight(0xEEEEEE, 0.75)
}

function createDirectionalLight () {
  const directionalLight = new THREE.DirectionalLight(0x999999, 0.5)
  directionalLight.position.set(10, 1, 10)
  return directionalLight
}

function createCube (pos, color) {
  const geometry = new THREE.BoxBufferGeometry(100, 100, 100)
  const material = new THREE.MeshLambertMaterial({ color: color, flatShading: true })
  const mesh = new THREE.Mesh(geometry, material)
  pos && mesh.position.set(pos.x, pos.y, pos.z)
  return mesh
}

function createStraightLine (v1, v2, color) {
  const material = new THREE.LineBasicMaterial({
    color: color
  })

  const geometry = new THREE.Geometry()
  geometry.vertices.push(
    v1,
    v2
  )

  return new THREE.Line(geometry, material)
}

function createGrid () {
  const gridObject = new THREE.Object3D()

  const horizontalGrid = new THREE.GridHelper(500, 10)
  horizontalGrid.position.x = 250
  horizontalGrid.position.y = 0
  horizontalGrid.position.z = 250
  gridObject.add(horizontalGrid)

  const verticalGrid = new THREE.GridHelper(500, 10)
  verticalGrid.position.x = 250
  verticalGrid.position.y = 250
  verticalGrid.position.z = 0
  verticalGrid.rotation.x = Math.PI / 2
  gridObject.add(verticalGrid)

  const verticalGrid2 = new THREE.GridHelper(500, 10)
  verticalGrid2.position.x = 0
  verticalGrid2.position.y = 250
  verticalGrid2.position.z = 250
  verticalGrid2.rotation.z = Math.PI / 2
  gridObject.add(verticalGrid2)

  return gridObject
}

function createSpaceship (geometry) {
  const material = new THREE.MeshLambertMaterial({
    color: '#ed8989',
    flatShading: true
  })

  const spaceship = new THREE.Mesh(
    geometry,
    material
  )

  spaceship.scale.x = 20
  spaceship.scale.y = 20
  spaceship.scale.z = 20

  return spaceship
}

export {
  createAmbientLight,
  createDirectionalLight,
  createCube,
  createStraightLine,
  createGrid,
  createSpaceship
}
