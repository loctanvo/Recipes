function RecipiesViewModel() {
    var self = this;

    self.title = "Lorem ipsum";
    self.introduction = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla adipiscing, metus et suscipit accumsan, eros libero accumsan ante, nec lacinia sem neque nec massa. Fusce id turpis sit amet tellus ultrices feugiat. Nulla luctus velit eget erat malesuada non dignissim massa suscipit. Maecenas aliquam luctus velit. Ut at libero at lectus auctor commodo sed vitae magna. Integer massa ipsum, fringilla vel ultrices in, pellentesque in neque. Sed scelerisque eros ac sem interdum vel tincidunt felis pellentesque.";
    self.imagePath = "Images/bun.jpg";
    self.imageDescription = "Image found on Flickr with CC license";
    self.ingredients =
        [
            "Mauris vitae dolor aliquet sapien porttitor mattis id in quam.",
            "Pellentesque tincidunt metus vitae nulla adipiscing luctus.",
            "Donec sagittis condimentum nunc, id porttitor purus pulvinar et.",
            "Quisque egestas mauris sed sem imperdiet ullamcorper.",
            "Suspendisse malesuada viverra ipsum, at faucibus odio ultricies at."
        ];
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