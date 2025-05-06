# User and Blog Models Documentation

This document provides an overview of the **User** and **Blog** models used in the application. These models are defined using **Mongoose**, an ODM library for MongoDB, and are essential for managing user and blog data in the database.

---

## User Model

The **User** model is used to store and manage user-related data, including authentication details.

### File Path
`models/user.models.js`

### Schema Fields

| Field      | Type    | Required | Description                                                                 |
|------------|---------|----------|-----------------------------------------------------------------------------|
| `name`     | String  | Yes      | The name of the user.                                                      |
| `email`    | String  | Yes      | The email of the user. Must be unique.                                      |
| `password` | String  | Yes      | The password of the user. It is hashed before saving to the database.       |
| `phone`    | Number  | No       | The phone number of the user.                                              |
| `timestamps` | Object | Auto     | Automatically adds `createdAt` and `updatedAt` fields to the document.     |

### Pre-save Hook

- **Purpose**: Hashes the user's password before saving it to the database.
- **Implementation**:
  ```javascript
  userSchema.pre("save", async function () {
      let salt = await bcryptjs.genSalt(10);
      let hashedpassword = await bcryptjs.hash(this.password, salt);
      this.password = hashedpassword;
  });


  Methods
comparePassword: Compares a plain-text password with the hashed password stored in the database.

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcryptjs.compare(enteredPassword, this.password);
};

Exported Model
The model is exported as User:
module.exports = mongoose.model("User", userSchema);


Blog Model
The Blog model is used to store and manage blog-related data, including the user who created the blog.

File Path
models/blogs.model.js

| Field         | Type             | Required | Description                                                                 |
|---------------|------------------|----------|-----------------------------------------------------------------------------|
| `title`       | String           | Yes      | The title of the blog.                                                     |
| `description` | String           | Yes      | The content of the blog. Must be at least 10 characters long.              |
| `createdBy`   | ObjectId (Ref)   | Yes      | References the `User` model to associate the blog with its creator.        |
| `timestamps`  | Object           | Auto     | Automatically adds `createdAt` and `updatedAt` fields to the document.     |

Exported Model
The model is exported as Blog:
module.exports = model("Blog", blogSchema);

Usage
User Model Example
const User = require("./models/user.models");

// Creating a new user
const newUser = new User({
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    phone: 1234567890
});
await newUser.save();


Blog Model Example
const Blog = require("./models/blogs.model");

// Creating a new blog
const newBlog = new Blog({
    title: "My First Blog",
    description: "This is the content of my first blog.",
    createdBy: userId // Reference to a User's ObjectId
});
await newBlog.save();

Notes
Password Security: The User model ensures that passwords are hashed before being stored in the database.
Validation: Both models include validation rules to ensure data integrity.
Timestamps: Both models automatically track when documents are created and updated.