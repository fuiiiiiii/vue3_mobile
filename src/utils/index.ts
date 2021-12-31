const debounce = function (fun: Function, wait: number) {
    let timer: any = null;
    return function (this: any) {
        let context = this; // 这边的 this 指向谁?
        
        let args = arguments; // arguments中存着e

        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            fun.apply(this, args)
        }, wait)
    }
}

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


export const watchScrollBottom = (cb: Function) => {
    window.onscroll = debounce(() => {
        let { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        let _scrollTop = scrollTop || document.body.scrollTop;
        let _windowHeight = clientHeight || document.body.clientHeight;
        let _scrollHeight = scrollHeight || document.body.scrollHeight;

        if (_scrollTop + _windowHeight == _scrollHeight) {
            console.log('底部');
            cb();
        };

    }, 500);
};
