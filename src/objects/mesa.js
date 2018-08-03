import * as THREE from 'three'
import {pelota} from './pelota'
class mesa{

    constructor(ancho, largo, scene){
        this.ancho = ancho;
        this.largo = largo;
        this.scene = scene

        this.geometry = new THREE.PlaneGeometry( this.ancho, this.largo, 2 );
        this.material = new THREE.MeshStandardMaterial({color:0x00ff00});
        this.mesaObject = new THREE.Mesh( this.geometry, this.material );
        
        this.scene.add(this.mesaObject);
        
        this.objectListeners = [];

    }

    addPelota(){
        const objPelota = new pelota(0.2,0.05);
        this.addObjects(objPelota);
    }

    addObjects(obj) {
        this.objectListeners.push(obj);
        this.scene.add(obj.objMain);
    }

    draw(){
        for(var obj in this.objectListeners){
            if (this.objectListeners[obj].X > 12 ){
                this.objectListeners[obj].crushX();
            }
            else if (this.objectListeners[obj].X< -12){
                this.objectListeners[obj].crushX();
            }

            if (this.objectListeners[obj].Y > 5){
                this.objectListeners[obj].crushY();
            }
            else if (this.objectListeners[obj].Y <-5){
                this.objectListeners[obj].crushY();
            }
            this.objectListeners[obj].draw();
        }
    }
    
}


export {mesa}