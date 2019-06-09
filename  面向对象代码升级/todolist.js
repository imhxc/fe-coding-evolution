function TodoList(container) {
    this.container = container;
    this.super();
}

$.inherit(Component, TodoList);

$.extend(TodoList.prototype, {
    constructor: TodoList,
    render: function() {
        var content = $(
            "<input type='text' />" +
            "<button>提交</button>" +
            "<ul></ul>"
        );
        this.container.append(content);
    },
    bindEvents: function() {
        var this_ = this;
        this.button = $('button');
        this.inputElem = $('input');
        this.ulElement = $('ul');
        this.button.on('click', function() {
            var inputVal = this_.inputElem.val();
            new TodoItem(this_.ulElement, inputVal)
        });
    }
})