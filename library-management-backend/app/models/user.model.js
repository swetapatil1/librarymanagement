module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      emailId: {
        type: Sequelize.STRING
      }
    });
    return User;
  };