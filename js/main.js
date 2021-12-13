//Function 1 Instrunctions

// // createElemWithText
// // a. Receives up to 3 parameters
// // b. 1st parameter is the HTML element string name to be created (h1, p, button, etc)
// // c. Set a default value for the 1st parameter to “p”
// // d. 2nd parameter is the textContent of the element to be created
// // e. Default value of the 2nd parameter is “”
// // f. 3rd parameter is a className if one is to be applied (optional)
// // g. Use document.createElement() to create the requested HTML element
// // h. Set the other desired element attributes.
// // i. Return the created element.

const createElemWithText = (elemTag = "p", elemText = "", className = "") => {
    const newElem = document.createElement(elemTag)
    newElem.textContent = elemText
    newElem.className = className
    return newElem
}

// console.log(createElemWithText())

//Function 2 Instructions

// // createSelectOptions
// // a. Test users JSON data available here: https://jsonplaceholder.typicode.com/users
// // b. For testing (not in function) you may want to define users with the test data.
// // c. Receives users JSON data as a parameter
// // d. Returns undefined if no parameter received
// // e. Loops through the users data
// // f. Creates an option element for each user with document.createElement()
// // g. Assigns the user.id to the option.value
// // h. Assigns the user.name to the option.textContent
// // i. Return an array of options elements

// const users = [
//     {id: 1, name: "Leanne Graham", option: "opt1"},
//     {id: 2, name: "Ervin Howell", option: "opt2"},
//     {id: 3, name: "Clementine Bauch", option: "opt3"},
//     {id: 4, name: "Patricia Lebsack", option: "opt4"}
// ]

const createSelectOptions = (users) =>{
     if(!users){
         return undefined
    }
    const optionElem = users.map(user =>{
        const myOpt = document.createElement('option')
        myOpt.value = user.id
        myOpt.textContent = user.name
        return myOpt
    })
    // console.log(optionElem)
    return optionElem
}

//Function 3 Instructions

// // toggleCommentSection
// // a. Receives a postId as the parameter//
// // b. Selects the section element with the data-post-id attribute equal to the postId
// // received as a parameter
// // c. Use code to verify the section exists before attempting to access the classList
// // property
// // d. At this point in your code, the section will not exist. You can create one to test if
// // desired.
// // e. Toggles the class 'hide' on the section element
// // f. Return the section element

//Function 3 Code

const toggleCommentSection = (postId) => {
    if(!postId){
        return undefined
    }
    const mySect = document.querySelector(`section[data-post-id='${postId}'`)
        if(mySect !== null){
            mySect.classList.toggle('hide')
            return mySect
            // console.log(mySect)
            // console.log(postId)
        }
        return null
}

//Function 4 Instructions

// // toggleCommentButton
// // a. Receives a postId as the parameter
// // b. Selects the button with the data-post-id attribute equal to the postId received as a
// // parameter
// // c. If the button textContent is 'Show Comments' switch textContent to 'Hide
// // Comments'
// // d. If the button textContent is 'Hide Comments' switch textContent to 'Show
// // Comments'
// // e. Suggestion (not required) for above: try a ternary statement
// // f. Return the button element

const toggleCommentButton = (postId) =>{
    if(!postId){
        return undefined
    }
    const myButton = document.querySelector(`button[data-post-id='${postId}'`)
    // console.log(myButton)
    if(myButton !== null){
      myButton.textContent === 'Show Comments' ? myButton.textContent ='Hide Comments' : myButton.textContent ='Show Comments'
    }
    return myButton
}

// Function 5 Instructions

// // deleteChildElements
// // a. Receives a parentElement as a parameter
// // b. Define a child variable as parentElement.lastElementChild
// // c. While the child exists…(use a while loop)
// // d. Use parentElement.removeChild to remove the child in the loop
// // e. Reassign child to parentElement.lastElementChild in the loop
// // f. Return the parentElement

