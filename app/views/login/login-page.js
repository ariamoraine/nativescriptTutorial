var observableModule = require("tns-core-modules/data/observable");

function LoginViewModel() {
    var viewModel = observableModule.fromObject({

        favoriteFruits: [
            { type: "🍎", count: 7 },
            { type: "🍌", count: 15 },
            { type: "🍍", count: 4 },
            { type: "🍒", count: 30 },
            { type: "🍇", count: 16 }
        ]
    });

    return viewModel;
}

var loginViewModel = LoginViewModel();

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = loginViewModel;
}

exports.pageLoaded = pageLoaded;