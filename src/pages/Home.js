// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the MCQ Game!</h1>
//       <Link to="/quiz">Start Quiz</Link>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to the MCQ Game!</h1>
      <Link to="/quiz">
        <Button variant="success" size="lg" className="mt-4">
          Start Quiz
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
