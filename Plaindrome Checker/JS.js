function removeSpace(word) {
    let res = "";
    for (let i = 0; i < word.length; i++) {
        if(!(word[i]===" ")){
            res += word[i];
        }
    }
    return res ;
};


function plaindrome(word) {
    word = removeSpace(word)
    let res = ""
    for (let i = 0; i < word.length; i++) {
        res = word[i] + res;   
    }
    if(word===res){
        return true;
    }else{
        return false;
    }
}



// DOCUMENT OBJECT MODEL
const input = document.querySelector("input"),
btn = document.querySelector("button"),
res = document.querySelector(".res");
btn.addEventListener("click",()=>{
    let inputVal = input.value;
    if(inputVal==""){
        btn.classList.toggle("wrong")
    }else{
        btn.style.backgroundColor="#2e5266ff"
        if(plaindrome(inputVal)){
            res.innerHTML = `
            <p >Yes <span>${inputVal}</span> is a palindrome!</p>
            `
        }else{
            res.innerHTML = `
            <p >No <span>${inputVal}</span> isn't a palindrome!</p>
            `
        }
    }
    
})

