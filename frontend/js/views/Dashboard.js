import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    this.setTitle('Dashboard');


  }

  async getHtml() {
    return `
    <div class="dashboard">
      <h1 class="main-title"> Welcome back, Emma</h1>
      <p class="text-content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias, reprehenderit, aspernatur, officiis molestiae minima culpa suscipit rerum asperiores fuga dolores corrupti aliquid. Facilis aspernatur inventore ullam, accusamus doloribus molestiae rerum quisquam porro, accusantium maiores corporis ea consectetur?</p>
      <p class="text-content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatum corporis velit.</p>
      <p class="text-content">
        <a href="/posts" class="nav__link" data-link>View other posts.</a>
      </p>
    </div>
    `;
  }
}