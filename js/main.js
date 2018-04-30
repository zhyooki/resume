! function() {
    var num = 0


    function writeCode(writeWhere, effectWhere, code, fn) {
        let container = writeWhere;
        let styleEffect = effectWhere;
        let n = 0
        let id
        id = setInterval(function run() {
            n += 1;
            container.innerHTML = code.substring(0, n)
            styleEffect.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n >= code.length) {
                window.clearInterval(id)
                fn && fn.call()
                console.log(complete);
            }
            console.log(complete);
        }, 1000)
        console.log(complete);

        // id = setTimeout(function run() {
        //     n += 1
        //     console.log(n)
        //     container.innerHTML = code.substring(0, n)
        //     styleEffect.innerHTML = code.substring(0, n)
        //     container.scrollTop = container.scrollHeight
        //     if (n < code.length) {
        //         id = setTimeout(run, 1000)

        //     } else {
        //         complete += 1;
        //     };
        // })

    };
    var a = document.querySelector('.preview-wapper')
    var b = document.querySelector('#styleTag')
        // var code = `<h2>郑永青</h2>
        //         <em>前端新人——努力学习前端中</em>
        //         <h2>目前掌握技能</h2>
        //         <ul>
        //             <li>HTML</li>
        //             <li>CSS</li>
        //             <li>Javascript</li>
        //             <li>jQuery</li>
        //             <li>Bootstrap</li>
        //         </ul>
        //         <h2>学习经历</h2>
        //         <ul>
        //             <li>MDN</li>
        //             <li>freecodecamp</li>
        //             <li>《DOM编程艺术》</li>
        //             <li>《Javascript高级程序语言第三版》</li>
        //             <li>《HTML5 Canvas编程基础教程》</li>
        //             <li>知乎</li>
        //         </ul>
        //         <h2>项目经验</h2>
        //         <ul>
        //             <li>就是你现在看到的这个简历啦</li>
        //         </ul>
        //         <blockquote>前端路漫漫，我才刚开始走，如果你觉得我还行。有适合的前端工作让我试试，请联系我
        //             <br/> <a href="#">微信</a> <a href="tel:15859011720">电话</a> </blockquote>`

    var code = `郑永青`
    writeCode(a, b, code, callback);
    var c = document.querySelector('.code-wapper')
    console.log(complete);

    if (complete == 1) { writeCode(c, b, code, callback); }
}();

function callback() {

    complete += 1;

}