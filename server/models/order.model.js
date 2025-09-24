module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        weight_kg: {
            type: DataTypes.DECIMAL(10, 2), // 10 digit total, 2 di belakang koma
            allowNull: false
        },
        total_price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM(
                'Diterima',
                'Dicuci',
                'Dikeringkan',
                'Disetrika',
                'Selesai',
                'Diambil'
            ),
            defaultValue: 'Diterima'
        }
        // order_date otomatis dibuat oleh Sequelize (createdAt, updatedAt)
    });

    return Order;
};
