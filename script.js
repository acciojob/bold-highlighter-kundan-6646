const allStrogEle = document.getElementsByTagName('strong');
function highlight() {
	for (let ele of allStrogEle) {
		ele.style.color = 'green';
	}
}


function return_normal() {
    for (let ele of allStrogEle) {
		ele.style.color = 'black';
	}
}
