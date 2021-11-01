function kotak(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j < panjang; j++) {
            // if((i==0 & j==3) || (i==4 & j==3) || (i==0 & j==1 ) || (i==0 & j==5 ) || (i==1 & j==3) || (i==2 & j==(1||2) &  j==3) || (i==4 & j==1) || (i==4 & j==5))
            if((i == 2 & j==2) || 
            (i==1 & j==1) || (i==1 & j==0) || (i==1 & j==3) || (i==1 & j==4) || 
            (i==0 & j==1) || (i==0 & j==3) || 
            (i==3 & j==0) || (i==3 & j==1) || (i==3 & j==3) || (i==3 & j==4) ||
            (i==4 & j==1) || (i==4 & j==3)){
                hasil += '# ';
            }else{
                hasil += '* ';
            } 
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(kotak(5));