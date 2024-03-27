function copyObject(object, visited = new WeakMap()){
    if (typeof object !== 'object' || object === null) {
        return object;
    }

    if (visited.has(object)) {
        return visited.get(object);
    }

    let clone;

    if (Array.isArray(object)) {
        clone = [];
    }
    else {
        clone = Object.create(Object.getPrototypeOf(object));
    }

    visited.set(object, clone);

    for (let key of Object.keys(object)) {
        clone[key] = copyObject(object[key], visited);
    }

    if (object instanceof Map) {
        object.forEach((value, key) => {
            clone.set(key, copyObject(value, visited));
        });
    }
    else if (object instanceof Set) {
        object.forEach((value) => {
            clone.add(copyObject(value, visited));
        });
    }

    return clone;
   
}

const originalObj = {
    a: 12,
    b: [42, 10],
    c: { d: 8 },
};

originalObj.e = originalObj;

const copyObj = copyObject(originalObj);
console.log(copyObj);
