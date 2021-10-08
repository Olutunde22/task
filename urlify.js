const URLify = (url, length) => {

    const split = url.split('')

    for (i = 0; i < length; i++) {
        if (split[i] === " ") {
            split[i] = '%20'
        }
    }

    const join = split.join('')

    return join
}
console.log(URLify('Mr John Smith', 13))
console.log(URLify('Mr Olutunde', 11))