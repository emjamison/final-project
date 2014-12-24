function sortingArray(){
	var beforeSorting = [34, 32,87,98,59,54, 55,4444,123,1,344];


	document.getElementById("beforeSorting").innerHTML= beforeSorting;
	return (beforeSorting);
	
}

 sortingArray();
 

function afsobutton(){
var beforeSorting = [34, 32,87,98,59,54, 55,4444,123,1,344];
var afterSorting;


document.getElementById("beforeSorting").innerHTML= beforeSorting;
	afterSorting=beforeSorting.sort(function(a,b){return a-b});
	document.getElementById("afterSorting").innerHTML=afterSorting;
}

sortingArray();

