let person_head = document.querySelector(".person-head")
let vertical_rod = document.getElementById("vertical-rod")
let horizontal_rod = document.getElementById("horizontal-rod")
let rope= document.getElementById("rope")
let floor= document.getElementById("floor")
let person_body = document.getElementById("person-body")
let left_hand= document.getElementById("left-hand")
let right_hand = document.getElementById("right-hand")
let left_leg = document.getElementById("left-leg")
let right_leg= document.getElementById("right-leg")

let person_parts = [vertical_rod,horizontal_rod,floor,rope,person_head,person_body,left_hand,right_hand,left_leg,right_leg]
let current_index = 0

person_parts.forEach((part) =>{
    part.style.display = "none"
})

let correct_word = "hangman"
let correct_chars = []

document.addEventListener("keyup", (evt)=>{
    if ((/[a-zA-Z]/).test(evt.key)){
        console.log(evt.key, "pressed")
        let IsInWord = correct_word.toLowerCase().includes(evt.key.toLowerCase())

        if (IsInWord){
            correct_chars.push(evt.key)
            console.log(correct_chars)
            
        }
        else{
            if (current_index < person_parts.length){
                person_parts[current_index].style.display= "block"
                current_index++
            }
            else{
                alert("You lost")
            }
        }

    }
})
