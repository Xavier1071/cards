document.addEventListener('DOMContentLoaded', () => {
    const card2 = document.querySelector('.card2');
    const parrillaItems = document.querySelectorAll('.parrilla .item');
    const closeButton = document.querySelector('.closeModal');

    parrillaItems.forEach(item => {
        item.addEventListener('click', () => {
            if (card2.style.display === 'none' || card2.style.display === '') {
                card2.style.display = 'flex';
            }
            else {

                closeButton.addEventListener('click', () => {
                    card2.style.display = 'none';
                });

            }  
        });


    });
});


/*var modal = document.getElementById("modal");
var img = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
modal.style.display = "block";
img.src = this.src;
captionText.innerHTML = this.alt;
span.onclick = function() {
    modal.style.display = "none";*/