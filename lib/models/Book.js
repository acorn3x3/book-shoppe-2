const pool = require('../utils/pools');

class Book {
    constructor({ id, title, released, authors}) {
        this.id = id;
        this.title = title;
        this.released = released;
        this.authors = authors;
    }
    
    static async getAll() {
        const { row } = await pool.query(`SELECT books.*,
        COALESCE(
            json_agg(to_jsonb(authors))
            FILTER (WHERE authors.id IS NOT NULL), '[]') as authors
            FROM books 
            left join authors_books
            on books.id = authors_books.books_id
            left join authors on authors.id - authors_books.authors_id
            group by books.id;
            `);
            return rows.map((row) => new Book(row));
        }
    }