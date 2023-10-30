function volume_sphere() {
   let radius=document.geElementById("radius");
   radius=radius.value;
	let ans=(3/4)*3.142*(radius**3)
	return ans;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
