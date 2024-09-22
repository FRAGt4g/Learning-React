
function Message() {

    const name = "Miles";

    if (name) 
        return <h1>Hello, {name}!</h1>;
    else
        return <h1>Hello, Stranger!</h1>;
}

export default Message;