import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Viewing Post');


  }

  async getHtml() {
    console.log(this.params.id);
    return `
    <div class="post">
      <div class="post-item">
        <h2 class="post-title">
          <a href="#">About new Iphone 14 </a>
        </h2>
        <p class="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quasi temporibus amet molestiae voluptatibus velit.</p>
      </div>
      

    </div>
    `;
  }
}