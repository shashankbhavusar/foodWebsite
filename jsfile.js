console.log('welcome')
var a,b,c,d 
var button=document.getElementById('btn')
button.addEventListener('click', function(){
    a=document.getElementById('name')
    b=document.getElementById('age')
    c=document.getElementById('email')
    d=document.getElementById('fruits')
    m=document.getElementById('male')
    f=document.getElementById('female')
  
    var array=[a.value,b.value,c.value,d.value]
    if (m.checked==true){
        array.push(m.value)
    }
    else if (f.checked==true){
        array.push(f.value)
    }
    return alert(array)
})

