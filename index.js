const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const controls = new THREE.OrbitControls( camera, renderer.domElement );
document.body.appendChild(renderer.domElement);

var directionalLight = new THREE.DirectionalLight('#fff', 0.85);
directionalLight.position.set(0, 0, 1);
scene.add(directionalLight);

class Point {
    constructor(position, color) {
        this.position = position;
        this.geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
        this.material = new THREE.MeshLambertMaterial({ color });
        this.point = new THREE.Mesh(this.geometry, this.material);
    }
    init() {
        this.point.position.set(...this.position);
        this.point.scale.set(0.025, 0.025, 0.025);
        scene.add(this.point);
        return this;
    }
}

getRandomNumber = () => {
    return Math.random() * (0.5 - 0) + 0;
}

let series = [];

for (let i = 0; i < 10; i++) {
    let position = [0.1 * i, getRandomNumber(), i];
    series.push(new Point(position, '#93e8f2').init());
}

for (let i = 0; i < 10; i++) {
    let position = [0.1 * i, getRandomNumber(), i];
    series.push(new Point(position, '#ffd6d3').init());
}

camera.position.z = 11;
render = () => {
    requestAnimationFrame(render);
    // camera.rotation.x = 90 * Math.PI / 180
    renderer.render(scene, camera);
    controls.update();
};

render();