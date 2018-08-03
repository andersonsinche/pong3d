import * as THREE from 'three'

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


var mesa = new THREE.PlaneGeometry( 24, 10, 24 );
var material = new THREE.MeshStandardMaterial({color:0x00ff00});
var plane = new THREE.Mesh( mesa, material );

var geometry = new THREE.SphereGeometry( 0.2, 32,32 );
var material = new THREE.MeshStandardMaterial({color:0xeeeeee});
var cube = new THREE.Mesh( geometry, material );

cube.position.set(0,0,0.2)

scene.add( cube );
scene.add( plane);

var directionX = 0.05;
var directionY = 0.05;


function animate() {
	requestAnimationFrame( animate );
    renderer.render( scene, camera );
    cube.position.x += directionX;
    cube.position.y += directionY;
    if (cube.position.x > 12 && directionX>0){
        directionX = -0.05
    }
    else if (cube.position.x < -12 && directionX<0){
        directionX = 0.05
    }

    if (cube.position.y > 5 && directionY>0){
        directionY = -0.05
    }
    else if (cube.position.y < -5 && directionY<0){
        directionY = 0.05
    }

    camera.lookAt( scene.position );
}
animate();
