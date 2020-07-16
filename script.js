let scene, camera, renderer;
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    45,
    30000
  );
  camera.position.set(-900, -200, -900);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  let controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", render);
  controls.minDistance = 500;
  controls.maxDistance = 1500;

  let materialArray = [];
  let texture_ft = new THREE.TextureLoader().load("h2s_ft.jpg");
  let texture_bk = new THREE.TextureLoader().load("h2s_bk.jpg");
  let texture_up = new THREE.TextureLoader().load("h2s_up.jpg");
  let texture_dn = new THREE.TextureLoader().load("h2s_dn.jpg");
  let texture_rt = new THREE.TextureLoader().load("h2s_rt.jpg");
  let texture_lf = new THREE.TextureLoader().load("h2s_lf.jpg");

  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

  for (let i = 0; i < 6; i++) materialArray[i].side = THREE.BackSide;
  let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
  let skybox = new THREE.Mesh(skyboxGeo, materialArray);
  scene.add(skybox);
  animate();
}
function render() {
  renderer.render(scene, camera);
}

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
init();
