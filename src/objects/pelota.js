import {objectTables} from './objectTable'
import * as THREE from 'three'

class pelota extends objectTables{

    constructor(radio, aceleration){
        super({})
        this.radio = radio;
        this.acelerationX = aceleration;
        this.acelerationY = aceleration;
        this.geometry = new THREE.SphereGeometry( radio, 32,32 );
        this.material = new THREE.MeshStandardMaterial({color:0xeeeeee});
        this.pelotaObject = new THREE.Mesh( this.geometry, this.material );
        this.objectListeners = [];
        this.pelotaObject.position.set(0,0,0.2)
        this.setOptions({
            X : this.pelotaObject.position.x,
            Y : this.pelotaObject.position.y,
            objMain : this.pelotaObject,
            draw : this.draw_ball
        } )

    }

    draw_ball(){
      this.X = this.pelotaObject.position.x = this.X + this.acelerationX;
      this.Y = this.pelotaObject.position.y = this.Y + this.acelerationY;
      console.log('X: ', this.pelotaObject.position.x, 'Y: ', this.pelotaObject.position.y  );
    }

    crushX(){
        this.acelerationX = this.acelerationX*-1;
      }
    crushY(){
        this.acelerationY = this.acelerationY*-1;
      }
}

export {pelota}
