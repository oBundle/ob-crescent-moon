import InstagramFeed from "@jsanahuja/instagramfeed";

export default function() {
	return new InstagramFeed({
		username: "crescentmoonsnowshoes",
		items: 4,
		get_data: true,
		callback: (data) => {
			const { edge_owner_to_timeline_media } = data;
			const imgDataArray = edge_owner_to_timeline_media.edges;
			let thumbnail_urls = imgDataArray.map((imgData) => {
				return imgData.node.thumbnail_src;
			});
			thumbnail_urls = thumbnail_urls.slice(0, 4);
			thumbnail_urls.forEach((thumbnail, index) => {
				const $container = $(`
          <a 
            target="_blank" 
            href="https://www.instagram.com/crescentmoonsnowshoes/" 
            class="ig-grid-container">
          </a>
        `);
				const $img = $(`
          <img 
            class="ig-thumbnail-image lazyload"
            alt="Follow crescentmoonsnowshoes on Instagram!"
            src=${thumbnail} 
          />
        `);

				$img.appendTo($container);
				$container.appendTo(".instagram-slider-container");
		
			});
		},
	});
}
