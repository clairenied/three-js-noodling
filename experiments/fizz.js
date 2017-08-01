const scene = new THREE.Scene();
scene.background = new THREE.Color('#0b1d30');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let light = new THREE.PointLight('#fff', 1, 100);
light.position.set(50, 50, 50);
scene.add(light);

class Bubble {
    constructor(position, scale) {
        this.position = position;
        this.scale = scale;
        this.geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
        this.material = new THREE.MeshLambertMaterial({ color: '#93e8f2' });
        this.cube = new THREE.Mesh(this.geometry, this.material);
    }
    init() {
        this.cube.position.set(this.position, this.position, this.position);
        this.cube.scale.set(this.scale, this.scale, this.scale);
        scene.add(this.cube);
        return this;
    }
}

let fizz = [];
for (let i = 0; i < 10; i++) {
    let position = Math.random() * (5 - 0) + 0;
    let scale = Math.random() * (0.5 - 0) + 0;
    fizz.push(new Bubble(position, scale).init());
}

camera.position.z = 10;
render = () => {
    requestAnimationFrame(render);
    fizz.forEach((bubble, i) => {
        console.log(bubble.cube.position.y)
        bubble.cube.position.y < 3 ? bubble.cube.position.y += 0.01 : bubble.cube.position.y -= 0.01;
    });
    renderer.render(scene, camera);
};

render();