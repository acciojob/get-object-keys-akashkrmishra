//your JS code here. If required.
let obj={
	name: "mina",
};
	funtion getKeys(){
		let arr=[];
		let a=0;
	for(let i in obj){
		arr[a]=i;
	}
	return arr;
},
obj.__proto__=getKeys();
obj.getKeys();