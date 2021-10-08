const oneAway = (string1, string2) => {
    let output = true
    const split1 = string1.toLowerCase().split('')
    const split2 = string2.toLowerCase().split('')

    let difference = 0

    split1.forEach(str => {
        if (!split2.includes(str)) {
            difference++
        }
    });

    if (difference > 1) {
        output = false
    }
    return output
}

console.log(oneAway('pale', 'ple'))
console.log(oneAway('pales', 'pale'))
console.log(oneAway('pale', 'bale'))
console.log(oneAway('pale', 'bake'))