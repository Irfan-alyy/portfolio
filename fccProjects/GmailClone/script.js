const mainSection=document.querySelector('.main');
const data=document.querySelector('.mainSection');
mainSection.addEventListener('scroll',(event)=>{
event.preventDefault();
console.log("scrollde")

data.innerHTML+=` <div class="mainSection">
                <div class="first">
                    <input type="checkbox" name="check" id="">
                    <i class="fa-regular fa-star"></i>
                    <p>Lorem b</p>
                </div>
                <div class="middle">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, veritatis facere fuga quasi fugit nesciunt dolorum molestias laborum quibusdam consequuntur.</p>

                </div>
                <div class="end">
                    <p>jan 21</p>
                </div>
            </div>`;

})