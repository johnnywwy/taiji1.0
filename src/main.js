let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `
/* 你好，我叫小白
接下来我演示一下我的前端功底
首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}

/* 接下来我把 div 变成一个八卦图
   注意看好了
   首先，把 div 变成一个圆圈
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}

/* 八卦是阴阳形成的
   一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);

}

/* 加上两个神秘的黑白小球
*/
#div1::before{
   width: 100px;
   height: 100px;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
   background: #000;
   border-radius: 50%;
   background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
 }
`
console.log(string.length);
let string2 = ''

let n = 0
let step = () => {
    setTimeout(() => {
        console.log(string2);
        if (string[n] === '\n') {
            // 如果是回车，就不照搬
            string2 += '<br>'
        } else if (string[n] === ' ') {
            // 如果不是回车，就照搬
            string2 += '&nbsp;'
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 999999)
        html.scrollTo(0, 999999)
        //string2 = string2 + string[n]
        if (n < string.length - 1) {
            // 如果 n不是最后一个就继续
            n++
            step()
        }
    }, 0);

}
step()