const deleteChildElements = (parentElement) => {

    if(!parentElement || parentElement instanceof Element === false){
        return undefined
    }
    console.log(parentElement)
    let myChld = parentElement.lastElementChild
    // console.log(myChld)

     while(myChld){
         parentElement.removeChild(myChld)
         myChld = parentElement.lastElementChild
        }
        return parentElement
}

//Function 6 Instructions

// // addButtonListeners
// // a. Selects all buttons nested inside the main element
// // b. If buttons exist:
// // c. Loop through the NodeList of buttons
// // d. Gets the postId from button.dataset.postId
// // e. Adds a click event listener to each button (reference addEventListener)
// // f. The listener calls an anonymous function (see cheatsheet)
// // g. Inside the anonymous function: the function toggleComments is called with the
// // event and postId as parameters
// // h. Return the button elements which were selected
// // i. You may want to define an empty toggleComments function for now. Not all tests
// // will pass for addButtonListeners until toggleComments exists. I recommend
// // waiting on the logic inside the toggleComments function until we get there.

const addButtonListeners = () => {
    let myMainElem = document.querySelector('main')
    let buttonsList = myMainElem.querySelectorAll('button')
    if(buttonsList){
        for(let i = 0; i < buttonsList.length; i++){
            let myButton = buttonsList[i]
            let postId = myButton.dataset.postId
            myButton.addEventListener('click', function(event){
                toggleComments(event, postId), false
            })
        }
        return buttonsList
    }

}

//Function 7 Instructions

// // removeButtonListeners
// // a. Selects all buttons nested inside the main element
// // b. Loops through the NodeList of buttons
// // c. Gets the postId from button.dataset.id
// // d. Removes the click event listener from each button (reference
// // removeEventListener)
// // e. Refer to the addButtonListeners function as this should be nearly identical
// // f. Return the button elements which were selected

const removeButtonListeners = () => {
    let myMainElem = document.querySelector('main')
    let buttonsList = myMainElem.querySelectorAll('button')
    console.log(buttonsList)
    if(buttonsList){
        for(let i = 0; i < buttonsList.length; i++){
            let myButton = buttonsList[i]
            postId = myButton.dataset.postId
            myButton.removeEventListener('click', function(event){ 
            toggleComments(event, postId), false
        })
        }
        return buttonsList
    }
}

//Function 8 Instructions

// //createComments
// //a. Depends on the createElemWithText function we created
// //b. Receives JSON comments data as a parameter
// //c. Creates a fragment element with document.createDocumentFragment()
// //d. Loop through the comments
// //e. For each comment do the following:
// //f. Create an article element with document.createElement()
// //g. Create an h3 element with createElemWithText('h3', comment.name)
// //h. Create an paragraph element with createElemWithText('p', comment.body)
// //i. Create an paragraph element with createElemWithText('p', `From:
// //${comment.email}`)
// //j. Append the h3 and paragraphs to the article element (see cheatsheet)
// //k. Append the article element to the fragment
// //l. Return the fragment element

// let comments = [
//     {
//         "postId": 1,
//         "id": 1,
//         "name": "id labore ex et quam laborum",
//         "email": "Eliseo@gardner.biz",
//         "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//       },
//       {
//         "postId": 2,
//         "id": 8,
//         "name": "et omnis dolorem",
//         "email": "Mallory_Kunze@marie.org",
//         "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
//       },
//       {
//         "postId": 3,
//         "id": 12,
//         "name": "modi ut eos dolores illum nam dolor",
//         "email": "Oswald.Vandervort@leanne.org",
//         "body": "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit"
//       },
//       {
//         "postId": 4,
//         "id": 16,
//         "name": "perferendis temporibus delectus optio ea eum ratione dolorum",
//         "email": "Christine@ayana.info",
//         "body": "iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis"
//       },

// ]

