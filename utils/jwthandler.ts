export function IsJWTExpired (t : string){
    try {
        const base64Url = t.split('.')[1]
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')

        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))

        const payload = JSON.parse(jsonPayload)
        const currentTime = Math.floor(Date.now() / 1000)
        
        return payload.exp < currentTime
    } catch (error) {
        return true
    }
}   