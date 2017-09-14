function string_strip(val1){
    return val1[0]
}

var person2={
    firstName:'post it',
    push:function(val1){
        return val1 + " " + val1;
    },
    string_element:function(val2){
        return string_strip(val2);
    }
}