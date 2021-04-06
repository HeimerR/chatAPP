export const wrapperStyle = () => {

    return {
        display: "flex",
        backgroundImage: 'url("https://i.imgur.com/pUqFsNV.png")',
        fontFamily: 'Comfortaa',
        backgroundSize: '110%',
        height: '100%',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
}

export const errorStyle = () => {

    return {
        fontSize: "12px",
        color: "red",
        width: "100%",
        textAlign: "center",
    }
}

export const titleStyle = () => {

    return {
        fontSize: "9vmax",
        margin: '0',
        color: "black",
        width: "100%",
        textAlign: "center",
    }
}

export const subtitleStyle = () => {

    return {
        width: "100%",
        fontSize: "2em",
        textAlign: "center",
        margin: "0px",
    }
}

export const logintitle = () => {

    return {
        fontFamily: 'Comfortaa',
        width: "100%",
        fontSize: "1em",
        textAlign: "center",
        margin: "1em",
    }
}

export const userContainerStyle = () => {

    const mq = [`@media (min-width : 320px) and (max-width: 767px)`];

    return {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        [mq[0]]: {
            flexDirection: "column",
            alignItems: "center",
        }
    }
}

export const userWrapperStyle = () => {

    return {
        display: "flex",
        width: "150px",
        margin: "10px",
        justifyContent: "space-around",
        alignItems: "center",
        background: "#333",
        borderRadius: "10px",
        color: "white",
        padding: "6px 10px",
        cursor: "pointer",
        "p": {
            margin: "0"
        }
    }
}

export const thumbnailWrapperStyle = () => {

    return {
        width: "36px",
        height: "36px",
    }
}

export const uidWrapperStyle = () => {

    return {
        display: "flex",
        flexDirection: "column",
        marginTop: '10%',
        alignItems: "center",
        justifyContent: "center",
        "div": {
            width: "100%"
        }
    }
}

export const inputWrapperStyle = () => {

    return {
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
}

export const loginBtn = () => {

    return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "button": {
            outline: "none",
            backgroundColor: "#FFEDC5",
            borderRadius: "10px",
            color: "black",
            fontSize: '2em',
            boxShadow: '3px 3px #D28094',
            padding: "10px 25px",
            "&:hover": {
                cursor: "pointer",
                transform: 'translateY(-10%)',
            }
        },

    }
}