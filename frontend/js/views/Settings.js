import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts');


  }

  async getHtml() {
    return `
    <div class="settings">
      <h2 class="set-title">Settings</h2>
      <p class="text-content">Manage your privacy and configuration</p>
      <ul class="list">
        <li class="list-item"><a href="#" class="list-link">Password and Safety</a></li>
        <li class="list-item"><a href="#" class="list-link">Color Theme</a></li>
        <li class="list-item"><a href="#" class="list-link">Display</a></li>
        <li class="list-item"><a href="#" class="list-link">Notifications</a></li>
      </ul>

    </div>
    `;
  }
}