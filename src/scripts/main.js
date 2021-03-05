import { PostList } from "./feed/PostList.js"
import { getPosts } from "./data/DataManager.js"
//const postElement = document.querySelector(".postList");
//const navElement = document.querySelector("nav");
//const entryElement = document.querySelector(".entryForm")

/*
    This function performs one, specific task.

    1. Can you explain what that task is?
    2. Are you defining the function here or invoking it?
*/
const showPostList = () => {
	const postElement = document.querySelector(".postList")
    getPosts().then((allPosts) => {
        postElement.innerHTML = PostList(allPosts);
    })
         postElement.innerHTML = "Hello Cohort 47"
}
// Are you defining the function here or invoking it?
const startGiffyGram = () => {
    showPostList();
}
startGiffyGram();

console.log("testing")