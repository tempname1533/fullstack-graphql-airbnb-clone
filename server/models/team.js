import Sequelize from 'sequelize';

export default (sequelize, DataTypes) => {
    const Team = sequelize.define('team', {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
    });
  
    return Team;
  };