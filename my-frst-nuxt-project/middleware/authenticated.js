export default function ({
    redirect,
    store
}) {
    let user = store.state.user;
 
    if(!user) {
        redirect('/login') 
    }
}