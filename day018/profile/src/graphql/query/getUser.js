import {gql} from '@apollo/client';
const QUERY_RATES = gql`
  query MyQuery {
    Users {
      user_id
      email
      name
      Tasks {
        task_id
        description
      }
    }
  }
`;

export {QUERY_RATES};

export default {};
