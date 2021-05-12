let getData = document.getElementById('fetchData')
var array1 = [];
let fData = () => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(result => result.json())
        .then(parse => {
            console.log(parse)
            let bpiArray1 = parse.bpi.EUR;
            let bpiArray2 = parse.bpi.GBP;
            let bpiArray3 = parse.bpi.USD;

            array1.push(bpiArray1, bpiArray2, bpiArray3);
            array1.forEach(func);

            var label2 = document.createElement("Label");
            label2.innerHTML = parse.time.updated;
            var lineBreak2 = document.createElement("br");
            var lineBreak3 = document.createElement("br");
            document.body.append(label2, lineBreak2, lineBreak3);

            array1.pop(bpiArray1);
            array1.pop(bpiArray2);
            array1.pop(bpiArray3);

            function func(array1) {
                var label1 = document.createElement("Label");
                label1.innerHTML = array1.description + ":  " + array1.rate +" "+array1.code +" = 1 BTC ";
                var lineBreak = document.createElement("br");
                document.body.append(label1,lineBreak);
            }
        })
        .catch(e => console.log(e))
}

getData.addEventListener('click', fData);