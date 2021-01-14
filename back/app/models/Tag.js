module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define("Tag", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // Automatically gets converted to SERIAL for postgres
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    });
    

    Tag.associate = models => {
        Tag.belongsTo(models.Task, {
            foreignkey: {
                allowNull: false
            }
        });
    };

    return Tag;
};