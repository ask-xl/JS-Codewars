function getDivisorsCnt(n){
    let div = [];
    for (let i = 1; i <= n; i++) {        
        if(n % i === 0) div.push(i);
    }
    return div.length;
    }