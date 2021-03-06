import * as THREE from 'three'

import { initialize } from './initializer'
import { exportAnimation } from './export-animation'

import { createCube, createSpaceship } from './object-creator'

import Gui from './gui'

const output = initialize()
const scene = output.scene
const renderLoop = output.renderLoop
const renderer = output.renderer
const orbitControls = output.orbitControls

function doExportAnimation () {
  exportAnimation(renderer, renderLoop, 1000)
}

function autoRotate (toggle) {
  orbitControls.autoRotate = toggle
}

// scene.add(createCube())
const gui = Gui(doExportAnimation, autoRotate)

let spaceship = null
const modelPath = 'spaceship.json'

const loader = new THREE.JSONLoader()
loader.load(modelPath, geometry => {
  spaceship = createSpaceship(geometry)
  scene.add(spaceship)
})
