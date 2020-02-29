import mysql from 'mysql';

class MysqlClass {
  constructor(host, user, psswd, database) {
    this.host = host;
    this.user = user;
    this.psswd = psswd;
    this.database = database;
    this.connection = null;

    this.init();
  }

  init() {
    this.connection = mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.psswd,
      database: this.database
    })
  }

  run() {
    return new Promise((resolve, reject) => {
      if (this.connection === null)
        reject("Connection init failed");

      this.connection.connect(err => {
        if (err) reject(err);

        resolve("Connexion to database succed");
      })
    })
  }
}
