module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("customers", {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true
  });

  Customer.associate = function(models) {
    Customer.hasMany(models.burgers, {
      onDelete: "cascade"
    });
  };

  return Customer;
};