import {React, useEffect, useState, useRef} from "react"

export default function Counter(props){
    const {start, end, time} = props
    const [users, setUsers] = useState(start)
    const userShown = useRef(start)
    const totalUsers = end
    const duration = time
    const addValue = totalUsers/duration

    const updateCounter = () => {
        if (userShown.current < totalUsers) {       
            userShown.current = userShown.current + addValue
            const result = Math.floor(userShown.current)
            if(result >= totalUsers) return setUsers("12K")
            setUsers(result)
        }
        setTimeout(updateCounter, 1)
    }

    useEffect(() => {
        let isMounted = true
        if (isMounted) updateCounter()
        return (() => isMounted = false)
        // eslint-disable-next-line
        }, [])

    return(
        <>
            {users}
        </>
    )
}
