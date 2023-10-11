(()=>{
    const btn=document.querySelector('[data-form-btn]')
    const crearLista=(evento)=>{
        evento.preventDefault();
        const input=document.querySelector('[data-form-input]');
        console.log(input.value)
        const value=input.value

    }    

    btn.addEventListener('click',crearLista);

})