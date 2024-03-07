
let camera, scene, renderer, cube;



const fixedWidth = 576;




function init() {


    // Init scene
    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xdddddd);

    // Init camera (PerspectiveCamera)
    camera = new THREE.PerspectiveCamera(
        75,
        576 / 600,
        0.1,
        1000
    );

    // Init renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });

    // Set size (whole window)
    renderer.setSize(fixedWidth, 600);

    // Render to canvas element
    document.querySelector('#test').appendChild( renderer.domElement );

    // Init BoxGeometry object (rectangular cuboid)
    const geometry = new THREE.IcosahedronGeometry(1, 1);

    // Create material with color
    const material = new THREE.MeshBasicMaterial({ color: 0x000000 });

    // const planeGeometry = new THREE.PlaneGeometry(3,2,0);
    // const planeMaterial = new THREE.MeshBasicMaterial({color: 0x00f00f});
    //
    // plane = new THREE.Mesh(planeGeometry, planeMaterial);
    // plane.rotation.x = 12;
    //
    // scene.add(plane);

    // Add texture -
    // const texture = new THREE.TextureLoader().load('textures/crate.gif');

    // Create material with texture
    // const material = new THREE.MeshBasicMaterial({ map: texture });


    // Create mesh with geo and material
    cube = new THREE.Mesh(geometry, material);
    // Add to scene
    scene.add(cube);

    // Position camera

    camera.position.z = 5;
}

// Draw the scene every time the screen is refreshed
function animate() {
    requestAnimationFrame(animate);

    // Rotate cube (Change values to change speed)
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function onWindowResize() {
    // Camera frustum aspect ratio
    camera.aspect = fixedWidth / 600;
    // After making changes to aspect
    camera.updateProjectionMatrix();
    // Reset size
    renderer.setSize(fixedWidth, 600);
}

function Create(){
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let length = document.getElementById('length').value;

    scene.remove(cube);



    const geometry = new THREE.BoxGeometry(width , height , length);

    // Create material with color
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    // Add texture -
    // const texture = new THREE.TextureLoader().load('textures/crate.gif');

    // Create material with texture
    // const material = new THREE.MeshBasicMaterial({ map: texture });

    //light

    // Create mesh with geo and material
    cube = new THREE.Mesh(geometry, material);
    // Add to scene
    scene.add(cube);


}

window.addEventListener('resize', onWindowResize, false);

 init();
 animate();

