function Component() {
    this.init();
}

$.extend(Component.prototype, {
    constructor: Component,
    init: function() {
        this.render();
        this.bindEvents();
    },
    render: function() { },
    bindEvents: function() {}
});