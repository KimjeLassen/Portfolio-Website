const Sequelize = require("sequelize");
//Establishes connection to the database and defines the Skill model

// Connect to the database
const sequelize = new Sequelize("portfolio_web", "root", "", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
});

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username : {
        type: Sequelize.STRING,
        allowNull: false
    },
    password : {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Project = sequelize.define("project", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    short_desc : {
        type: Sequelize.STRING,
        allowNull: false
    },
    long_desc : {
        type: Sequelize.STRING,
        allowNull: false
    },
    progress : {
        type: Sequelize.INTEGER
    },
    link : {
        type: Sequelize.STRING
    }
});
sequelize.sync({ force: false });
module.exports = { User, Project };