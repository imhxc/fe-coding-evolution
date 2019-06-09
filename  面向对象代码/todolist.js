function TodoList(container) {
    this.container = container;
    this.init();
}

$.extend(TodoList.prototype, {
    constructor: TodoList,
    init: function() {
        this.render();
        this.bindEvents();
    },
    render: function() {
        var content = $(
            "<input type='text' />" +
            "<button>提交</button>" +
            "<ul></ul>"
        );
        this.container.append(content);
    },
    handleBtnClick: function() {
        var inputVal = this.inputElem.val();
        new TodoItem(this.ulElement, inputVal)
    },
    bindEvents: function() {
        this.button = $('button');
        this.inputElem = $('input');
        this.ulElement = $('ul');
        this.button.on('click', $.proxy(this.handleBtnClick, this));
    }
})