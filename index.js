import * as THREE from "https://unpkg.com/browse/three@0.127.0/build/three.module.js"
//import {GLTFLoader} from "https://unpkg.com/browse/three@0.127.0/examples/jsm/loaders/GLTFLoader.js"

const canvas = document.querySelector(".webgl")
const scene = new THREE.Scene()

//const loader = new GLTFLoader
//loader.load("./assets/wraith.glb",function(glb){
//    console.log(glb)
//   const root = glb.scene
//    root.scale.set(0.03,0.03,0.03)
//    scene.add(root)
//})

const light = new THREE.DirectionalLight(0xffffff,1)
scene.add(light)

//Boiler Plate Code
const sizes ={
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,100)
camera.position.set(0,1,2)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)
renderer.updateShadowMap.enabled = true
renderer.gammaOutput = true

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}

animate()