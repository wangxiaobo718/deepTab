/**
 * @authors     Wang xiaobo (https://github.com/wangxiaobo718/deepTab.git)
 * @email       370297713@qq.com
 * @contributer
 * @company     Deep (www.deeping.cn)
 * @date        2016-05
 * @version     0.1
 * @commit
 * Released under the MIT license.
 */


function deepTab(id, options) {
    this.oParent = document.getElementById(id);
    this.aInput = this.oParent.getElementsByTagName('li');
    this.aDiv = this.oParent.getElementsByTagName('div');
    this.iNow = 0;
    this.auto = options.auto || false;
    this.j = options.j || 0;
    if (options.auto) {
        this.autoPlay()
    }
    if (options.j&&options.j<this.aInput.length) {
        for (var i = 0; i < this.aInput.length; i++) {
            this.aInput[i].className = '';
            this.aDiv[i].style.display = 'none';
        }
        this.aInput[this.j].className="active";
        this.aDiv[this.j].style.display = 'block';
    }


}
function deeptab(options) {
    var tab1 = new deepTab(options.id, options);
    tab1.init();

}
deepTab.prototype.init = function () {
    var This = this;
    for (var i = 0; i < this.aInput.length; i++) {
        this.aInput[i].index = i;
        this.aInput[i].onclick = function () {
            This.change(this);
        };
    }
};

deepTab.prototype.change = function (obj) {
    for (var i = 0; i < this.aInput.length; i++) {
        this.aInput[i].className = '';
        this.aDiv[i].style.display = 'none';
    }
    obj.className = 'active';
    this.aDiv[obj.index].style.display = 'block';
};
//自动播放
deepTab.prototype.autoPlay = function () {

    var This = this;

    setInterval(function () {

        if (This.iNow == This.aInput.length - 1) {
            This.iNow = 0;
        }
        else {
            This.iNow++;
        }
        for (var i = 0; i < This.aInput.length; i++) {
            This.aInput[i].className = '';
            This.aDiv[i].style.display = 'none';
        }
        This.aInput[This.iNow].className = 'active';
        This.aDiv[This.iNow].style.display = 'block';
    }, 2000);


};
