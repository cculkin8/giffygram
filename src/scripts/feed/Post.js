import {getLoggedInUser, getLikes} from "../data/DataManager.js"
const getNumberOfLikes = (postId) => {
  getLikes(postId)
  .then(response => {
    console.log(response)
    document.querySelector(`#Likes__${postId}`).innerHTML = `👍 ${response.length}`;
    console.log(getNumberOfLikes)
  })
}
export const Post = (postObject) => {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
            <cite class="author">${postObject.user.name}</cite>
        </header>
        <img class="post__image" src="${postObject.imageURL}" alt="giphy"/>
        <p id="Likes__${postObject.id}">👍${getNumberOfLikes(postObject.id)}</p>
        <button id="Like__${postObject.id}">Like</button>
        <p class="Description">${postObject.description}</p>
        <p>${postObject.timestamp}</p>
        ${postObject.user.id === getLoggedInUser().id
        ?` <button id="delete__${postObject.id}">Delete</button>
          <button id="edit__${postObject.id}">Edit</button>`
        :""
      }
       
      </section>
    `
}
