import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';

//ob custom
import obcatSubnav from "./ob-custom/cat-subnav"
import obVariantHover from "./ob-custom/ob-variant-hover"

export default class Category extends CatalogPage {
    onReady() {
        compareProducts(this.context.urls);

        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }

        obcatSubnav(this.context)
        //handle click from mega menu
        //if checks are necessary since url params cant contain spaces
        setTimeout(() => {
            const urlParams = new URLSearchParams(window.location.search);
            let urlSubcat = urlParams.get("subcat");
            console.log("subnav param", urlSubcat)
            if(urlSubcat) { 
                let $subnavLinks = $(".ob-cat-subnav-link")
                $subnavLinks.each((index, link) => {
                    console.log($(link).attr('title'))
                    if ($(link).attr('title') === urlSubcat) {
                        $(link).click()
                    }
                })
            }
        }, 300)
        
        obVariantHover(this.context)
        $('.ob-toggle-subcat').trigger('click')
    }

    initFacetedSearch() {
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('body').triggerHandler('compareReset');

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        });
    }
}
