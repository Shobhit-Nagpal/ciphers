const encryptBtn = document.querySelector('#encryptBtn');

let cipherText = '';

encryptBtn.addEventListener("click", function() {
    
    let plainText = prompt("Enter plain text");
    let cipherText = '';
    
    const shift = 3;

    for (let i = 0 ; i < plainText.length ; i++) {
        let intermediateText = plainText.charCodeAt(i) + shift;
        cipherText += String.fromCharCode(intermediateText);
    }

    console.log(cipherText);

    
    const cipherDiv = document.querySelector('#cipherTextOutput');

    const cipherTextPara = document.createElement('p');
    if (cipherTextPara.length > 13) {
        cipherDiv.removeChild(cipherTextPara);
    }
    cipherTextPara.innerHTML = `<span>Cipher text: ${cipherText}</span>`;

    cipherDiv.appendChild(cipherTextPara);
});