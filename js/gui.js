import dat from 'dat.gui'

const Gui = (exportAnimation, autoRotate) => {
  const gui = new dat.GUI()
  const controls = {
    autoRotate: false,
    exportAnimation: exportAnimation
  }

  gui.add(controls, 'autoRotate').onChange(autoRotate)
  gui.add(controls, 'exportAnimation')

  return { controls }
}

export default Gui
