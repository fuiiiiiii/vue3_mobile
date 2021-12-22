
interface Filed {
    [key: string]: any
}

export const updateFiled = (newFiled: Filed, source: any, searchFiled: Filed) => {

    let searchFiled_key = Object.keys(searchFiled)[0];


    for (let newFiled_key in newFiled) {

        if (Array.isArray(source)) {

            for (let item of source) {
                updateFiled(newFiled, item, searchFiled);
            };


        } else {
            for (let source_key in source) {

                if (source[source_key] && source[source_key].constrant === Object) {
                    updateFiled(newFiled, source[source_key], searchFiled);
                } else {
                    if (source[searchFiled_key] === searchFiled[searchFiled_key] && newFiled_key === source_key) {
                        source[newFiled_key] = newFiled[newFiled_key];
                    };
                };
            };
        };

    }
    return source;
}
