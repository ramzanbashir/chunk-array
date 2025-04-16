
// chunk array solution-1

// var chunkArray = ["chunk1", "chunk2", "chunk3", "chunk4", "chunk5", "chunk6", "chunk7", "chunk8", "chunk9", "chunk10"];
// var userno = +prompt("Enter");
// var result = [];
// var finalResult = [];

// for (var i = 0; i < chunkArray.length; i++) {
//     result.push(chunkArray[i]);
//     if (result.length == userno) {
//         finalResult.push(result);
//         result = [];
//     }else if (i == chunkArray.length - 1) {
//        finalResult.push(result);
//     }
// }
// console.log(finalResult);


// chunk array solution-2

// let array = ["chunk1", "chunk2", "chunk3", "chunk4", "chunk5", "chunk6", "chunk7", "chunk8", "chunk9", "chunk10"];


// function chunkArray(array, size) {
//     let basket = [];
//     let result = [];

//     for(let i = 0 ; i<array.length;i++){
//         basket.push[array[i]]
//         if(basket.length === size || i ===array.length-1 ){
//             basket.push(result);
//             basket=[];
//         }
//     }

//     return result

// }

// console.log(chunkArray(array,5))

//chunk array solution-3


    var array = ["chunk1", "chunk2", "chunk3", "chunk4", "chunk5", "chunk6", "chunk7", "chunk8", "chunk9", "chunk10"];

    function chunkArray(array, size) {
        var basket = [];
        var result = [];

        for (var i = 0; i < array.length; i++) {
            basket.push(array[i]);
            if (basket.length === size || i === array.length - 1) {
                result.push(basket);
                basket = [];
            }
        }

        return result;
    }

    var chunkSize = prompt("Enter chunk size:");
    chunkSize = parseInt(chunkSize); //convert in to String
    // console.log(chunkArray(array, chunkSize));

    if (isNaN(chunkSize) || chunkSize <= 0) {
        alert("Invalid chunk size.");
    } else {
        var chunks = chunkArray(array, chunkSize);
        var outputDiv = document.getElementById("output");

        for (var i = 0; i < chunks.length; i++) {
            var para = document.createElement("p");
            para.textContent = "Chunk " + (i + 1) + ": " + chunks[i].join(", ");
            outputDiv.appendChild(para);
        }
    }
