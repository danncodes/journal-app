const IS_LOCAL = true
const SERVER_URL = "https://desolate-fjord-35734.herokuapp.com"


export const createAPI = async (apiURL, body) => {

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

