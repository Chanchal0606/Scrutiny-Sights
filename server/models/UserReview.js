module.exports = (sequelize, DataTypes) => {

    const UserReview = sequelize.define("UserReview", {
        placeName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        rating:{
            type: DataTypes.NUMBER,
            allowNull: false
        },
        reviewLocation:{
            type: DataTypes.STRING,
            allowNull: false
        },
        reviewText:{
            type: DataTypes.STRING,
            allowNull: false
        },
        userLocation:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return UserReview;
}