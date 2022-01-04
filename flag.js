let h1=document.createElement('h1')
h1.innerText='Weather API'
h1.setAttribute('id','title')
h1.classList.add("text-center")
document.body.appendChild(h1)


let header = document.createElement('div')
header.classList.add('text-center')
document.body.appendChild(header)
//input

let input=document.createElement('select')
input.setAttribute('id','count')
input.setAttribute('multiple','multiple')
input.setAttribute('size','5')
let op1=document.createElement('option')
op1.innerText="Choose Countries to see Weather Details"
op1.classList.add("disabled")
input.appendChild(op1)
input.classList.add('form-select','w-50','mx-auto','p-1','m-2')

fetch("https://restcountries.com/v3.1/all")
.then((d)=>d.json())
.then((data)=>{
    let arr=[]

    for(let i=0;i<250;i++){
        arr.push(data[i].name.common)
    }
    arr.sort();
    // console.log(arr);
    for(let i=0;i<arr.length;i++){
        let opt=document.createElement('option')
        opt.setAttribute('value',`${arr[i]}`)
        opt.classList.add('m-2','p-1','rounded')
        opt.innerText=arr[i].toUpperCase()
        input.appendChild(opt)
    }
})

header.appendChild(input)



let show_btn = document.createElement('button')
show_btn.setAttribute('id','show_btn')
show_btn.classList.add('btn','btn-success')
show_btn.innerText="Show"
header.appendChild(show_btn)

// let clear_btn = document.createElement('button')
// clear_btn.setAttribute('id','clear_btn')
// clear_btn.innerText="Clear"
// document.body.appendChild(clear_btn)

// let clear=document.getElementById('clear_btn')
// clear.addEventListener('click',()=>{
//     document.querySelector('.row').style.visibility="hidden";
// })


let main=document.createElement('div')
main.classList.add("container")
document.body.appendChild(main)


let row=document.createElement('div')
row.classList.add('row')
main.appendChild(row)


//----

let dd=document.getElementById('show_btn')
dd.addEventListener('click',()=>{
    let drop=[]
    for(var i of document.getElementById('count').options){
        if(i.selected){
            drop.push(i.value)
        }

    }
    for(i=0;i<drop.length;i++){
        fetch(`https://restcountries.com/v3.1/name/${drop[i]}`)
        .then((da)=>
        da.json())
        .then((data)=>{
            // console.log(data)
        let col2=document.createElement('div')
        col2.classList.add('col-sm-6','col-md-4','col-lg-4','col-xl-4',"m-2",'card','p-2')
        let tit2=document.createElement('h5')
        tit2.classList.add('text-center','card','card-header')
        tit2.setAttribute('id',`${drop[i]}`)
        tit2.innerText=`${drop[i-1]}`   
        col2.appendChild(tit2)
        let img2=document.createElement('img')
        img2.classList.add('img-fluid','m-2')
        img2.setAttribute('src',`${data[i-1].flags.png}`)
        col2.appendChild(img2)
        //--
        let div2=document.createElement('div')
        div2.classList.add('m-2','text-center')
        let cap_ind=document.createElement('div')
        cap_ind.innerHTML=`Capital: ${data[i-1].capital}`
        let re_ind = document.createElement('div')
        re_ind.innerHTML=`Region: ${data[i-1].region}`
        let code_ind = document.createElement('div')
        code_ind.innerHTML=`Country Code: ${data[i-1].fifa}`
        let btn_ind=document.createElement('div');
        btn_ind.classList.add('btn','border','m-2','py-2')
        btn_ind.innerText="Click for weather"
        btn_ind.setAttribute('id','btn_ind')
        div2.appendChild(cap_ind)
        div2.appendChild(re_ind)
        div2.appendChild(code_ind)
        div2.appendChild(btn_ind)
        col2.appendChild(div2)
        row.appendChild(col2) 
        // card end
        let b2=document.getElementById('btn_ind')
        b2.addEventListener('click',()=>{
         document.getElementById('btn_ind').style.display='none';
            let weather=data[i-1].capital;
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=1d3ece4bccdf110e7bffdbe285964c0a`)
            .then((d)=> d.json())
            .then((data)=>{
            let w=(data.main.temp-273.15).toFixed(1)
            // console.log(w);
            let v1=document.createElement('div')
            v1.innerHTML=`${w}` + `<sup>o</sup> C`
            v1.classList.add('text-dark','my-3')
            div2.appendChild(v1)
            })
            .catch((er)=>{
            console.log("error in WeatherApi")
            })

        })


        })
        .catch((er)=>{
        console.log("error in RestApi")
        })   
    }
})



// w api




        // fetch(`https://restcountries.com/v2/name/all`)
        // .then((da)=>
        // da.json())
        // .then((data)=>{
        //     console.log(data);
        // })



//
//aead203aade2494224d45db3aca71a12

//api.openweathermap.org/data/2.5/weather?q=tirana&appid=aead203aade2494224d45db3aca71a12