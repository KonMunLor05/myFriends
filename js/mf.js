var Num;
    function randomNum(){
        Num = Math.floor(Math.random()*9)+1;
        document.getElementById("rdNum").innerHTML = Num;
        var detail = document.getElementById("fDetail");
        for(let i = 0;i<Num; i++){
            const tName  = document.createElement("h4");
            tName.innerHTML  = "Nickname :&nbsp;&nbsp;";
            const inputName = document.createElement("input");
            inputName.id = "n"+i;
            inputName.type = "text";
            tName.appendChild(inputName);

            const tAge  = document.createElement("span");
            tAge.innerHTML = "&nbsp;&nbsp;Age :&nbsp;&nbsp;";
            const inputAge = document.createElement("input");
            inputAge.id = "a"+i;
            inputAge.type = "number";
            inputAge.min = 0;
            tAge.appendChild(inputAge);
            tName.appendChild(tAge);

            const br = document.createElement("br");
            detail.appendChild(tName);
            detail.appendChild(br);
            
        }
        const cButton = document.createElement("button");
        cButton.onclick = clearFunc; 
        cButton.innerHTML = "Clear";
        cButton.type = "button"; 
        cButton.classList.add("fButton");
        const sButton = document.createElement("button");
        sButton.onclick = confirmFunc; 
        sButton.innerHTML = "Confirm";
        sButton.type = "button";
        sButton.classList.add("fButton");
        const rButton = document.createElement("button");
        rButton.onclick = resetFunc; 
        rButton.innerHTML = "Reset";
        rButton.type = "button";
        rButton.classList.add("fButton");
        detail.appendChild(cButton);
        detail.appendChild(sButton);
        detail.appendChild(rButton);
        detail.style = "border : solid darkolivegreen 2px;border-radius:25px; padding:2%";
        detail.style.backgroundColor = "#bda28e";
        document.getElementById("randButton").style.display="none";
    }
    function confirmFunc(){
        var check;
        var result = document.getElementById("resultButton");
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
        for(let i = 0;i<Num;i++){
            const inputNCheck = document.getElementById("n"+i).value;
            const inputACheck = document.getElementById("a"+i).value;
            if(inputNCheck == "" || inputACheck == ""){
                check = "Please fill all the input.";
                break;
            }
        }
        if(check != undefined){
            alert(check);
            result.style = "";
        }else{
            var result = document.getElementById("resultButton");
            const sumButton = document.createElement("button");
            sumButton.onclick = sumFunc; 
            sumButton.innerHTML = "Sum";
            sumButton.type = "button";
            sumButton.classList.add("fButton");
            result.appendChild(sumButton);
            const aButton = document.createElement("button");
            aButton.onclick = averageFunc; 
            aButton.innerHTML = "Average";
            aButton.type = "button";
            aButton.classList.add("fButton");
            result.appendChild(aButton);
            const minButton = document.createElement("button");
            minButton.onclick = minFunc; 
            minButton.innerHTML = "Min";
            minButton.type = "button";
            minButton.classList.add("fButton");
            result.appendChild(minButton);
            const maxButton = document.createElement("button");
            maxButton.onclick = maxFunc; 
            maxButton.innerHTML = "Max";
            maxButton.type = "button";
            maxButton.classList.add("fButton");
            result.appendChild(maxButton);
            result.style = "text-align:center; border : solid darkolivegreen 2px; border-radius:25px; margin-top:5%; margin-left: 25%; margin-right:25%;margin-bottom:5%; padding:2%";
            result.style.backgroundColor = "#bda28e"
        }
    }
    function sumFunc(){
        var sum = document.querySelectorAll('input[type="number"]');
        var result = document.getElementById("resultButton");
        const hr = document.createElement("hr");
        result.appendChild(hr);
        var  sumN = 0;
        for(let i = 0;i <  Num;i++){
            sumN = sumN + parseInt(sum[i].value);
        }
        const textSum = document.createElement("h4");
        textSum.id = "textResult";
        textSum.innerHTML = "Sum of ages is : "+sumN;
        result.appendChild(textSum);
        textSum.style = "text-align:center;margin-top:2%;"
    }
    function averageFunc(){
        var sum = document.querySelectorAll('input[type="number"]');
        var result = document.getElementById("resultButton");
        const hr = document.createElement("hr");
        result.appendChild(hr);
        var  sumN = 0;
        for(let i = 0;i <  Num;i++){
            sumN = sumN + parseInt(sum[i].value);
        }
        const textSum = document.createElement("h4");
        textSum.id = "textResult";
        textSum.innerHTML = "Average of ages is : "+sumN/Num;
        result.appendChild(textSum);
        textSum.style = "text-align:center;margin-top:2%;"
    }
    function minFunc(){
        var fMin = document.querySelectorAll('input[type="number"]');
        var nMin = document.querySelectorAll('input[type="text"]');
        var result = document.getElementById("resultButton");
        const hr = document.createElement("hr");
        result.appendChild(hr);
        var minList = [];
        var minIndex = [];
        for(let i = 0;i < Num;i++){
                minList.push(parseInt(fMin[i].value));
        }
        var min = Infinity;
        for(let x = 0;x < minList.length; x++){
            console.log("minList:" + minList[x]);
            if(minList[x]<min){
                console.log("minL:" + minList[x]);
                console.log("minV:" + min);
                min = minList[x];
            }
        }
        console.log("min:" + min);
        for(let i = 0;i < minList.length;i++){
                if(minList[i]==min){
                    minIndex.push(i);
                    console.log("minIndex:" + i);
                }
        }

        for(let i = 0;i < minIndex.length;i++){
            const textSum = document.createElement("h4");
            textSum.id = "textResult";
            textSum.innerHTML = "Friends who have youngest is : "+nMin[minIndex[i]].value+" ,Age :" + fMin[minIndex[i]].value;
            result.appendChild(textSum);
            textSum.style = "text-align:center;margin-top:2%;"
        } 
    }
    function maxFunc(){
        var fMax = document.querySelectorAll('input[type="number"]');
        var nMax = document.querySelectorAll('input[type="text"]');
        var result = document.getElementById("resultButton");
        const hr = document.createElement("hr");
        result.appendChild(hr);
        var maxList = [];
        var maxIndex = [];
        for(let i = 0;i < Num;i++){
                maxList.push(parseInt(fMax[i].value));
        }
        var max = -Infinity;
        for(let x = 0;x < maxList.length; x++){
            console.log("maxList:" + maxList[x]);
            if(maxList[x]>max){
                console.log("maxL:" + maxList[x]);
                console.log("maxV:" + max);
                max = maxList[x];
            }
        }
        console.log("max:" + max);
        for(let i = 0;i < maxList.length;i++){
                if(maxList[i]==max){
                    maxIndex.push(i);
                    console.log("maxIndex:" + i);
                }
        }

        for(let i = 0;i < maxIndex.length;i++){
            const textSum = document.createElement("h4");
            textSum.id = "textResult";
            textSum.innerHTML = "Friends who have oldest is : "+nMax[maxIndex[i]].value+" ,Age :" + fMax[maxIndex[i]].value;
            result.appendChild(textSum);
            textSum.style = "text-align:center;margin-top:2%;"
        }
    }

    function clearFunc(){
        for(let i = 0;i<Num;i++){
            const inputNCheck = document.getElementById("n"+i);
            const inputACheck = document.getElementById("a"+i);
            inputNCheck.value = "";
            inputACheck.value = "";
        }
        var result = document.getElementById("resultButton");
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
        result.style = "";
    }
    function resetFunc(){
        var detail = document.getElementById("fDetail");
        var result = document.getElementById("resultButton");
        while (detail.firstChild) {
            detail.removeChild(detail.firstChild);
        }
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
        result.style = "";
        detail.style = "";
        document.getElementById("randButton").style.display="";
        document.getElementById("rdNum").innerHTML="";
    }