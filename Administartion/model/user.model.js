module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
      id_societe: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
    
    return User;
  }