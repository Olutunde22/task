const isUnique = (url) => {
    //Uppercase and lowercase are treated as the same
    if (!url) {
        return 'No string provided'
    }
    const split = url.toLowerCase().split('')

    let output = 'String has all unique characters'

    for (i = 0; i < split.length; i++) {
        for (j = i + 1; j < split.length; j++) {
            if (split[i] == split[j]) {
                output = 'String does not have all unique characters'
            }
        }
    }

    return output
}

const isUnique_ = (url) => {
    //Uppercase and lowercase letters are treated uniquely
    if (!url) {
        return 'No string provided'
    }

    let output = 'String has all unique characters'

    for (i = 0; i < url.length; i++) {
        for (j = i + 1; j < url.length; j++) {
            if (url[i] == url[j]) {
                output = 'String does not have all unique characters'
            }
        }
    }

    return output
}


console.log(isUnique('caLl'))
console.log(isUnique_('caLl'))

