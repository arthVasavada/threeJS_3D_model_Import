import * as THREE from "./three.js-master/build/three.module.js"
import {GLTFLoader} from "./three.js-master/examples/jsm/loaders/GLTFLoader.js"

const canvas = document.querySelector(".webgl")
const scene = new THREE.Scene()

//Boiler Plate Code
const sizes ={
    width: window.innerWidth,
    height: window.innerHeight
}



const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,100)

const renderer = new THREE.WebGL1Renderer({

})