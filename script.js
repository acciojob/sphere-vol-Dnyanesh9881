function volume_sphere() {
   let radius=document.getElementById("radius");
 let volume=document.getElementById("volume");
  let r=radius.value;
	let ans=(3/4)*3.142*(r**3)
	console.log(ans)
	volume.value=ans;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
