function Welcome({ isLoggedIn }) {
    if (isLoggedIn) {
        return(
            <h1>Welcome Back</h1>
        )

    } else {
        return (
            <div> <h1>Danger Line</h1>
            <h2>!!!</h2>
            </div>
        )
    }
}

export default Welcome