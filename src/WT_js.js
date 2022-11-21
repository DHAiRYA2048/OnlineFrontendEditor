function update() {
	
	let htmlCode=document.getElementById("htmlCode").value;
	let cssCode=document.getElementById("cssCode").value;
	let javascriptCode=document.getElementById("javascriptCode").value;
	let text=htmlCode+"<style>"+cssCode+"</style>"+"<script>"+javascriptCode+"</script>";
	let iframe=document.getElementById('viewer').contentWindow.document;
	iframe.open();
	iframe.write(text);
	iframe.close();
	
}

function download(){
    var text1 = document.getElementById("htmlCode").value;
    var blob = new Blob([text1], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "index.html";
	anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

	var text2 = document.getElementById("cssCode").value;
	var blob = new Blob([text2], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "index.css";
	anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

	var text3 = document.getElementById("javascriptCode").value;
	var blob = new Blob([text3], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "index.js";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }