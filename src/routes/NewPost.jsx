import { Link, Form } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <Modal>
      <Form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" name="author" id="name" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Sumbit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;
