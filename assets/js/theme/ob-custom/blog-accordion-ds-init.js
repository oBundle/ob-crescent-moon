export default function(context) {
  let accordionStructure =
      [
        {
          catname: "lifestyle",
          tags: []
        },
        {
          catname: "trail",
          tags: []
        },
        {
          catname: "tips",
          tags: []
        },
        {
          catname: "news",
          tags: []
        }
      ]
    
    //get array of all blog posts
    let blogPosts = context.blog.posts
    let blogTagsUnflattened = blogPosts.map(post => post.tags)
    //flatten blog tags arr to just an array of arrays, each subarray is all tags for a post
    let blogTagsFlattened = blogTagsUnflattened.map(tagArr => {
      return tagArr.map(tag => tag.name)
    })

    //loop over each tag array and if it includes the category as a tag, concatenate it
    //with the category's tags array
    blogTagsFlattened.forEach(tagsArr => {
      tagsArr.includes('lifestyle') && (accordionStructure[0].tags = accordionStructure[0].tags.concat(tagsArr))
      tagsArr.includes('trail') && (accordionStructure[1].tags = accordionStructure[1].tags.concat(tagsArr))
      tagsArr.includes('tips') && (accordionStructure[2].tags = accordionStructure[2].tags.concat(tagsArr))
      tagsArr.includes('news') && (accordionStructure[3].tags = accordionStructure[3].tags.concat(tagsArr))
    })

    //remove duplicate and parent category names from tags array in accordion object
    function removeDuplicates(array) {
      const allCatNames = ["lifestyle", "trail", "tips", "news"]
      return array.filter((a, b) => array.indexOf(a) === b).filter(tag => {
        return !allCatNames.includes(tag)
      })
    };
    accordionStructure.map(cat => {
      cat.tags = removeDuplicates(cat.tags)
    })

    console.log(accordionStructure)
}