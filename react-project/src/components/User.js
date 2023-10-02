function User(props) {
    return (
        <h1>
            {
                props.isLoggedIn 
                ? `${props.name} ${props.surname}`
                : "Giriş Yapmadınız."
            }
        </h1>
    );
}

export default User;