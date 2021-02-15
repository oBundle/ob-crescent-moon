export default function(context) {
  console.log("blgo script run")
  if ((localStorage.getItem("accordionStructure") || (!localStorage.getItem("accordionStructure")) === null)) {
    let accordionStructure =
    [
      {
        catname: "lifestyle",
        tags: [],
        posts: []
      },
      {
        catname: "trail",
        tags: [],
        posts: []
      },
      {
        catname: "tips",
        tags: [],
        posts: []
      },
      {
        catname: "news",
        tags: [],
        posts: []
      }
    ]
    
    //get array of all blog posts
    let blogPosts = context.blog.posts
    blogPosts.forEach(post => {
      //define post object to append to posts arr in acrrodionStruct
      let postObj = { title: post.title, url: post.url }
      //loop over all tags in post, if it includes one of the parent cat names
      //push the postObject to that parent car object
      post.tags.forEach(tag => {
        tag.name === 'lifestyle' && (accordionStructure[0].posts.push(postObj))
        tag.name === 'trail' && (accordionStructure[1].posts.push(postObj))
        tag.name === 'tips' && (accordionStructure[2].posts.push(postObj))
        tag.name === 'news' && (accordionStructure[3].posts.push(postObj))
      })
    })

    localStorage.setItem('accordionStructure', accordionStructure)
  } else {
    let accordionStructure = localStorage.getItem("accordionStructure")
  }
  
    // //
    // // FOLLOWING CODE IS IF CLIENT WANTS TO CHAGE IT TO BE BASED OFF OF TAGS
    // //
    // let blogTagsUnflattened = blogPosts.map(post => post.tags)
    // //flatten blog tags arr to just an array of arrays, each subarray is all tags for a post
    // let blogTagsFlattened = blogTagsUnflattened.map(tagArr => {
    //   return tagArr.map(tag => tag.name)
    // })

    // //loop over each tag array and if it includes the category as a tag, concatenate it
    // //with the category's tags array
    // blogTagsFlattened.forEach(tagsArr => {
    //   tagsArr.includes('lifestyle') && (accordionStructure[0].tags = accordionStructure[0].tags.concat(tagsArr))
    //   tagsArr.includes('trail') && (accordionStructure[1].tags = accordionStructure[1].tags.concat(tagsArr))
    //   tagsArr.includes('tips') && (accordionStructure[2].tags = accordionStructure[2].tags.concat(tagsArr))
    //   tagsArr.includes('news') && (accordionStructure[3].tags = accordionStructure[3].tags.concat(tagsArr))
    // })

    // //remove duplicate and parent category names from tags array in accordion object
    // function removeDuplicates(array) {
    //   const allCatNames = ["lifestyle", "trail", "tips", "news"]
    //   return array.filter((a, b) => array.indexOf(a) === b).filter(tag => {
    //     return !allCatNames.includes(tag)
    //   })
    // };
    // accordionStructure.map(cat => {
    //   cat.tags = removeDuplicates(cat.tags)
    // })

    console.log(accordionStructure)

}
