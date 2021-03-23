import {gql} from '@apollo/client';

// get user by id
const query_user = gql`
  query MyQuery {
    Users(where: {user_id: {_eq: 1}}) {
      user_id
      email
      name
      password
      Tasks {
        description
        status
        task_id
      }
    }
  }
`;

const add_todo = gql`
  mutation($desc: String!) {
    insert_Tasks_one(object: {description: $desc, id: 1}) {
      description
      id
      status
      task_id
    }
  }
`;

const update_todo = gql`
  mutation($desc: String!) {
    update_Tasks_by_pk(
      pk_columns: {task_id: 9}
      _set: {description: $desc}
    ) {
      description
      id
      status
      task_id
    }
  }
`;
export {query_user, add_todo, update_todo};

export default {};
