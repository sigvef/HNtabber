(function(){
	var arr = document.getElementsByTagName('a');
	for(var i=0;i<arr.length;i++){
		arr[i].target = "_blank";
	}
})();