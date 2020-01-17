window.onload = function () {
    this.totop_hide()
    this.setTimeout(function () {
        document.getElementsByClassName('loading')[0].classList.add('ishide')
        document.getElementsByClassName('body-all')[0].classList.remove('ishide')
        document
            .getElementsByClassName('body-all')[0]
            .classList.add('animated', 'toShow')
    }, 1000) //为了本地演示能看到loading的效果
}
window.onscroll = function () {
    this.totop_hide()
}

// 隐藏显示totop
function totop_hide() {
    if (
        document.documentElement.scrollTop > 300 ||
        document.body.scrollTop > 300
    ) {
        document
            .getElementsByClassName('to-top')[0]
            .setAttribute('style', 'display:block;')
    } else {
        document
            .getElementsByClassName('to-top')[0]
            .setAttribute('style', 'display:none;')
    }
}
//直达顶部
function totop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

//跳转

function main_index() {
    window.location.href = 'index.html'
}

function main_policy() {
    window.location.href = 'html/policy.html'
}

function main_wlw() {
    window.location.href = 'html/wlw.html'
}

function main_intellegence() {
    window.location.href = 'html/intellegence.html'
}

function main_achievement() {
    window.location.href = 'html/achievement.html'
}

function index() {
    window.location.href = '../index.html'
}

function policy() {
    window.location.href = '../html/policy.html'
}

function wlw() {
    window.location.href = '../html/wlw.html'
}

function intellegence() {
    window.location.href = '../html/intellegence.html'
}

function achievement() {
    window.location.href = '../html/achievement.html'
}