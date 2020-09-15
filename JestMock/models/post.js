'use strict'

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: {
      type: DataTypes.TEXT,
      validate: {
        min: 255
      }
    }
  }, {})

  Post.associate = function() {
    // associations can be defined here
  }

  return Post
}
