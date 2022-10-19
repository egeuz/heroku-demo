/* async runtime */
(async () => {
  // get port and key data
  const res = await fetch('./get-info');
  const data = await res.json();
  console.log(data);

  //this
  const {port, key} = data;

  // display port number
  if (port) {
    const portText = `website served from port ${port}`;
    document.querySelector(".port-info").innerHTML = portText;
  }

  // show secret if key is present
  if (key) {
    const secretDiv = document.querySelector('.secret');
    const secretURL = `https://bit.ly/${key}`;
    const secretImage = `<img src="${secretURL}" alt="a secret???">`;
    secretDiv.innerHTML = secretImage;
  }

})();