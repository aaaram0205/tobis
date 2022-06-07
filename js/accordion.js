export default function accordion() {

    const accorList = document.querySelectorAll('.accordian__list');

    accorList.forEach(function(list) {
        list.addEventListener ('click', function(){
            list.classList.toggle('active');      
        });
    })

    return

}

