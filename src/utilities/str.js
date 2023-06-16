export const removeHtmlTags = (str) => {
    if (str) {
        const regex = /(<([^>]+)>)/ig;
        // const regex = /<(?:.|\n)*?>/gm
        return str.replace(regex, '');
    }
    return str;
}

export const toJson = (string) => {
    try {
        return JSON.parse(string)
    } catch (_) {
        return undefined
    }
}

export const percentage = (total, percentage) => {
    return Number(parseFloat(total * percentage / 100).toFixed(2))
}

export const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}