var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var nameAlert = document.getElementById("nameAlert");
var linkAlert = document.getElementById("linkAlert");
var searchInput=document.getElementById("searchSite");



var siteListe = [];
if(localStorage.getItem("sites") !== null ){

    siteListe = JSON.parse((localStorage.getItem("sites")))
}

displayData ()



function addSite(){


    if(validationName() == true && validationLink() == true){

    var site = {
        name:siteName.value ,
        link:siteURL.value ,
    } 

   
    siteListe.push(site)
    localStorage.setItem("sites", (JSON.stringify(siteListe)))

    displayData ()

    clearSite()

 
    }
 }



function clearSite() {
    siteName.value = " ";
    siteURL.value = " ";

    siteURL.classList.remove("is-valid")
    siteURL.classList.remove("is-invalid")
    linkAlert.classList.add("d-none")


    siteName.classList.remove("is-valid")
    siteName.classList.remove("is-invalid")
    nameAlert.classList.add("d-none")
}




function displayData () {
    var cartona = "";
    for (var i = 0 ; i< siteListe.length ; i++){
        cartona += `
        
        <tr>
        <td>${i+1}</td>
        <td>${siteListe[i].name}</td>
        <td><a href="${siteListe[i].link}" target="_blank"> <button class="btn btn-warning">Visit</button> </a></td>
        <td><button  onclick=" deleteSite(${i})" class="btn btn-danger">Delete</button></td>

    </tr>
        `
       
    }

    document.getElementById("siteTable").innerHTML=cartona;
}




function deleteSite(elementNumber){

    siteListe.splice(elementNumber , 1);

    localStorage.setItem("sites", (JSON.stringify(siteListe)))

    displayData ()

}

function validationName(){
    
    var text = siteName.value ;
    var regexName =/^[\w]{3,20}$/;

 if (regexName.test(text) ){
        siteName.classList.add("is-valid")
        siteName.classList.remove("is-invalid")
        nameAlert.classList.add("d-none")
        return true

    } 
    else{
        siteName.classList.add("is-invalid")
        siteName.classList.remove("is-valid")
        nameAlert.classList.remove("d-none")
        return false
    }
}

function validationLink(){

    

    var text = siteURL.value ;
    var regexName =/^(https\:\/\/)[\w]{3,20}(\.)(com)$/;

  if (regexName.test(text) ){
    siteURL.classList.add("is-valid")
    siteURL.classList.remove("is-invalid")
        linkAlert.classList.add("d-none")
        return true

    } 
    else{
        siteURL.classList.add("is-invalid")
        siteURL.classList.remove("is-valid")
        linkAlert.classList.remove("d-none")
        return false
    }

    

    
}

function serachSite(){

    var term = searchInput.value;
    var cartona = "";
    for (var i = 0 ; i< siteListe.length ; i++){
        
        if(( siteListe[i].name.toLowerCase()).includes(term.toLowerCase())  )
        {
            cartona += `
        
            <tr>
            <td>${i+1}</td>
            <td>${siteListe[i].name}</td>
            <td><a href="${siteListe[i].link}" target="_blank"> <button class="btn btn-warning">Visit</button> </a></td>
            <td><button  onclick=" deleteSite(${i})" class="btn btn-danger">Delete</button></td>
    
        </tr>
            `
           
        }

    }


  document.getElementById("siteTable").innerHTML=cartona;
}

