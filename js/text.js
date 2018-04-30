! function() {
    var code1
    var code2
    var code3
    var previewWapper = document.querySelector('.preview-wapper')
    var codewWapper = document.querySelector('.code-wapper')
    var styleTag = document.querySelector('#styleTag')

    code1 = `
/*
 *亲爱的HR & 面试官你好，
 *感谢您抽空查看这份简历，希望您能耐心看完，谢谢~
 */


/*GO！开始动手给自己写简历
 *首先给元素加上过度效果
 */

* {
    transition: all .3s;
}


/*白色背景有点单调，来加点背景*/

html {
    color: #fff;
    background-color: #272437;
}


/*调整文字*/

.code-wapper {
    font-family: "Microsoft YaHei";
    padding: .5em;
    border: 2px solid #c41149;
    border-radius: 5px;
    margin: .5em;
}


/*好了，接下来准备一个简历编辑区*/

.preview-wapper {
    padding: .5em;
    margin: .5em;
    color: #000;
    border: 2px solid #c41149;
    border-radius: 5px;
    background-color: #fff;
}


/*准备就绪，我要开始写简历啦*/

`
    code2 = `<h2>郑永青</h2>
            <em>前端新人——努力学习前端中</em>
            <h3>目前掌握技能</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
            </ul>
            <h3>学习经历</h3>
            <ul>
                <li>MDN</li>
                <li>freecodecamp</li>
                <li>《DOM编程艺术》</li>
                <li>《Javascript高级程序语言第三版》</li>
                <li>《HTML5 Canvas编程基础教程》</li>
                <li>知乎</li>
            </ul>
            <h3>项目经验</h3>
            <ul>
                <li>就是你现在看到的这个简历啦</li>
            </ul>
            <blockquote>前端路漫漫，我才刚开始走，如果你觉得我还行。有适合的前端工作让我试试，请联系我
                <br/> <a href="#" onclick="document.querySelector('.wx').classList.toggle('show');">微信</a> <a href="tel:15859011720">电话</a>
                 <img src="./img/wx.jpg" class="wx">
            </blockquote>
    `
    code3 = `
/*简历写完了，但是有点丑，让我们来加点样式吧*/

blockquote {
    background-color: rgba(117, 117, 117, .5);
    border-radius: .5em;
    padding: .5em;
}

h2 {
    color: blue;
}

h3 {
    text-decoration: underline;
}

blockquote a {
    line-height: 2em;
    margin-right: 1.5em;
}


/*好像有些单调哈
 *不如给自己画个头像吧
 *说干就干
 *先回到简历的开始
 */
`

    code4 = `

/*准备一个框框*/
.frame {
    position: relative;
    top:10px;
    left:10px;
    width: 124px;
    height: 124px;
    border: 2px solid black;
    border-radius: 128px;
    background-color: yellow;
    z-index: 0
}

/*画脸*/

.face {
    position: absolute;
    width: 76px;
    height: 85px;
    border: 2px solid black;
    border-radius: 50% 50% 60% 60%;
    background-color: #FDD7C2;
    top: 25px;
    left: 25px;
}

/*画头发*/

.hair {
    position: absolute;
    top: 8px;
    left: 50%;
    margin-left: -45px;
    width: 90px;
    height: 37px;
    border: 1px solid black;
    border-bottom: none;
    border-radius: 50% 50% 10% 10%/100% 100% 10% 10%;
    background-color: #424556;
}

/*画刘海*/

.hair-front div {
    position: absolute;
    width: 8px;
    height: 25px;
    border: 1px solid black;
    border-top: none;
    border-radius: 0% 0% 0% 100%/0% 0% 0% 100%;
    background-color: #424556;
}

.hair1 {
    position: absolute;
    top: 30px;
    left: 20px;
    transform: rotate(13deg)
}

.hair2 {
    top: 30px;
    left: 30px;
    transform: rotate(12deg)
}

.hair3 {
    top: 30px;
    left: 40px;
    transform: rotate(11deg)
}

.hair4 {
    top: 30px;
    left: 50px;
    transform: rotate(10deg)
}

.hair5 {
    top: 30px;
    left: 60px;
    transform: rotate(13deg)
}

.hair6 {
    top: 30px;
    left: 70px;
    transform: rotate(13deg)
}

.hair6+.hair7 {
    top: 25px;
    left: 85px;
    height: 30px;
    border-radius: 0% 0% 100% 0%/0% 0% 100% 0%;
    transform: rotate(-13deg)
}

.hair8:last-child {
    top: 25px;
    left: 95px;
    height: 30px;
    border-radius: 0% 0% 100% 0%/0% 0% 100% 0%;
    transform: rotate(-13deg)
}

/*画眼镜*/

.glasses div {
    position: absolute;
    width: 26px;
    height: 15px;
    border: 2px solid black;
    border-radius: 10px;
}

.glasses-left {
    top: 28px;
    left: 5px;
}

.glasses-right {
    top: 28px;
    right: 5px;
}

.glasses-line div {
    position: absolute;
    border: 1px solid black;
}

.glasses-line1 {
    width: 4px;
    top: 36px;
    left: 0px;
    transform: rotate(20deg);
}

.glasses-line2 {
    width: 4px;
    top: 36px;
    right: 0px;
    transform: rotate(-20deg);
}

.glasses-line3 {
    width: 6px;
    top: 37px;
    right: 35px;
}

/*画嘴巴*/

.mouth div {
    position: absolute;
    top: 55px;
    left: 50%;
    width: 10px;
    height: 5px;
}

.mouth-left {
    margin-left: -10px;
    border: 1px solid black;
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 20px;
    transform: rotate(-25deg)
}

.mouth-right {
    margin-left: 0px;
    border: 1px solid black;
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 20px;
    transform: rotate(25deg);
}

/*加个身体*/

.body {
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -40px;
    width: 80px;
    height: 50px;
    background-color: #1177BB;
    border: 2px solid black;
    border-radius: 20px 20px 32px 32px/30px 30px 22px 22px;
    z-index: -1;
}

/*画手*/

.hand {
    position: absolute;
    bottom: 18px;
    left: 20px;
    width: 22px;
    height: 22px;
    border: 2px solid black;
    border-radius: 100%;
    background-color: #FDD7C2;
    z-index: 2;
}

/*画个手指比Yeah~*/

.finger1 {
    position: absolute;
    bottom: 28px;
    left: 20px;
    width: 8px;
    height: 30px;
    border: 2px solid black;
    border-radius: 100%;
    background-color: #FDD7C2;
    transform: rotate(-15deg);
    z-index: 1;
}

.finger2 {
    position: absolute;
    bottom: 28px;
    left: 30px;
    width: 8px;
    height: 30px;
    border: 2px solid black;
    border-radius: 100%;
    background-color: #FDD7C2;
    transform: rotate(10deg);
    z-index: 1;
}

/*好了，我的简历写完了
 *如果你对我感兴趣
 *请记得联系我哦~
 */
`

    avatarHtml = `<div class="preview">
        <div class="frame">
            <div class="face">
                <div class="glasses">
                    <div class="glasses-left"></div>
                    <div class="glasses-right"></div>
                </div>
                <div class="glasses-line">
                    <div class="glasses-line1"></div>
                    <div class="glasses-line2"></div>
                    <div class="glasses-line3"></div>
                </div>
                <div class="mouth">
                    <div class="mouth-left"></div>
                    <div class="mouth-right"></div>
                </div>
            </div>
            <div class="hair"></div>
            <div class="hair-front">
                <div class="hair1"></div>
                <div class="hair2"></div>
                <div class="hair3"></div>
                <div class="hair4"></div>
                <div class="hair5"></div>
                <div class="hair6"></div>
                <div class="hair7"></div>
                <div class="hair8"></div>
            </div>
            <div class="body"></div>
            <div class="hand"></div>
            <div class="finger1"></div>
            <div class="finger2"></div>
        </div>
    </div>`

    var fast = ["20", "30", "40", "60"]

    function begin() {
        let n1 = 0
        let n2 = 0
        let n3 = 0
        let n4 = 0
        let timer1
        timer1 = setInterval(function() {
            n1 += 1;
            codewWapper.innerHTML = code1.substring(0, n1)
            styleTag.innerHTML = code1.substring(0, n1)
            codewWapper.scrollTop = codewWapper.scrollHeight
            if (n1 >= code1.length) {
                window.clearInterval(timer1)
                let timer2
                timer2 = setInterval(function() {
                    n2 += 1;
                    previewWapper.innerHTML = code2.substring(0, n2)

                    previewWapper.scrollTop = previewWapper.scrollHeight
                    if (n2 >= code2.length) {
                        window.clearInterval(timer2)
                        let timer3
                        let html = document.querySelector('.code-wapper').innerHTML
                        let styleTag1 = document.querySelector('#styleTag').innerHTML
                        timer3 = setInterval(function() {
                            n3 += 1;
                            codewWapper.innerHTML = html + code3.substring(0, n3)
                            styleTag.innerHTML = styleTag1 + code3.substring(0, n3)
                            codewWapper.scrollTop = codewWapper.scrollHeight
                            if (n3 >= code3.length) {
                                window.clearInterval(timer3)
                                let timer4
                                let html = document.querySelector('.code-wapper').innerHTML
                                let html1 = document.querySelector('.preview-wapper').innerHTML
                                let styleTag1 = document.querySelector('#styleTag').innerHTML
                                previewWapper.innerHTML = avatarHtml + html1
                                timer4 = setInterval(function() {
                                    n4 += 1;
                                    codewWapper.innerHTML = html + code4.substring(0, n4)
                                    styleTag.innerHTML = styleTag1 + code4.substring(0, n4)
                                    previewWapper.scrollTop = 0
                                    codewWapper.scrollTop = codewWapper.scrollHeight
                                    if (n4 >= code4.length) {
                                        window.clearInterval(timer4)
                                    }
                                }, fast[0])
                            }
                        }, fast[1])
                    }
                }, fast[2])
            }
        }, fast[3])
    };
    begin();
}()