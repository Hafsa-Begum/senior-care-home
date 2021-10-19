https://i.ibb.co/H77rMzW/jared-zazb-Gsf39e0-unsplash.jpg
https://i.ibb.co/Wt210Lw/mehdi-hoseini-qg-GYt-PCg0-Vc-unsplash.jpg
https://i.ibb.co/wwcrSpZ/polox-hernandez-it-Gc-Cn-MWPp-Q-unsplash.jpg
https://i.ibb.co/yXsHFwJ/sincerely-media-ux-NFo-IKLzjw-unsplash.jpg
https://i.ibb.co/1RZqshp/zhang-kaiyv-d-Vo2o-Rx2-IJo-unsplash.jpg

//register using email and password
const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
            console.log(result.user);
        })
}
//signin using email and password
const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
            console.log(result.user);
            setNameChange();
        })
}

//update user name
const setNameChange = () => {
    updateProfile(auth.currentUser, {
        displayName: name
    })
        .then((result) => {
            setUser(result?.user);
        });

}
const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
}