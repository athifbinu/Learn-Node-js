module.exports = {
    // https://goo.gl/bmLZjl
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    // https://goo.gl/aLuuhy
    "extends": "eslint:recommended",
    // https://goo.gl/wBtHAq
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": true
    },
    "rules": {
        // https://goo.gl/6N3dKr
        "strict": ["error", "function"],
        // https://goo.gl/U52rRQ
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        // https://goo.gl/L7KrbH
        "quotes": [
            "error",
            "double"
        ],
        // https://goo.gl/jqpzbc
        "semi": [
            "error",
            "always"
        ],
        // https://goo.gl/YVw0T0
        "one-var": ["error", "always"],
        // https://goo.gl/xq0dHS
        "eqeqeq": "error",
        // https://goo.gl/jBOk1t
        "camelcase": "error",
        // https://goo.gl/CraU5J
        "space-before-function-paren": ["error", "always"],
        // https://goo.gl/nwEFv7
        "spaced-comment": ["error", "always"],
        // https://goo.gl/pBBYO8
        "space-infix-ops": ["error", {"int32Hint": false}],
        // https://goo.gl/IqOWbM
        "space-before-blocks": ["error", "always"],
        // https://goo.gl/lBVZC4
        "comma-spacing": ["error", {"before": false, "after": true}],
        // https://goo.gl/THUavy
        "key-spacing": ["error", {"mode": "strict"}],
        // https://goo.gl/QQ0CdV
        "keyword-spacing": "error",
        // https://goo.gl/rQ3Pfi
        "semi-spacing": "error",
        // https://goo.gl/nxxqXw
        // this.uid = 1, this.name = ""; => error
        "no-sequences": "error",
        // https://goo.gl/uieY4v
        // var foo = {a: 1, b: false,}, arr = [1,2,]; => error
        "comma-dangle": ["error", "never"]
    }
};
