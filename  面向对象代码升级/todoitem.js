function TodoItem(container, value) {
    this.container = container;
    this.value = value;
    this.super();
}

$.inherit(Component, TodoItem);

$.extend(TodoItem.prototype, {
    constructor: TodoItem,
    render: function() {
        this.item = $('<li>' + this.value + '</li>');
        this.container.append(this.item);
    },
    bindEvents: function() {
        var this_ = this;
        this.item.on('click', function() {
            this_.item.remove();
        })
    }
})