import db from "../db.js";

class PostController {
  async createPost(req, res) {
    const { title, content, userId } = req.body;
    const newPost = await db.query(
      `INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`,
      [title, content, userId]
    );
    res.json(newPost.rows[0]);
  }

  async getPostByUser(req, res) {
    const id = req.query.id;
    const user = await db.query(`SELECT * FROM post where user_id = $1`, [id]);
    res.json(user.rows);
  }
}

export default new PostController();
