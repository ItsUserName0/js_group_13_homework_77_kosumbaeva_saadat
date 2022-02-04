const fs = require('fs').promises;

const filename = './db.json';
let data = [];

module.exports = {
  async init() {
    try {
      const fileContents = await fs.readFile(filename);
      data = JSON.parse(fileContents.toString());
    } catch (e) {
      data = [];
    }
  },
  getMessages() {
    return data;
  },
  getMessage(id) {
    return data.find(m => m.id === id);
  },
  addMessage(message) {
    data.push(message);
    return this.save();
  },
  save() {
    return fs.writeFile(filename, JSON.stringify(data, null, 2));
  }
}