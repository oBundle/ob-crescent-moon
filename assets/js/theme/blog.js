import PageManager from './page-manager';
import foundation from './global/foundation';
//ob custom
// import blogAccordionDsInit from "./ob-custom/blog-accordion-ds-init"

export default class Blog extends PageManager {
  constructor(context) {
		super(context);
  }

  onReady() {
    //init data structure of accordion
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
    let blogPosts = this.context.blog.posts
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
    console.log(accordionStructure)
    //accordion markup snippets
    const obAccordion = `
    <ul class="accordion ob-blog-accordion" id="ob-blog-accordion" data-accordion>
      <li class="accordion-navigation">
        <a href="#panel1a" class="ob-heading-cta-sm ob-accordion-title">Snowshoe Lifestyle <br/> 
          <span class="ob-text-secondary ob-accordion-subtitle">Fun lifestyle moments</span>
          <span class="ob-accordion-expand-btn"></span>
        </a>
        <div id="panel1a" class="content active ob-blog-link-container">
          ${accordionStructure[0].posts.map(post => `<a class='ob-accordion-link' href='${post.url}'>${post.title}</a>`).join('')}
        </div>
      </li>
      <li class="accordion-navigation">
        <a href="#panel2a" class="ob-heading-cta-sm ob-accordion-title">Snowshoe Adventures <br/> 
          <span class="ob-text-secondary ob-accordion-subtitle">Let's Hit the Trail</span>
          <span class="ob-accordion-expand-btn"></span>
        </a>
        <div id="panel2a" class="content ob-blog-link-container">
          ${accordionStructure[1].posts.map(post => `<a class='ob-accordion-link' href='${post.url}'>${post.title}</a>`).join('')}
        </div>
      </li>
      <li class="accordion-navigation">
        <a href="#panel3a" class="ob-heading-cta-sm ob-accordion-title">Snowshoe Tips <br/> 
          <span class="ob-text-secondary ob-accordion-subtitle">How to's and Tips</span>
          <span class="ob-accordion-expand-btn"></span>
        </a>
        <div id="panel3a" class="content ob-blog-link-container">
          ${accordionStructure[2].posts.map(post => `<a class='ob-accordion-link' href='${post.url}'>${post.title}</a>`).join('')}
        </div>
      </li>
      <li class="accordion-navigation">
        <a href="#panel4a" class="ob-heading-cta-sm ob-accordion-title">Crescent Moon News <br/> 
          <span class="ob-text-secondary ob-accordion-subtitle">What's Happening?</span>
          <span class="ob-accordion-expand-btn"></span>
        </a>
        <div id="panel4a" class="content ob-blog-link-container">
          ${accordionStructure[3].posts.map(post => `<a class='ob-accordion-link' href='${post.url}'>${post.title}</a>`).join('')}
        </div>
      </li>
    </ul>
    `
    $('.ob-blog-accordion').append(obAccordion)
    
    //have to call foundation on document again since
    //appending accordion stuff after init page load
    foundation($(document));


    let $allBlogCards = $('.ob-blog-card-grid-container').children().slice(15, -1).hide()
    $allBlogCards.hide()
    let currentSlice = 15
    //Infinite Scroll
    $(window).on("scroll", function() {
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - 500) {
        currentSlice += 15
        $('.ob-blog-card-grid-container').children().slice(currentSlice, -1).hide()
        $('.ob-blog-card-grid-container').children().slice(0, currentSlice).show()
      }
    });
  }
}