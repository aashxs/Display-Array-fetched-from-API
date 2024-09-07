function promiseChain() {
  let btn=document.getElementById("btn")
  btn.style.display="none";
  PromiseAPI1()
    .then((value) => {
      value.posts.forEach((element )=> {
        document.body.innerHTML +=  `<div>
        <header>POSTS:${element.id}</header>
        <div> ID: ${element.id}</div>
        <div> BODY: ${element.body}</div>
        <div> RREACTIONS: ${JSON.stringify(element.reactions)}</div>
        <div> TAGS: ${element.tags}</div>
        <div> TITLE: ${element.title}</div>
        <div> USERID: ${element.userId}</div>
        <div> VIEWS: ${element.views}</div>
    </div>`
      });
    
      
      return PromiseAPI2();
    })
    .then((value) => {
      value.products.forEach((element )=> {
        document.body.innerHTML +=  `<div>
        <header>PRODUCTS:${element.id}</header>
        <div> TITLE: ${element.id}</div>
        <div> ID: ${element.availabilityStatus}</div>
        <div> BODY: ${element.brand}</div>
        <div> RREACTIONS: ${element.category}</div>
        <div> TAGS: ${element.description}</div>
        <div> USERID: ${element.price}</div>
        <div> VIEWS: ${element.rating}</div>
    </div>`
      });
      return PromiseAPI3();
    })
    .then((value) => {
      value.todos.forEach((element )=> {
        document.body.innerHTML +=  `<div>
        <header>TODOS:${element.id}</header>
        <div> TITLE: ${element.id}</div>
        <div> BODY: ${element.completed}</div>
        
        <div> TAGS: ${element.todo}</div>
        <div> USERID: ${element.userId}</div>
        
    </div>`
      });
    });
}

function PromiseAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/posts")
      
        .then((response) => {
            if(response.ok){
           return response.json()}
        })
        .then((data) => {
          console.log(data);
          resolve(data);
        });
    }, 1000);
  });
}

function PromiseAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/products")
        .then((response) =>{
            if(response.ok){
                return response.json()}
            })
        .then((data) => {
          console.log(data);
          resolve(data);
        });
    }, 2000);
  });
}

function PromiseAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/todos")
        .then((response) => {
            if(response.ok){
                return response.json()}
            })
        .then((data) => {
          console.log(data);
          resolve(data);
        });
    }, 3000);
  });
}
