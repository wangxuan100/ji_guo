var line_ = document.getElementById('line-p')
var reb = document.getElementById('duo')
var line_s = document.getElementsByClassName('line_')[0]

var timer = null;
line_.onclick = function(){
    console.log(1);
    // line_.innerHTML = '正在加载'
    // line_s.id ='linel'
    timer = setInterval(function () {
        reb.style.height = '2050px'
        // line_.innerHTML = '没有更多'
        // line_s.id = 'line_'
    }, 1000)
}