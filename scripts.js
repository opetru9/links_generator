document.addEventListener("DOMContentLoaded", ()=>{
    
  let myInputValue = "";
  const myForm = document.getElementById("myForm");
  const mySelect = document.getElementById("select");
  const resultElement = document.getElementById("resultLink");
  const input = document.getElementById("myInput");
  const cdnIPelement = document.getElementById("cdnIP");
  const copyNotifyElement = document.getElementById("copyNotify");
  const errCopyNotifyElement = document.getElementById("errCopyNotify");

  let resultLink = "";
  let cdn = false;

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
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
 // remove old event listeners
  const linkBtn = document.getElementById("linkBtn");
  const copyIPbtn = document.getElementById("copyIPBtn");
  const copyBtn = document.getElementById("copyBtn");

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
    const linkBtn = document.getElementById("linkBtn");
    const copyBtn = document.getElementById("copyBtn");

  // clear old results
    resultLink = "";
    cdn = false;
    
    resultElement.classList.remove("active");
    cdnIPelement.classList.remove("active");
    linkBtn.classList.remove("cdn");

    resultElement.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.remove();
      }
    });

    // take new data
    myInputValue = input.value;
    mySelectValue = mySelect.value;

    // give result in base of option
    if (myInputValue) {
      switch (mySelectValue) {
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
        case "CDN":
          resultLink = `https://cdn.${myInputValue}/wp-content/uploads/blazing-bison/header.png`;
          cdn = true;
          break;
      }

      resultElement.classList.add("active");

      resultElement.insertAdjacentText("afterbegin", `${resultLink}`);
    }

    //  work with generated link:

    //   manage if is CDN option
    if (cdn) {
      cdnIPelement.classList.add("active");
      const copyIPbtn = document.getElementById("copyIPBtn");
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

// COPY IP event function
    function copyIPClickListener () {
    const cdnIPtoCopy = cdnIPelement.innerText;
    navigator.clipboard
      .writeText(cdnIPtoCopy)
      .then(() => {
        copyNotifyElement.classList.add("active");
        setTimeout(() => copyNotifyElement.classList.remove("active"), 1000);
      })
      .catch((err) => {
        errCopyNotifyElement.innerText = `Error copying the link: ${err}`;
        errCopyNotifyElement.classList.add("active");
      });
  };


  // COPY LINK event function
   function copyBtnClickListener () {
    const resultLink = resultElement.innerText;
    navigator.clipboard
      .writeText(resultLink)
      .then(() => {
        copyNotifyElement.classList.add("active");
        setTimeout(() => copyNotifyElement.classList.remove("active"), 1000);
      })
      .catch((err) => {
        errCopyNotifyElement.innerText = `Error copying the link: ${err}`;
        errCopyNotifyElement.classList.add("active");
      });
  };

// ------manage permanent copy btns---------------------------------------------------------------------------------------------

  const loginFH = document.getElementById("loginFHbtn");
  const passFH = document.getElementById("passFHbtn");
  const cdnIP = document.getElementById("cdnIPbtn");

  // File Hardbor login
  loginFH.addEventListener("click", () => {
    const textToCopy = "sOp4B7Dw9Hz3Ml@Qa84YuLzM3dK";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        copyNotifyElement.classList.add("active");
        setTimeout(() => copyNotifyElement.classList.remove("active"), 1000);
      })
      .catch((err) => {
        errCopyNotifyElement.innerText = `Error copying the link: ${err}`;
        errCopyNotifyElement.classList.add("active");
      });
  });

  // File Hardbor password
  passFH.addEventListener("click", () => {
    const textToCopy = "nM4@zO7Hg3o9j7Sqr43HkL34p7gAs";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        copyNotifyElement.classList.add("active");
        setTimeout(() => copyNotifyElement.classList.remove("active"), 1000);
      })
      .catch((err) => {
        errCopyNotifyElement.innerText = `Error copying the link: ${err}`;
        errCopyNotifyElement.classList.add("active");
      });
  });

  // CDN IP
  cdnIP.addEventListener("click", () => {
    const textToCopy = "57.128.187.88";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        copyNotifyElement.classList.add("active");
        setTimeout(() => copyNotifyElement.classList.remove("active"), 1000);
      })
      .catch((err) => {
        errCopyNotifyElement.innerText = `Error copying the link: ${err}`;
        errCopyNotifyElement.classList.add("active");
      });
  });
});





