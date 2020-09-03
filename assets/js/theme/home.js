import PageManager from './page-manager';

import heroAnimation from "./ob-custom/hero-animation"


export default class Home extends PageManager {
    onReady() {
      console.log('running home script')
      heroAnimation()
    }
}