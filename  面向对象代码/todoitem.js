function TodoItem(container, value) {
    this.container = container;
    this.value = value;
    this.init();
}

$.extend(TodoItem.prototype, {
    constructor: TodoItem,
    init: function() {
        this.render();
        this.bindEvents();
    },
    render: function() {
        this.item = $('<li>' + this.value + '</li>');
        this.container.append(this.item);
    },
    bindEvents: function() {
        var this_ = this;
        this.item.on('click', $.proxy(this.handleItemClick, this));
    },
    handleItemClick: function() {
        this.item.remove();
    }
})
