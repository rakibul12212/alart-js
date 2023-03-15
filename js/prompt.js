//alert('how are you') output will not show in vs code because it is browser api
const showAlert = () => {
    alert('bondhu kisu tk de koydin por diya dimu')
}

const landMoney = () => {
    const result = confirm('will you give me 500 TK?')
    console.log(result);
    if (result === true) {
        alert('tui amr vai')
    } else {
        alert('tui chudir vai')
    }
}
const getInfo = () => {
    //alert
    //confirm
    const name = prompt('tell me your name?')
    console.log(name);
    if (name === null) {
        alert('please enter your name')
    } else {
        console.log(name, 'wellcome');
    }

}