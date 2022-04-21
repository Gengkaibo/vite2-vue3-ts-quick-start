/**
 * COOKIE 类
 */

export default class Cookie {

    static set(cname: string, cvalue: string|number, time:number, domain = '') {
        const d = new Date()
        time += 28800
        time *= 1000
        d.setTime(d.getTime() + (time))
        const expires = 'expires='+ d.toUTCString()
        let cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
        if (domain) cookie += ';domain='+domain
        document.cookie = cookie
    }

    static get(cname: string) {
        const name = cname + '='
        const decodedCookie = decodeURIComponent(document.cookie)
        const ca = decodedCookie.split(';')
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) == ' ') {
                c = c.substring(1)
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length)
            }
         }
        return ''
    }

    static clear(name = '', domain = '') {
        Cookie.set(name, '', -1, domain)
    }

}
