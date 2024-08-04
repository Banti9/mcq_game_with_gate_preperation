import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const Score = () => {
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  return (
    <Container className="text-center mt-5">
      <h1>Your Score: {score}</h1>
      <div className="mt-4">
        <Link to="/quiz">
          <Button variant="warning" className="me-2">
            Play Again
          </Button>
        </Link>
        <Link to="/">
          <Button variant="secondary">
            Home
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Score;














// import React from 'react';
// import { useLocation, Link } from 'react-router-dom';

// const Score = () => {
//   const location = useLocation();
//   const { score } = location.state || { score: 0 };

//   return (
//     <div>
//       <h1>Your Score: {score}</h1>
//       <Link to="/quiz">Play Again</Link>
//       <Link to="/">Home</Link>
//     </div>
//   );
// };

// export default Score;