const createComments = (comments) => {
    if(!comments){
        return undefined
    }
    let commsFrag = document.createDocumentFragment()
    console.log(comments)
    for (let i = 0; i < comments.length; i++){
        const userComms = comments[i]
        const elemArt = document.createElement('article')
        const header3 = createElemWithText('h3', userComms.name)
        const para1 = createElemWithText('p', userComms.body)
        const para2 = createElemWithText('p',`From: ${userComms.email}`)

        elemArt.appendChild(header3)
        elemArt.appendChild(para1)
        elemArt.appendChild(para2)
        commsFrag.appendChild(elemArt)  
    }
    return commsFrag
}

//Function 9 Instructions

// // populateSelectMenu
// // a. Depends on the createSelectOptions function we created
// // b. Receives the users JSON data as a parameter
// // c. Selects the #selectMenu element by id
// // d. Passes the users JSON data to createSelectOptions()
// // e. Receives an array of option elements from createSelectOptions
// // f. Loops through the options elements and appends each option element to the
// // select menu
// // g. Return the selectMenu element

const populateSelectMenu = (users) => {
    if(!users){
        return undefined
    }
    let seleMenu = document.getElementById("selectMenu")

    let seleUsers = createSelectOptions(users)
    console.log(seleUsers)

    for (let i = 0; i < seleUsers.length; i++){
        const selectOption = seleUsers[i]
        seleMenu.appendChild(selectOption)

    }
    return seleMenu
}

// // getUsers
// // a. Fetches users data from: https://jsonplaceholder.typicode.com/ (look at
// // Resources section)
// // b. Should be an async function
// // c. Should utilize a try / catch block
// // d. Uses the fetch API to request all users
// // e. Await the users data response
// // f. Return the JSON data

const getUsers = async () => {
    try{const res1 = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res1.json()
    // console.log(users)
    return users}

    catch(error){
        console.log(error)
    }

}

//Function 11 Instructions

// // getUserPosts
// // a. Receives a user id as a parameter
// // b. Fetches post data for a specific user id from:
// // https://jsonplaceholder.typicode.com/ (look at Routes section)
// // c. Should be an async function
// // d. Should utilize a try / catch block
// // e. Uses the fetch API to request all posts for a specific user id
// // f. Await the users data response
// // g. Return the JSON data

const getUserPosts = async(userId) =>{
    if(!userId){
        return undefined
    }
    try{const res2 = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    const postUserId = await res2.json()
    console.log(postUserId)
    return postUserId
}
    catch(error){
        console.log(error)
    }

}

// // getUser
// // a. Receives a user id as a parameter
// // b. Fetches data for a specific user id from: https://jsonplaceholder.typicode.com/
// // (look at Routes section)
// // c. Should be an async function
// // d. Should utilize a try / catch block
// // e. Uses the fetch API to request a specific user id
// // f. Await the user data response
// // g. Return the JSON data

//Function 12 Code

const getUser = async(userId) => {
    if(!userId){
        return undefined
    }
    try{const res3 = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const userData = await res3.json()
    console.log(userData)
    return userData
}
    catch(error){
        console.log(error)
    }
}

//Function 13 Instructions

// // getPostComments
// // a. Receives a post id as a parameter
// // b. Fetches comments for a specific post id from:
// // https://jsonplaceholder.typicode.com/ (look at Routes section)
// // c. Should be an async function
// // d. Should utilize a try / catch block
// // e. Uses the fetch API to request all comments for a specific post id
// // f. Await the users data response
// // g. Return the JSON data

const getPostComments = async(postId) => {
    if(!postId){
        return undefined
    }
    try{const res4 = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    const userPostId = await res4.json()
    console.log(userPostId)
    return userPostId
}
    catch(error){
        console.log(error)
    }
}

//Function 14 Instructions

// // displayComments
// // a. Dependencies: getPostComments, createComments
// // b. Is an async function
// // c. Receives a postId as a parameter
// // d. Creates a section element with document.createElement()
// // e. Sets an attribute on the section element with section.dataset.postId
// // f. Adds the classes 'comments' and 'hide' to the section element
// // g. Creates a variable comments equal to the result of await
// // getPostComments(postId);
// // h. Creates a variable named fragment equal to createComments(comments)
// // i. Append the fragment to the section
// // j. Return the section element

