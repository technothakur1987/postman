console.log("Welcome to PostMaster");
let geturl = url.value;
let posturl = url.value;
console.log(geturl);
console.log(posturl);
let customParameters = document.getElementsByClassName("customParameters");

//https://api.github.com/users
//https://reqres.in/api/users

//initially customparam box is hidden 

let customParam = document.getElementById("customParam");
customParam.style.display = "none"
let button2 = document.getElementById("button2");
button2.style.display = "none"

//initially requestJsonBox  is hidden 

let requestJsonBox = document.getElementById("requestJsonBox");
requestJsonBox.style.display = "none"

//initially responseJsonBox  is hidden 

let responseJsonBox = document.getElementById("responseJsonBox");
responseJsonBox.style.display = "none"


/*when some one clicks on get request,, 
1.post radio is hidden 
2.customparameters radio is hidden
3.then he clicks on json radio
4.response box is shown with results*/

let requestTypeGet = document.getElementById("requestTypeGet");
requestTypeGet.addEventListener("click", () => {
    //hiding post option
    let requestTypePost = document.getElementById("requestTypePost");
    requestTypePost.style.display = "none";
    let postLabel = document.getElementById("postLabel");
    postLabel.innerText = " ";

    let customParamLabel = document.getElementById("customParamLabel");
    customParamLabel.style.display = "none";
    let customParameters = document.getElementById("customParameters");
    customParameters.style.display = "none"

    let json = document.getElementById("json");
    json.addEventListener("click", () => {
        console.log("json radio is clicked by the user..now click on submit buttom ,, response will be shown in response box ")
        let submit = document.getElementById("submit");
        submit.addEventListener("click", () => {

            let geturl = url.value;
            console.log(`fetching api for get request for url : ${geturl}`)
            //fetching api
            fetch(url.value)
                .then(res => res.text())
                .then(text => {
                    console.log(text);
                    //showing the response box         

                    responseJsonBox.style.display = "block"
                    //chnaging the innetext of response box to text 
                    console.log("the result wil appear in request jsomn box ")
                    let responseJson = document.getElementById("responseJson");
                    responseJson.innerHTML = text;


                })






        });



    })



})

/* when someone clicks on post 
1.get radio should be hidden */
let requestTypePost = document.getElementById("requestTypePost");
requestTypePost.addEventListener("click", () => {
    console.log("get button is hidden");
    let requestTypeGet = document.getElementById("requestTypeGet");
    requestTypeGet.style.display = "none";
    let getLabel = document.getElementById("getLabel");
    getLabel.style.display = "none";

    /*when someone clicks on customparametrs radio 
    1.hide the json radio 
    2.showing the customParam box 
    3./*now here when some one clicks on + button one more custom param is added*/


    let customParameters = document.getElementById("customParameters");
    customParameters.addEventListener("click", () => {
        console.log("hiding the json radio ")
        let json = document.getElementById("json")
        json.style.display = "none"
        let jsonLabel = document.getElementById("jsonLabel")
        jsonLabel.style.display = "none"

        let customParam = document.getElementById("customParam");
        customParam.style.display = "block "
        button2.style.display = "block"






    }
    )

    /*when some one clicks on json radio 
    1.hide the custom parameters radio
    2.show the requestjson box */

    let json = document.getElementById("json");
    json.addEventListener("click", () => {
        console.log("custom parameters is hidden")
        let customParamLabel = document.getElementById("customParamLabel");
        customParamLabel.style.display = "none";
        let customParameters = document.getElementById("customParameters");
        customParameters.style.display = "none"

        let requestJsonBox = document.getElementById("requestJsonBox");
        requestJsonBox.style.display = "block";


        /*after entering the requestjsonbox data,when submnit btn is cllicked 
        1.fetching the post */


        let submit = document.getElementById("submit")
        submit.addEventListener("click", () => {
            console.log("submit buttn is clicked ");

            console.log(`the value entered in requestjsonbox is ${requestJson.value}`)
            console.log(typeof requestJson.value);

            let posturl = url.value;

            console.log(`${posturl}`)



            /*FETCHING THE POST API
            1.DATA AND URL IS ALREADY DEFINED
            2.STARING FROM OPTION*/


            /*this is the data example
            
            {
                "id": 1,
                "email": "george.bluth@reqres.in",
                "first_name": "George",
                "last_name": "Bluth",
                "avatar": "https://reqres.in/img/faces/1-image.jpg"
            }*/






            let data = requestJson.value;
            const options = {
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            fetch(posturl, options)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    //res id obj which need to be converted into a string to inoput it into response box 
                    console.log(JSON.stringify(res))
                    //showing the response box         

                    responseJsonBox.style.display = "block"
                    //chnaging the innetext of response box to res 
                    console.log("the result wil appear in request jsomn box ")
                    let responseJson = document.getElementById("responseJson");
                    responseJson.innerHTML = `${JSON.stringify(res)}`;

                });





        })


    })







})

