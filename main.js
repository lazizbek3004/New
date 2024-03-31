let each = document.querySelectorAll('.each')


each.forEach(el => {
    el.addEventListener('click', ()=>{
        
        

        let inside = el.querySelector('.text')
      
        
        inside.classList.toggle('textActive')
       
        each.forEach(others => {
            if(others != el){
                others.querySelector('.text').classList.remove('textActive')
            }
        })

    })
})







