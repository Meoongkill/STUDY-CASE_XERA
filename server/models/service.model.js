module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define("Service", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "Contoh: Cuci Kering Setrika"
        },
        price_per_kg: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Service;
};
