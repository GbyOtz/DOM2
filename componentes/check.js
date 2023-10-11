const check=()=>{
    const i=document.createElement('input');
    i.classList.add('form-check-input','me-2');
    i.addEventListener('click',completeTask);
    return i;
}


 const completeTask=(evento1)=>{//funcion de check o nocheck
    const element = evento1.target;
    element.classList.toggle('checked');
}

export default check