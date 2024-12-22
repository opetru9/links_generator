document.addEventListener("DOMContentLoaded", ()=>{

    let myInputValue = '';
    const myForm = document.getElementById("myForm");
    const mySelect = document.getElementById("select");
    const resultElement = document.getElementById("resultLink");
    const input = document.getElementById("myInput");

    let resultLink = "";
    
    // change input outline color
    input.addEventListener("input", () => {
      if (input.checkValidity()) {
        input.classList.remove("invalid");
        input.classList.add("valid");
      } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
      }
    });

    // generate new link 
    myForm.addEventListener("submit",(e) =>{
       e.preventDefault();
       getValue(); 
    });
    
    function getValue(){

        // clear old results
        resultLink = "";
        resultElement.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.remove(); 
            }})
            resultElement.classList.remove("active");
        // 

        // take new data
        myInputValue = input.value;
        mySelectValue = mySelect.value;
        
        // give result in base of option
        if(myInputValue){
            
            switch(mySelectValue){
                case "AWS":
                    resultLink = `https://awsfileharbor.crmart.dev/#/?cd=/${myInputValue}/public_html/&domain=${myInputValue}`;
                    break;
                case "OVH": 
                    resultLink = `https://new-hestiacp-fileharbor.crmart.dev/#/?cd=/${myInputValue}/public_html/&domain=${myInputValue}`;
                    break;
                case "CP":
                    resultLink = `https://newfileharbor.crmart.dev/#/?cd=/${myInputValue}/public_html/&domain=${myInputValue}`;
                    break;
                case "M6":
                    resultLink = `https://aws-m6-fileharbor.crmart.dev/#/?cd=/${myInputValue}/public_html/&domain=${myInputValue}`;
                    break;
                case "WP":
                    resultLink = `https://${myInputValue}/wp-login.php`;
                    break;
            };
            
            resultElement.classList.add("active");
            resultElement.insertAdjacentText("afterbegin", `${resultLink}`);
        }
        // clear input
        input.value = ''
    }

    // work with genereted link 
    const linkBtn = document.getElementById("linkBtn");
    const copyBtn = document.getElementById("copyBtn");
    const copyNotifyElement = document.getElementById("copyNotify");
    const errCopyNotifyElement = document.getElementById("errCopyNotify");

    // open resulted link in new tab
    linkBtn.addEventListener("click",() => {
        window.open(resultLink, "_blank")
    })

    // copy result link and manage copy notify
    copyBtn.addEventListener("click",() => {
        const resultLink = resultElement.innerText
        navigator.clipboard
          .writeText(resultLink)
          .then(() => {
            copyNotifyElement.classList.add("active");
            setTimeout(() => copyNotifyElement.classList.remove("active"),1000);
            })
          .catch((err) => {
            errCopyNotifyElement.innerText = `Error copying the link: ${err}`;
            errCopyNotifyElement.classList.add("active");
          });
    })
    
});





