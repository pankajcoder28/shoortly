const input = document.getElementById('link-input')
const linkform = document.getElementById('link-form')
const errmsg = document.getElementById('err-msg')

linkform.addEventListener('submit', formSubmit)

function ValidURL(str) {
   if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(str)) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}


function formSubmit(e){
    e.preventDefault()

    if(input.value === ""){
        errmsg.innerHTML = "please enter something"
        input.classList.add('border-red')
    }else if(!ValidURL(input.value)){
        errmsg.innerHTML = 'please enter a valid URL'
        input.classList.add('border-red')
    }else{
        errmsg.innerHTML = ''
        input.classList.remove('border-red')
        alert(success)
    }
}