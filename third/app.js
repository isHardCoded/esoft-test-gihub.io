function isValidBracket(s) {
    let stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        
        if (char in map) {
            stack.push(char);
        } 

        else {
            if (stack.length === 0) {
                return false;
            }

            let last = stack.pop();

            if (map[last] !== char) {
                return false;
            }
        }   
    }
    
    return stack.length === 0;
    }
    console.log(isValidBracket("()"));
    console.log(isValidBracket("()[]{}"));
    console.log(isValidBracket("(]"));
    console.log(isValidBracket("([)]"));
    console.log(isValidBracket("{[]}"));
    console.log(isValidBracket("{{(([[]]))}}"));
    console.log(isValidBracket("{{(([[]]))}}}"));