var m = 'Hello'; //input
var split = m.split(/(\s+)/); //memecah string menjadi array
var val = ''; //variable value isi string kosong
for (var i = 0; i < split.length; i++) { //looping split
  var mtoArr = split[i].split(''); //memisah antar huruf array
  var sliceArr = mtoArr.slice(1); //mengambil satu huruf pertama
  var ascii = mtoArr[0].charCodeAt(0); //menjadikan kode ascii
  var reverseArr = sliceArr.reverse(); //membalik string
  const final = ascii+''+reverseArr.join(''); //join
  val += final; 
}
console.log(val.replace(32, " ")); //menampilkan nilai .replace untuk menganti nilai 32 dengan string kosong