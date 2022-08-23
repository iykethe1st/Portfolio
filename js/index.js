const collapseItems = document.querySelectorAll(".collapsible");


collapseItems.forEach((item) => {
    item.addEventListener('click', function(){
        this.classList.toggle("collapsible--expanded")
    });
 });

