
let Input = document.querySelector("input");
let button = document.querySelector("form button");
let img =document.querySelector(".qr-code img");
let qrCodeBox =document.querySelector(".qr-code");

button.addEventListener('click',()=>{
    let qrValue = Input.value;
    if(!qrValue){
        return alert("لطفا یک متن یا آدرس وارد کنید");
    }
    button.innerHTML='درحال دریافت QR Code'
    img.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    img.addEventListener('load',()=>{
        qrCodeBox.classList.remove('hidden')
        button.innerHTML='تولید QR Code';
    })
})