const shareButtons = document.querySelectorAll('.tile-share-button','share-button');
async function copyText(e) {
 e.preventDefault();
 const link = this.getAttribute('link')
 try{
    await navigator.clipboard.writeText('link')
    alert("Copied to clipboard" +' '+ link)
    }catch (err) {
        console.log(err)
    }
};

shareButtons.forEach(shareButton => 
    shareButton.addEventListener('click',copyText));


const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');
const contents = document.getElementById('dropmenu-contents');
const contactContents=document.getElementById('contact-contents');
dropdownButton.addEventListener('click', () => {
  if (!contents.classList.contains('show')) {
    contents.innerHTML =contactContents.innerHTML;
    contents.style.height = '100px';
  } else {
    contents.style.height = '0';
    contents.addEventListener('transitionend', transitionEndHandler);
  }
  contents.classList.toggle('show');
});

function transitionEndHandler() {
  contents.innerHTML = '';
  contents.classList.remove('show');
  contents.removeEventListener('transitionend', transitionEndHandler);
}
    //<a href="https://www.instagram.com/mihai_souldrip_/">Instagram</a>
      // <a href="https://www.facebook.com/mi.soulDRIP/">Facebook</a>"
   
   