const create = ({ title, author, editorial, age }) => {
    return db.query('INSERT INTO stories(title,author,editorial,age)VALUES(?,?,?,?)',
        [title, author, editorial, age])
}

module.exports = { create }