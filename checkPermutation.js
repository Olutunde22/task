const checkPermutation = (string1, string2) => {
    if (string1.length != string2.length) {
        return false
    }
    let sort1 = string1.split('').sort().join('')
    let sort2 = string2.split('').sort().join('')

    if (sort1 !== sort2) {
        return false
    }

    return true

}