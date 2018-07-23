const dog_api = 'https://dog.ceo/api/'
const viewDog = document.querySelector(".viewDog")

class Dogbreed {
    constructor() {
        // this.message = message
        this.dogChoice()
    }
    dogChoice() {
        $.ajax({
            url: "https://dog.ceo/api/breeds/list/all",
            dataType: "json",
            success: data => {
                // this.message = data
                // this.setChoice(this.breed)
               this.displayInfo(data)
                console.log(data)
            },
            error: error => {
                console.log("There Was An Error")
            }


        })

    }
    displayInfo(data) {
        
        `
     <select name="" id="selectBreed"><option value=${data.name}></option></select>
     `
    }
}


const bre = new Dogbreed()
// viewDog.addEventListener('click', random())

// const random = function randomDog() {
    //This is the code

// }