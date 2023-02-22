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
const contents = document.getElementById('dropmenu-contents');
dropdownButton.addEventListener('click', () => {
    contents.classList.toggle('active');
});