//when someone clicks on + buttom
let index = 0;



button2.addEventListener("click", (e) => {
    index++;
    console.log(index)
    e.preventDefault()
    console.log("one more param added")

    let div1 = document.createElement("div")
    div1.innerText = "this div is created by me "
    div1.innerHTML = ` <div id="customParam">
              <label id="parameter" class="parameter"
                  for="parameter">PARAMETER${index + 1}&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</label><input
                  type="text" id="paramkey${index + 1}"  class="paramkey"name="paramkey${index + 1}" placeholder="Enter Parameter Key${index + 1}">&#160;&#160;&#160;&#160;&#160;&#160;<input type="text"
                  id="paramvalue${index + 1}"  class="paramvalue" placeholder="Enter Parameter Value${index + 1}" name="paramvalue${index + 1}">
              
          </div>`


    let divcreated = document.querySelector(".divcreated")
    divcreated.appendChild(div1);
    console.log("the div is appended")



    /*when someone clicks on submit buttin */
    submit.addEventListener("click", () => {
        console.log("submit button is clicked")
        let string = {};


       /* let key = document.getElementById(`paramkey1`).value;
        console.log(key);*/
        console.log(index)


        for (ii = 1; ii < index+2; ii++) {
            let key = document.getElementById(`paramkey${ii}`).value;
            console.log(key);
            let value = document.getElementById(`paramvalue${ii}`).value;
            console.log(value);
            string[key]=value;

        }
        
        console.log(string);
        
        /*now fetching api for post request */

        let data1 = JSON.stringify(string) ;
        console.log(data1)
        console.log(typeof data1);
        let posturl= url.value;
        console.log(posturl);

        const option = {
            method: 'POST',
            body: data1,
            headers: {
                'Content-Type': 'application/json'
            }

        }
        console.log(option)
        fetch(posturl, option)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            console.log(typeof res)

            //showing the response box         
            responseJsonBox.style.display = "block"
            //chnaging the innetext of response box to res
            console.log("the result wil appear in request jsomn box ") 
            let responseJson = document.getElementById("responseJson");
            responseJson.innerHTML = `${JSON.stringify(res)}`;
        })    



        /*
        
                    //res id obj which need to be converted into a string to inoput it into response box 
                    console.log(JSON.stringify(res))
                    //showing the response box         

                    responseJsonBox.style.display = "block"
                    //chnaging the innetext of response box to res 
                    console.log("the result wil appear in request jsomn box ")
                    let responseJson = document.getElementById("responseJson");
                    responseJson.innerHTML = `${JSON.stringify(res)}`;

                });
        */
            

    })








    /*this is the data example
              
              {
                  "id": 1,
                  "email": "george.bluth@reqres.in",
                  "first_name": "George",
                  "last_name": "Bluth",
                  "avatar": "https://reqres.in/img/faces/1-image.jpg"
              }*/


})




