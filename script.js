import check from "./componentes/check.js";

(()=>{
    const btn=document.querySelector('[data-form-btn]')
    const crearLista=(evento)=>{
        evento.preventDefault();
        const input=document.querySelector('[data-form-input]');
        console.log(input.value);
        const value=input.value;
        const list=document.querySelector('[data-list]');
        const nuevaLista=document.createElement('tr');
        input.value='';
        const nuevaLista1=document.createElement('td');
        const nuevaLista2=document.createElement('td');
        nuevaLista1.classList.add('nuevaLista');
        nuevaLista1.innerText=value;

        nuevaLista.appendChild(nuevaLista1);
        nuevaLista1.appendChild(check());
        nuevaLista.appendChild(nuevaLista2);
        const contenido2=`<button type="submit" class="btn btn-danger">
        Delete</button>`;
    }    

    btn.addEventListener('click',crearLista);

})