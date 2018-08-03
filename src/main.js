import * as THREE from 'three'
import {mesa} from './objects/mesa'

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.5, 500 );

var renderer = new THREE.WebGLRenderer();
renderer.gammaInput = true;
renderer.gammaOutput = true;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



camera.position.z = 9;
camera.position.x = 0;
camera.position.y = -12;



var light = new THREE.PointLight( );
light.position.set(5, 6, 8 );
scene.add( light );

var mesaObj = new mesa(20,10,scene);
mesaObj.addPelota();

function animate() {
	requestAnimationFrame( animate );
    renderer.render( scene, camera );

    mesaObj.draw();
    camera.lookAt( scene.position );
}
animate();
