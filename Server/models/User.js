module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true, // Ensure that the phone number consists only of digits
                isTenDigits(value) {
                    if (value.toString().length !== 10) {
                        throw new Error('Phone number must be exactly 10 digits');
                    }
                },
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user',
        },
    }, {
        timestamps: true,
    });

    return User;
};
