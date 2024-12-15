document.addEventListener("DOMContentLoaded", ()=>{


    let myInputValue = '';
    const myButton = document.getElementById("myBtn");
    myButton.addEventListener("click", getValue);
    const mySelect = document.getElementById("select");

    const resultElement = document.getElementById("resultLink");

    function getValue(){
        const input = document.getElementById("myInput");
        myInputValue = input.value;
        mySelectValue = mySelect.value;
        
        
        if(myInputValue){
            let resultLink = '';

            switch(mySelectValue){
                case "AWS": 
                    resultLink = `https://new-hestiacp-fileharbor.crmart.dev/#/?cd=/${myInputValue}/public_html/&domain=${myInputValue}`;
                    break;
                case "OVH":
                    resultLink = `https://awsfileharbor.crmart.dev/#/?cd=/${myInputValue}/public_html/&domain=${myInputValue}`;
                    break;
            };
            
            resultElement.classList.add("active");
            resultElement.innerText = resultLink;
        }
    }
});





