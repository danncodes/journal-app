const IS_LOCAL = false

export const createAPI = async (apiURL, body) => {
    try {
        const req = await fetch(`${IS_LOCAL ? "" : "https://desolate-fjord-35734.herokuapp.com"}${apiURL}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
            })
        console.log(req)
        console.log(process)
        if(req.ok) {
            return req
        }
    }
    catch(err) {
        console.log(err)
        return false
    }
}

const readAPI = async () => {
    await fetch(`/api/users/${this.userID}/entries/${this.deleteModalEntryID}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
          },
        }).then(()=> {
            this.$store.commit("closeDeleteModal")
            window.location.href = "/dashboard"
        })
}

const updateAPI = async () => {
    await fetch(`/api/users/${this.userID}/entries/${this.deleteModalEntryID}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
          },
        }).then(()=> {
            this.$store.commit("closeDeleteModal")
            window.location.href = "/dashboard"
        })
}


export const deleteAPI = async (apiURL) => {
    try {
        const req = await fetch(`${process.env.API_BASE_URL || ""}${apiURL}`,{
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            },
        })
        console.log(req)
        if(req.ok) {
            return req
        }
    }
    catch(err) {
        console.log(err)
        return false
    }
}