const displayComments = async(postId) => {
    if(!postId){
        return undefined
    }
    const mySect = document.createElement('section')
    mySect.dataset.postId = postId
    // console.log(postId)
    mySect.classList.add('comments')
    mySect.classList.add('hide')

    const postComms = await getPostComments(postId)
    // console.log(postComms)
    const myFrag = createComments(postComms)
    mySect.append(myFrag)

    // console.log(mySect)

    return mySect
}

//Function 15 Instructions

// // createPosts
// // a. Dependencies: createElemWithText, getUser, displayComments
// // b. Is an async function
// // c. Receives posts JSON data as a parameter
// // d. Create a fragment element with document.createDocumentFragment()
// // e. Loops through the posts data
// // f. For each post do the following:
// // g. Create an article element with document.createElement()
// // h. Create an h2 element with the post title
// // i. Create an p element with the post body
// // j. Create another p element with text of `Post ID: ${post.id}`
// // k. Define an author variable equal to the result of await getUser(post.userId)
// // l. Create another p element with text of `Author: ${author.name} with
// // ${author.company.name}`
// // m. Create another p element with the author’s company catch phrase.
// // n. Create a button with the text 'Show Comments'
// // o. Set an attribute on the button with button.dataset.postId = post.id
// // p. Append the h2, paragraphs, button, and section elements you have created to
// // the article element.
// // q. Create a variable named section equal to the result of await
// // displayComments(post.id);
// // r. Append the section element to the article element
// // s. After the loop completes, append the article element to the fragment
// // t. Return the fragment element

const createPosts = async(posts) =>{
    if(!posts){
        return undefined
    }
    console.log(posts)
    const fragment = document.createDocumentFragment()
    for(let i = 0; i < posts.length; i++){
        const post = posts[i]
        const artElem = document.createElement('ARTICLE')
        const h2 = createElemWithText('h2', post.title)
        const para3 = createElemWithText('p', post.body)
        const para4 = createElemWithText('p',`Post ID: ${post.id}`)
        const author = await getUser(post.userId)
        const para5 = createElemWithText('p',`Author: ${author.name} with ${author.company.name}`)
        const para6 = createElemWithText('p', author.company.catchPhrase)
        const button = createElemWithText('button', 'Show Comments')

        button.dataset.postId = post.id

        artElem.append(h2)
        artElem.append(para3)
        artElem.append(para4)
        artElem.append(para5)
        artElem.append(para6)
        artElem.append(button)

        var section = await displayComments(post.id)
        // console.log(h2)

        artElem.append(section)
        fragment.append(artElem)
    }
    return fragment
}

//Function 16 Instructions

// // displayPosts
// // a. Dependencies: createPosts, createElemWithText
// // b. Is an async function
// // c. Receives posts data as a parameter
// // d. Selects the main element
// // e. Defines a variable named element that is equal to:
// // i. IF posts exist: the element returned from await createPosts(posts)
// // ii. IF post data does not exist: create a paragraph element that is identical to
// // the default paragraph found in the html file.
// // iii. Optional suggestion: use a ternary for this conditional
// // f. Appends the element to the main element
// // g. Returns the element variable

const displayPosts = async(posts) =>{
    const seleMain = document.querySelector('main');
    var myElem = (posts) ? await createPosts(posts) : createElemWithText('p', 'Select an Employee to display their posts.', 'default-text')
    seleMain.append(myElem)
    return myElem
}

//Function 17 Instructions

