

const linksSocialMedia = {
    github: "alissoninacio1",
    youtube: "channel/UCSgYDHQ_cGATU3TXdkOh9Ww",   //https://www.youtube.com/channel/UCSgYDHQ_cGATU3TXdkOh9Ww
    facebook: "alisson.inacio.94", //https://www.facebook.com/alisson.inacio.94/
    instagram:  "alisson.inacio.1", //https://www.instagram.com/alisson.inacio.1/
    twitter:   "rocketseat", //rocketseat, because I don't have a twiter profile
}

/**  -------------------- Social Media Links ----------------
 * 
*for...of loop to iterate through the linksSocialMedia object
*I created a variable inside the for, called 'li', to store each  socialLinks (this is and ID for ul element) children 
*ul's children are li elements. Each time in this loop, it is assign a ul child(li elements) to a variable of the same name 'li'.
*then, we get the attribute 'class' of the li element each time in the loop, and assign to a variable called social. 
*in other words, we get the class value for each  li element and store in the social variable.
*the last action in the iteraction is access the first child of the li elements, that is an 'a' element, and select its attribute 'hrf' 
*then, we customize the attribute passing the 'social' variable as argument and the value of each key inside the object linksSocialMedia
*the keys in the objects have the same name of the classes, this help us to be more effective 
*and reuse code (the variable 'social' store the class's name and the point to the object  key - both has the same name)

*/


function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
       const social = li.getAttribute('class')  

       li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

// ----------------- JSON section----------------

//github api - https://api.github.com/users/alissoninacio1

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    
    //when fetch gets the file, it doesn't know that is a JSON file
    fetch(url)
    .then(reponse => reponse.json())
    .then(data => {
        // id - userName
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()