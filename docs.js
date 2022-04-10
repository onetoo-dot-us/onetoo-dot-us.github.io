class Resource {
  name;
  url;

  constructor({ name, url }) {
    this.name = name;
    this.url = url;
  }
}

const platform = new Resource({ name: "Onetoo", url: "https://onetoo.us" });
const framework = new Resource({ name: "GitHub", url: "https://github.com" });

class List {
  list = [];

  createEntry({ name, url }) {
    const newEntry = new Resource({ name, url });
    this.list.push(newEntry);
  }
}

const contributors = new List();
contributors.createEntry({
  name: "Cidro Onetoo",
  url: "https://onetoo.us/contributors/cidro-onetoo",
});

class Repository extends Resource {
  owner;

  constructor({ name, url, owner }) {
    super(name, url);
    this.owner = owner;
  }
}

class RepositoryList extends List {
  createEntry({ name, url, owner }) {
    const newEntry = new Repository({ name, url, owner });
    this.list.push(newEntry);
  }
}

const repositories = new RepositoryList();
repositories.createEntry({
  name: "Cipher",
  url: "https://onetoo.us/repositories/cipher",
  owner: contributors.find(
    (contributor) => contributor.name === "Cidro Onetoo"
  ),
});
