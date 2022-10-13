const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const mainImage = document.getElementById("main-image");
const heartIcon = document.getElementById("heart-icon");
const heartIconRed =document.getElementById("heart-icon-red");
const likes = document.getElementById("likes");
let liked = false;
let amountLikes =  posts[0].likes;


function modifyLikes(){
    if(liked) {
        heartIcon.classList.remove("hidden");
        heartIconRed.classList.add("hidden")
        amountLikes -= 1;
        likes.textContent = `${amountLikes} likes`;
        liked = false;
    } else {
        heartIcon.classList.add("hidden");
        heartIconRed.classList.remove("hidden");
        amountLikes += 1;
        likes.textContent = `${amountLikes} likes`;
        liked = true;
    }
}


mainImage.addEventListener("dblclick", modifyLikes);
heartIcon.addEventListener("click", modifyLikes);
heartIconRed.addEventListener("click", modifyLikes);

