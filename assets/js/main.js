const app = {
  initShowComments: () => {
    const viewComments = document.getElementsByClassName('view-comment');
    const comments = document.getElementsByClassName('comments');
    const initialComments = document.getElementById('partial_comments')
    const showBtn = document.getElementById('show_more');

    const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
    const createNode = (el) => {
      return document.createElement(el);
    }
    const appendChild = (parent, el) => {
      return parent.appendChild(el);
    }
    // fetch(url)
    //   .then(response => response.json())
    //   .then((res) => {
        
    //     //console.log(res)
    //     return res.map((comment) => {
    //       let p = createNode()
    //         img = createNode(img)
    //         div = createNode(div)
    //         div.innerHTML = `${comment.name} ${comment.body}`;
    //         append(div, img);
    //         append(div, div);
          
    //     })
       
    //   })
    //   .catch(err => console.log(err.message) );



    const showCommentsHandler = (ev) => {
      for(let i = 0; i < comments.length; i++){
        if( comments[i].classList.contains('hide') ){
          comments[i].classList.remove('hide')
          ev.stopPropagation();
          if( initialComments.offsetHeight >= 440 || initialComments.offsetHeight === 450 ){
            showBtn.style.display = 'inline-block';
            if( showBtn.classList.contains('hide') ){
              showBtn.classList.remove('hide')
            }
            showBtn.classList.add('hide');
          }
        } else{
          comments[i].classList.add('hide')
        }
      }

    }
    const scrollComments = (ev) => {
      console.log('scroll through comments')
      initialComments.style.overflowY = 'scroll';
    }
    showBtn.addEventListener('click', scrollComments);
    for(let i = 0; i < viewComments.length; i++){
      viewComments[i].addEventListener('click', showCommentsHandler);
    }
  }
}
