module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
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
            validate: {
                isEmail: true,
            }
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

    // Hook to hash the password before saving
    Users.beforeCreate(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
    });

    return Users;
};
