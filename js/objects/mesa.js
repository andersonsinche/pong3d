class mesa{

    constructor(ancho, largo){
        this.ancho = ancho;
        this.largo = largo;

        this.geometry = new THREE.PlaneGeometry( this.ancho, this.largo, 2 );
        this.material = new THREE.MeshStandardMaterial({color:0x00ff00});
        this.mesaObject = new THREE.Mesh( this.geometry, this.material );
        this.objectListeners = [];
    }

    addObjects(obj) {
        this.objectListeners.push(obj);
    }

    draw(){
        
    }
    
}
