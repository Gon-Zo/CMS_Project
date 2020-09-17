const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");

module.exports = new MergeJsonWebpackPlugin({
    "encoding": "ascii",
    "debug": true,
    "output": {
        "groupBy": [
            {
                "pattern": "{./jsons/module*/en.json,./jsons/file1.json}",
                "fileName": "./dist/en.json"
            },
            {
                "pattern": "{./jsons/module*/es.json,./jsons/file2.json}",
                "fileName": "./dist/es.json"
            }
        ]
    },
    "globOptions": {
        "nosort": true
    }
});
