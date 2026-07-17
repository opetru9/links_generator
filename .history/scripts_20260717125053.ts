document.addEventListener("DOMContentLoaded", ()=>{
    
   enum ServerOption {
    APP = "APP",
    DO = "DO",
    OVH = "OVH"
  };
  let serverDomains :Readonly< Record<ServerOption, string > = {
      DO :"do-hestiacp-fileharbor.hypetracker.org",
      OVH:"new-hestiacp-fileharbor.crmart.dev",
      APP:"apps-hestiacp-fileharbor.hypetracker.org"  
  }

  let myInputValue = "";
  const myForm = document.getElementById("myForm")!;
  const mySelect = document.getElementById("select")! as HTMLSelectElement;
  const resultElement = document.getElementById("resultLink")!;
  const resultText = document.getElementById("resultText")!;
  const input = document.getElementById("myInput")! as HTMLInputElement;
  const cdnIPelement = document.getElementById("cdnIP")!;
  const cdnLinkElement = document.getElementById("cdnLink")!;
  const copyNotifyElement = document.getElementById("copyNotify")!;
  const errCopyNotifyElement = document.getElementById("errCopyNotify")!;

  let resultLink = "";
  let resultCdnLink = ""
  let cdn = false;

  // change input outline color
  // input.addEventListener("input", () => {
  //   if (input.checkValidity()) {
  //     input.classList.remove("invalid");
  //     input.classList.add("valid");
  //   } else {
  //     input.classList.remove("valid");
  //     input.classList.add("invalid");
  //   }
  // });

  // generate new link
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
 // remove old event listeners
  const linkBtn = document.getElementById("linkBtn")!;
  const copyIPbtn = document.getElementById("copyIPBtn")!;
  const copyBtn = document.getElementById("copyBtn")!;

  if (linkClickListener) {
    linkBtn.removeEventListener("click", linkClickListener);
  }
  if (copyIPClickListener) {
    copyIPbtn?.removeEventListener("click", copyIPClickListener);
  }
  if (copyBtnClickListener) {
    copyBtn.removeEventListener("click", copyBtnClickListener);
  }

    getValue();
  });

  function getValue() {
    const linkBtn = document.getElementById("linkBtn")!;
    const copyBtn = document.getElementById("copyBtn")!;

  // clear old results
    resultLink = "";
    resultCdnLink = "";
    myInputValue = "";
    cdn = false;
    
    cdnLinkElement.classList.remove("active");
    resultElement.classList.remove("active");
    cdnIPelement.classList.remove("active");
    linkBtn.classList.remove("cdn");

    resultText.innerText = ""
    cdnLinkElement.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.remove();
      }
    });


    // take new data
    myInputValue = input.value.trim().toLowerCase()
    if (myInputValue.startsWith('http://') || myInputValue.startsWith('https://')) {
      try{
        const url =  new URL(myInputValue);
        myInputValue = url.hostname
        console.log(myInputValue)
      }
      catch (err){
        console.log(err)
      }
  }

    let mySelectValue = mySelect.value as ServerOption;

    // give result in base of option
    if (myInputValue) {
      const domain = serverDomains[mySelectValue]
      resultLink = `https://${domain}/#/?cd=/${myInputValue}/public_html/&domain=${myInputValue}`

      resultElement.classList.add("active");

      resultText.textContent = resultLink;
    }

    //  work with generated link:

    //   manage if is CDN option
    if (cdn) {
      const copyCdnBtn = document.getElementById("copyCdnBtn")!;
      const copyIPbtn = document.getElementById("copyIPBtn")!;

      cdnLinkElement.insertAdjacentText("afterbegin", `${resultCdnLink}`);
      
      cdnIPelement.classList.add("active");
      cdnLinkElement.classList.add("active");
      copyCdnBtn.addEventListener("click", copyCdnBtnClickListener)
      copyIPbtn.addEventListener("click", copyIPClickListener); 
    } 

    // opent link in blank
    linkBtn.addEventListener("click", linkClickListener);

    // copy result link and manage copy notify
    copyBtn.addEventListener("click", copyBtnClickListener );
    
  // clear input
  input.value = "";
}


// LINK listener event funtion
   function linkClickListener() {
      if (resultLink) {
        window.open(resultLink, "_blank");
      }
    };

// COPY event funtion
    function copyToClipboard(text:string):void{
      navigator.clipboard
      .writeText(text)
      .then(() => {
        copyNotifyElement.classList.add("active");
        setTimeout(() => copyNotifyElement.classList.remove("active"), 1000);
      })
      .catch((err) => {
        let errText: string = ""
        if ( err instanceof Error ) {
          errText = err.message
        }else{
          errText = "unknow error"
        }
        console.log(errText);
        errCopyNotifyElement.innerText = `Error copying the link: ${errText}`;
        errCopyNotifyElement.classList.add("active");
      });
}
// COPY IP event function
    function copyIPClickListener () {
    const cdnIPtoCopy = cdnIPelement.innerText;
    copyToClipboard(cdnIPtoCopy)
  };
// COPY LINK event function
   function copyBtnClickListener () {
    const resultLinkText = resultElement.innerText;
    copyToClipboard(resultLinkText)
  };
// COPY CDN LINK event function
   function copyCdnBtnClickListener () {
    const cdnResultLink = cdnLinkElement.innerText;
    copyToClipboard(cdnResultLink)
  };


});