// // toggleComments
// // a. Dependencies: toggleCommentSection, toggleCommentButton
// // b. Receives 2 parameters: (see addButtonListeners function description)
// //    i. The event from the click event listener is the 1st param
// //    ii. Receives a postId as the 2nd parameter
// // c. Sets event.target.listener = true (I need this for testing to be accurate)
// // d. Passes the postId parameter to toggleCommentSection()
// // e. toggleCommentSection result is a section element
// // f. Passes the postId parameter to toggleCommentButton()
// // g. toggleCommentButton result is a button
// // h. Return an array containing the section element returned from
// // toggleCommentSection and the button element returned from
// // toggleCommentButton: [section, button]

const toggleComments = (event, postId) => {
    if(!event || !postId){
        return undefined
    }
    event.target.listener = true
    const mySect = toggleCommentSection(postId)
    const myButton = toggleCommentButton(postId)

    // console.log(section)

    return [mySect, myButton]
}

//Function 18 Instructions

// // refreshPosts
// // a. Dependencies: removeButtonListeners, deleteChildElements, displayPosts,
// // addButtonListeners
// // b. Is an async function
// // c. Receives posts JSON data as a parameter
// // d. Call removeButtonListeners
// // e. Result of removeButtonListeners is the buttons returned from this function
// // f. Call deleteChildElements with the main element passed in as the parameter
// // g. Result of deleteChildElements is the return of the main element
// // h. Passes posts JSON data to displayPosts and awaits completion
// // i. Result of displayPosts is a document fragment
// // j. Call addButtonListeners
// // k. Result of addButtonListeners is the buttons returned from this function
// // l. Return an array of the results from the functions called: [removeButtons, main,
// // fragment, addButtons]

const refreshPosts = async(posts) =>{
    if(!posts){
        return undefined
    }
    const removeButtons = removeButtonListeners()
    const myMain = deleteChildElements(document.querySelector('main'))
    const myFrag = await displayPosts(posts)
    const addButtons = addButtonListeners()

    return [removeButtons, myMain, myFrag, addButtons]
}

//Function 19 Instrunctions

// // selectMenuChangeEventHandler
// // a. Dependencies: getUserPosts, refreshPosts
// // b. Should be an async function
// // c. Automatically receives the event as a parameter (see cheatsheet)
// // d. Defines userId = event.target.value || 1; (see cheatsheet)
// // e. Passes the userId parameter to await getUserPosts
// // f. Result is the posts JSON data
// // g. Passes the posts JSON data to await refreshPosts
// // h. Result is the refreshPostsArray
// // i. Return an array with the userId, posts and the array returned from refreshPosts:
// // [userId, posts, refreshPostsArray]

const selectMenuChangeEventHandler = async(event) =>{
    const userId = event?.target?.value || 1;
    const userPosts = await getUserPosts(userId)
    const refshPost = await refreshPosts(userPosts)

    return [userId, userPosts, refshPost]
}

// // initPage
// // a. Dependencies: getUsers, populateSelectMenu
// // b. Should be an async function
// // c. No parameters.
// // d. Call await getUsers
// // e. Result is the users JSON data
// // f. Passes the users JSON data to the populateSelectMenu function
// // g. Result is the select element returned from populateSelectMenu
// // h. Return an array with users JSON data from getUsers and the select element
// // result from populateSelectMenu: [users, select]

const initPage = async() =>{
    const getUser = await getUsers()
    const popSele = populateSelectMenu(getUser)
    return [getUser, popSele]

}

//Function 21 Instructions

// // initApp
// // a. Dependencies: initPage, selectMenuChangeEventHandler
// // b. Call the initPage() function.
// // c. Select the #selectMenu element by id
// // d. Add an event listener to the #selectMenu for the “change” event
// // e. The event listener should call selectMenuChangeEventHandler when the change
// // event fires for the #selectMenu
// // f. NOTE: All of the above needs to be correct for you app to function correctly.
// // However, I can only test if the initApp function exists. It does not return anything.

const initApp = () =>{
    initPage()
    const seleMenu = document.getElementById('selectMenu')
    seleMenu.addEventListener('change', selectMenuChangeEventHandler, false)
}
initApp()

