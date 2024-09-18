// 表格切换焦点方法 渲染后调用（适应input框）需定义table Id:'table-form' 
export function initInputDOM() {
	const inputDoms = document.querySelectorAll(
		"#table-form .el-input__inner"
	);
	inputDoms.forEach((item, index) => {
		item.setAttribute("data-index", index);
	});
	return inputDoms;
}
// enter调用方法 this.inputDoms=↑ return 值   
export function nextFocus(arr, event, scope) { // 定义：class-name="addColumn"
	if (arr.length === scope.$index + 1) {
		if (scope.column.className === "addColumn") {
			this.addTable() //定义添加行通用方法
			return
		}
	}
	const index = event.target.getAttribute("data-index");
	const nextIndex = parseInt(index) + 1;
  console.log('nextIndex', nextIndex)
	const length = this.inputDoms.length;
  console.log('inputDoms', this.inputDoms)
	if (nextIndex < length) {
		this.inputDoms[nextIndex].focus();
	} else {
		this.inputDoms[0].focus();
	}
}
