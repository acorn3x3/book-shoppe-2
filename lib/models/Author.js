const pool = require('../utils/pool');

class Author {
  constructor({ id, first_name, last_name, pob, dob, books }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.pob = pob;
    this.dob = dob;
    this.books = books;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT authors.*,
    COALESCE(
        json_agg(to_jsonb(books))
        FILTER (WHERE books.id IS NOT NULL), '[]') as books
        from authors
        left join authors_books
            on authors.id = authors_books.authors_id
            left join books on books.id = authors_books.books_id
            group by authors.id;

        `);
    return rows.map((row) => new Author(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `   SELECT authors.*,
    COALESCE(
        json_agg(to_jsonb(books))
        FILTER (WHERE books.id IS NOT NULL), '[]') as books
        from authors
        left join authors_books
            on authors.id = authors_books.authors_id
            left join books on books.id = authors_books.books_id
            where authors.id = $1
            group by authors.id
            
            `,
      [id]
    );
    return rows.map((row) => new Author(row));
  }
}

module.exports = { Author };
