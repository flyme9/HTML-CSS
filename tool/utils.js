
$.extend($.fn, {
    // 全部选中为 true
    selectAll() {
        var flag = true
        for (var i = 0; i < this.length; i++) {
            if (!this[i].checked) {
                flag = false
                break
            }
        }
        return flag
    },
    // 设置复选框按钮状态
    setChecked(type) {
        for (var i = 0; i < this.length; i++) {
            this[i].checked = type === false ? false : true
        }
        return this
    },
    // 获取复选框按钮状态
    getChecked(){
        if(this.length) return this[0].checked
        return false
    }
})

