const IS_LOCAL = false
const SERVER_URL = process.env.SERVER_URL


export const createAPI = async (apiURL, body) => {
    console.log("ServerURL", SERVER_URL, " + ", "IsLocal",IS_LOCAL)

    try {
        const req = await fetch(`${IS_LOCAL ? "" : SERVER_URL }${apiURL}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        },
            body: JSON.stringify(body)
        })
        if(req.ok) {
            return req
        }
    }
    catch(err) {
        console.log(err)
        return false
    }
}

export const readAPI = async (apiURL) => {
    console.log("ServerURL", SERVER_URL, " + ", "IsLocal",IS_LOCAL)

    try {
        const req = await fetch(`${IS_LOCAL ? "" : SERVER_URL }${apiURL}`,{
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            },
        })
        if(req.ok) {
            return req
        }
    }
    catch(err) {
        console.log(err)
        return false
    }
}

export const updateAPI = async (apiURL, body) => {
    console.log("ServerURL", SERVER_URL, " + ", "IsLocal",IS_LOCAL)

    try {
        const req = await fetch(`${IS_LOCAL ? "" : SERVER_URL }${apiURL}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        },
            body: JSON.stringify(body)
        })
        if(req.ok) {
            return req
        }
    }
    catch(err) {
        console.log(err)
        return false
    }
}


export const deleteAPI = async (apiURL) => {
    console.log("ServerURL", SERVER_URL, " + ", "IsLocal",IS_LOCAL)

    try {
        const req = await fetch(`${IS_LOCAL ? "" : SERVER_URL }${apiURL}`,{
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            },
        })
        if(req.ok) {
            return req
        }
    }
    catch(err) {
        console.log(err)
        return false
    }
}

