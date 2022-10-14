import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts');


  }

  async getHtml() {
    return `
    <div class="posts">
      <div class="post-item">
        <h2 class="post-title">
          <a href="#">About new Iphone 14 </a>
        </h2>
        <p class="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quasi temporibus amet molestiae voluptatibus velit.</p>
      </div>
      <div class="post-item">
        <h2 class="post-title">
          <a href="#">UK or USA? </a>
        </h2>
        <p class="text-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore impedit numquam rerum distinctio quam fuga vel, pariatur quis?</p>
      </div>
      <div class="post-item">
        <h2 class="post-title">
          <a href="#"> Autumn season of Harry Potter is begin</a>
        </h2>
        <p class="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quasi temporibus amet molestiae voluptatibus velit.</p>
      </div>

    </div>
    `;
  }
}