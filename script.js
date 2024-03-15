// //your JS code here. If required.
// let student={
// 	name: "mina",
// };
// 	funtion getKeys(){
// 		let arr=[];
// 	for(let i in student){
// 		arr.push(i);
		
// 	}
// 	return arr;
// },
// obj.__proto__=getKeys();
// obj.getKeys();


Object.prototype.getKeys = function () {
  return Object.keys(this);
};