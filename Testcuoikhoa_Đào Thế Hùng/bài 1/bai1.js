const check = (number) => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0){
        sum++;
        }
    }
    if (sum === 2){
        return true;
    } else {
        return false;
    }
};

document.getElementById('button').onclick = () => {
    const number1 = parseInt(document.getElementById('number_1').value);
    const number2 = parseInt(document.getElementById('number_2').value);
    const value = document.getElementById('value');
  
    const listNumber = [];
    if (number1 <= number2) {
        for (let i = number1; i <= number2; i++) {
            if (check(i) === true) {
                listNumber.push(i);
            }
        } 
  
        if (listNumber.length === 0) {
            value.innerHTML = `<p>Không có số nguyên tố trong khoảng ${number1} -> ${number2}</p>`;
        } else {
            let stringHTML = '';
            for (let number of listNumber) {
                stringHTML += `<p>${number}</p>`;
            }
            value.innerHTML = stringHTML;
        }
    }else {
        value.innerHTML = `<p>Nhập lại số 1 < số 2</p>`;
    }
};