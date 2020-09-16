// Use the value below whenever you need the value //of Pi
const PI = 3.14159 ;
const sphereVolume = function (radius) {
  // Code here!
  let vol = 0;
  
  vol = 4 / 3 * PI * radius * radius * radius 
  return vol;

}
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);


const coneVolume = function (radius, height) {
  // And here!
  let vol = 0;
  
  vol = 1 / 3 * PI * radius * radius * height
  return vol;

}
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  let vol = 0;
  
  vol = width * depth * height
  return vol;

}
console.log(prismVolume(3, 4, 5) === 60);

