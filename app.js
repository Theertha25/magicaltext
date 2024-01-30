const input=document.getElementById('input')
const output=document.getElementById('output')
function capital(){
    if(input.value==''){
    output.innerText=''   
    let paragraph=document.createElement('p')
    paragraph.innerText='enter the prompt value 🤜👊'
    paragraph.style.color='red'
    output.appendChild(paragraph)
    }
    else{
    output.innerText=''   
    let paragraph=document.createElement('p')
    paragraph.innerText=input.value
    paragraph.classList.add('capital')
    output.appendChild(paragraph)
    }
}
function lower(){
    if(input.value==''){
    output.innerText=''   
    let paragraph=document.createElement('p')
    paragraph.innerText='enter the prompt value 🤜👊'
    paragraph.style.color='red'
    output.appendChild(paragraph)
    }
    else{
        output.innerText=''   
        let paragraph=document.createElement('p')
        paragraph.innerText=input.value
        paragraph.classList.add('lower')
        output.appendChild(paragraph) 
    }
}
function first(){
    if(input.value==''){
        output.innerText=''
        let paragraph=document.createElement('p')
        paragraph.innerText='enter the prompt value 🤜👊'
        paragraph.style.color='red'
        output.appendChild(paragraph)
    }  
    else{
        output.innerText=''
        let paragraph=document.createElement('p')
        paragraph.innerText=input.value
        paragraph.classList.add('first')
        output.appendChild(paragraph)
    }  
}
function bolder(){
    if(input.value==''){
    output.innerText=''
    let paragraph=document.createElement('p')
    paragraph.innerText='enter the prompt value 🤜👊'
    paragraph.style.color='red'
    output.appendChild(paragraph)
    }
    else{
    output.innerText=''
    let paragraph=document.createElement('p')
    paragraph.innerText=input.value
    paragraph.classList.add('bolder')
    output.appendChild(paragraph)
    }
}
function italic(){
    if(input.value==''){
    output.innerText=''
    let paragraph=document.createElement('p')
    paragraph.innerText='enter the prompt value 🤜👊'
    paragraph.style.color='red'
    output.appendChild(paragraph)
    }
    else{
    output.innerText=''
    let paragraph=document.createElement('p')
    paragraph.innerText=input.value
    paragraph.classList.add('italic')
    output.appendChild(paragraph)
    }
}
function underline(){
    if(input.value==''){
    output.innerText=''
    let paragraph=document.createElement('p')
    paragraph.innerText='enter the prompt value 🤜👊'
    paragraph.style.color='red'
    output.appendChild(paragraph) 
    }
    else{
    output.innerText=''
    let paragraph=document.createElement('p')
    paragraph.innerText=input.value
    paragraph.classList.add('underline')
    output.appendChild(paragraph)
    }
}