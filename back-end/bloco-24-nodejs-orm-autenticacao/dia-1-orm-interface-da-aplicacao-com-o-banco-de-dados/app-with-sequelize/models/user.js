'use strict'

/** 
  *@param {import('sequelize').Sequelize} sequelize
  *@param {import('sequelize').DataTypes} DataTypes
*/

const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING,
  },
  {
    // freezeTableName: true, nome da tabela fica igual da model
    //underscored: true,
    tableName: 'Users', // renomeia a tabela
  });

  return User;
};

module.exports = User;