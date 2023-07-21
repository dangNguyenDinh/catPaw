var wrapper = document.querySelector("#wrapper");
//âm thanh
function play(){
    var audio = document.getElementById(`sound${Math.floor(Math.random()*3+1)}`);
    audio.play();
}
//thiết lập delay
function delay(ms){
    return new Promise (
        (resolve)=>{
            setTimeout(() => {
                resolve();
            }, ms);
        }
    )
}
//note lai
let pawCount = 0;
// thiết lập chạm cho wrapper
function mainPaw(event){
    pawCount ++;
    wrapper.removeEventListener('click', mainPaw);
    //lấy tọa độ điểm cuối cùng
    var end = {
        x: 0,
        y: 0
    }
    end.x = event.clientX;
    end.y = event.clientY;

    //thêm phần tử pawPrint
    var newPawPrint = document.createElement("img");
    newPawPrint.className = "pawPrint";
    newPawPrint.src = `./assetForCat/paw_print_${Math.floor(Math.random()*4 + 1)}.png`;
    newPawPrint.alt = "pawPrint";
    newPawPrint.style.left = `${end.x}px`;
    newPawPrint.style.top = `${end.y}px`;

    var start = {
        x: 0,
        y: 0
    }
    
    var temp1 = Math.floor(Math.random()*2); // xét xem nó sẽ ở chiều dài hay chiều rộng
    var temp2 = Math.floor(Math.random()*2); // xét xem tọa độ cố định sẽ nằm ở trên hay ở dưới (x), hoặc nằm bên trái hay bên phải (y)   
    if(temp1 == 0) {
        start.y = (temp2 == 0) ? 0 : window.innerHeight;
        start.x = end.x; // y nằm random trên chiều rộng
    }else{
        start.x = (temp2 == 0) ? 0 : window.innerWidth;
        start.y = end.y; // x nằm random trên chiều dài
    }
    // console.log("toa do xuat phat : " + start.x + ", " + start.y); // kiểm thử
    
    // thêm phần tử catPaw
    var newCatPaw = document.createElement("img");
    newCatPaw.src = `./assetForCat/cat_paw_${Math.floor(Math.random() * 9 + 1)}.png`
    newCatPaw.className = 'catPaw';
    newCatPaw.alt = 'catPaw';
    newCatPaw.style.top = `${end.y}px`;
    newCatPaw.style.left = `${end.x}px `;
    //append để có phần tử
    document.querySelector("#wrapper").appendChild(newCatPaw);
    // giờ mới transform với thông số kia được
    console.log(start.x + " " + start.y);
    newCatPaw.style.transformOrigin = 'center top';
    // điều chỉnh 4 hướng
    var stylePaw = document.querySelector("style");
    delay(0)
    .then(
        ()=>{
            document.querySelector("h2").style.display = 'none';
            play();
            if(start.x == 0) {
                //phải
                stylePaw.textContent = 
                `@keyframes paw {
                    0%{
                        transform: translateX(${3*newCatPaw.clientWidth}px) translateY(${newCatPaw.clientWidth/9}px) rotate(-90deg);
                    }
                    50%{
                        transform: translateX(-${newCatPaw.clientWidth / 2}px) translateY(${newCatPaw.clientWidth/9}px) rotate(-90deg);
                    }
                    100%{
                        transform: translateX(${3*newCatPaw.clientWidth}px) translateY(${newCatPaw.clientWidth/9}px) rotate(-90deg);
                    }
                }`;
                delay(1100)
                .then(
                    ()=>{
                        document.querySelector("#wrapper").appendChild(newPawPrint);
                        newPawPrint.style.transform = `rotate(-90deg)`;
                        return delay(900);
                    }
                )
                .then(
                    ()=>{
                        newCatPaw.remove();
                        stylePaw.textContent = '';
                    }
                )
                
            }

            else if(start.x == window.innerWidth) {
                //trái
                stylePaw.textContent = 
                `@keyframes paw {
                    0%{
                        transform: translateX(-${3*newCatPaw.clientWidth}px) translateY(${newCatPaw.clientWidth/9}px) rotate(90deg);
                    }
                    50%{
                        transform: translateX(-${newCatPaw.clientWidth / 4}px) translateY(${newCatPaw.clientWidth/9}px) rotate(90deg);
                    }
                    100%{
                        transform: translateX(-${3*newCatPaw.clientWidth}px) translateY(${newCatPaw.clientWidth/9}px) rotate(90deg);
                    }
                }`;
                delay(1100)
                .then(
                    ()=>{
                        document.querySelector("#wrapper").appendChild(newPawPrint);
                        newPawPrint.style.transform = `rotate(90deg)`;
                        return delay(900);
                    }
                )
                .then(
                    ()=>{
                        newCatPaw.remove();
                        stylePaw.textContent = '';
                    }
                )
            
            }

        else if(start.y == window.innerHeight) {
                //dưới
                stylePaw.textContent = 
                `@keyframes paw {
                    0%{
                        transform: translateX(-${newCatPaw.clientWidth / 3}px) translateY(${2*newCatPaw.clientWidth}px);
                    }
                    50%{
                        transform: translateX(-${newCatPaw.clientWidth / 3}px) ;
                    }
                    100%{
                        transform: translateX(-${newCatPaw.clientWidth / 3}px) translateY(${2*newCatPaw.clientWidth}px);
                    }
                }`;
                delay(1100)
                .then(
                    ()=>{
                        document.querySelector("#wrapper").appendChild(newPawPrint);
                        return delay(900);
                    }
                )
                .then(
                    ()=>{
                        newCatPaw.remove();
                        stylePaw.textContent = '';
                    }
                )
                
            }

            else if(start.y == 0) {
                //trên
                stylePaw.textContent = 
                `@keyframes paw {
                    0%{
                        transform: translateX(-${newCatPaw.clientWidth / 3}px) translateY(-${newCatPaw.clientWidth}px) rotate(180deg);
                    }
                    50%{
                        transform: translateX(-${newCatPaw.clientWidth / 3}px) translateY(${newCatPaw.clientWidth / 3}px) rotate(180deg);  
                    }
                    100%{
                        transform: translateX(-${newCatPaw.clientWidth / 3}px) translateY(-${newCatPaw.clientWidth}px) rotate(180deg);
                    }
                }`;
                delay(1100)
                .then(
                    ()=>{
                        document.querySelector("#wrapper").appendChild(newPawPrint);
                        newPawPrint.style.transform = `rotate(180deg)`;
                        return delay(900);
                        
                    }
                )
                .then(
                    ()=>{
                        newCatPaw.remove();
                        stylePaw.textContent = '';
                    }
                )
                
            }
        return delay(2000);
        }
    )
    .then(
        ()=>{
            wrapper.addEventListener('click', mainPaw);
        }
    )

}

wrapper.addEventListener('click', mainPaw);

//bucket
function bucketPlay(){
    var audio = document.getElementById("sound4");
    audio.play();
}
document.querySelector("#bucket").onclick = ()=>{
    bucketPlay();
    var allPawPrint = document.querySelectorAll(".pawPrint");
    for(let i = 0; i < pawCount; i++){
        allPawPrint[i].remove();
    }
    pawCount = 0;
}
