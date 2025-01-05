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
    getValue();
  });

  function getValue() {
    const linkBtn = document.getElementById("linkBtn");
    const copyBtn = document.getElementById("copyBtn");

    // clear old results
    resultLink = "";
    cdn = false;

    resultElement.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.remove();
      }
    });

    resultElement.classList.remove("active");
    cdnIPelement.classList.remove("active");
    linkBtn.classList.remove("cdn");
    //

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
          resultLink = `cdn.${myInputValue}`;
          cdn = true;
          break;
      }

      resultElement.classList.add("active");
      resultElement.insertAdjacentText("afterbegin", `${resultLink}`);
    }

    //  work with generated link:

    //   manage if is CDN option
    if (cdn) {
      // remove link btn
      linkBtn.classList.add("cdn");

      cdnIPelement.classList.add("active");
      const copyIPbtn = document.getElementById("copyIPBtn");

      copyIPbtn.addEventListener("click", () => {
        const cdnIPtoCopy = cdnIPelement.innerText;
        navigator.clipboard
          .writeText(cdnIPtoCopy)
          .then(() => {
            copyNotifyElement.classList.add("active");
            setTimeout(
              () => copyNotifyElement.classList.remove("active"),
              1000
            );
          })
          .catch((err) => {
            errCopyNotifyElement.innerText = `Error copying the link: ${err}`;
            errCopyNotifyElement.classList.add("active");
          });
      });
    } else {
      // open resulted link in new tab
      linkBtn.addEventListener("click", () => {
        window.open(resultLink, "_blank");
      });
    }

    // copy result link and manage copy notify
    copyBtn.addEventListener("click", () => {
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
    });

    // clear input
    input.value = "";
  }

  // manage permanent copy btns

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
    const textToCopy = "51.38.91.159";
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





