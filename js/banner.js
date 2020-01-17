var left = document.getElementById('left'); //左按钮
var right = document.getElementById('right'); //右按钮
var banner = document.getElementsByClassName('banner-box')[0];
var li_list = document.querySelectorAll('#imgul li'); //获取图片的li
var ol_list = document.querySelectorAll('ol li');
var timer = null; //声明定时器
var count = 0;

function auto() { //执行自动轮播
    count++;
    if (count > li_list.length - 1) {
        count = 0;
    }
    for (var i = 0; i < li_list.length; i++) {
        li_list[i].style = 'display:none;';
        ol_list[i].className = '';
    }
    li_list[count].style = 'display:block;'
    ol_list[count].className = 'active';

}
timer = setInterval(auto, 1500); //调用定时器

// 点击右侧，切换下一个
right.onclick = function () {
    auto();
}
// 点击左侧，切换上一个
left.onclick = function () {
    count--;
    if (count < 0) {
        count = li_list.length - 1;
    }
    // console.log(count);
    for (var i = 0; i < li_list.length; i++) {
        li_list[i].style = 'display:none;';
        ol_list[count].className = '';
    }
    li_list[count].style = 'display:block;';
    ol_list[count].className = 'active';
}

banner.onmouseover = function () { //鼠标划上去，停止轮播
    clearInterval(timer);
}
banner.onmouseout = function () { //鼠标划出，继续轮播
    timer = setInterval(auto, 1500); //调用定时器
}


//点击小按钮，切换图片
for (var j = 0; j < ol_list.length; j++) {
    ol_list[j].ind = j; //为每个小按钮添加下标
    ol_list[j].onclick = function () { //进入点击事件
        for (var i = 0; i < li_list.length; i++) { //干掉所有人
            li_list[i].style = 'display:none;';
            ol_list[i].className = '';
        }
        li_list[this.ind].style = 'display:block;'; //留下我自己
        ol_list[this.ind].className = 'active'; //留下我自己
        count = this.ind; // 把当前的角标值赋值给count 希望他从当前再开始
    }
}