function RecipiesViewModel() {
    var self = this;

    function recipeItem() {

    }
}

$(function () {
    var viewModel = new RecipiesViewModel();

    ko.applyBindings(viewModel);

    //$.get("/api/todo", function (items) {
    //    $.each(items, function (idx, item) {
    //        viewModel.add(item.ID, item.Title, item.Finished);
    //    });
    //}, "json");
});



function ToDoViewModel() {
    var self = this;

    function ToDoItem(root, id, title, finished) {
        var self = this,
            updating = false;

        self.id = id;
        self.title = ko.observable(title);
        self.finished = ko.observable(finished);

        self.remove = function () {
            root.sendDelete(self);
        };

        self.update = function (title, finished) {
            updating = true;
            self.title(title);
            self.finished(finished);
            updating = false;
        };

        self.finished.subscribe(function () {
            if (!updating) {
                root.sendUpdate(self);
            }
        });
    };

    self.addItemTitle = ko.observable("");
    self.items = ko.observableArray();

    self.add = function (id, title, finished) {
        self.items.push(new ToDoItem(self, id, title, finished));
    };

    self.remove = function (id) {
        self.items.remove(function (item) { return item.id === id; });
    };

    self.update = function (id, title, finished) {
        var oldItem = ko.utils.arrayFirst(self.items(), function (i) { return i.id === id; });
        if (oldItem) {
            oldItem.update(title, finished);
        }
    };

    self.sendCreate = function () {
        $.ajax({
            url: "/api/todo",
            data: { 'Title': self.addItemTitle(), 'Finished': false },
            type: "POST"
        });

        self.addItemTitle("");
    };

    self.sendDelete = function (item) {
        $.ajax({
            url: "/api/todo/" + item.id,
            type: "DELETE"
        });
    }

    self.sendUpdate = function (item) {
        $.ajax({
            url: "/api/todo/" + item.id,
            data: { 'Title': item.title(), 'Finished': item.finished() },
            type: "PUT"
        });
    };
};