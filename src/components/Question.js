// import React from 'react';

// const Question = ({ question, options, onSelect }) => {
//   return (
//     <div>
//       <h2>{question}</h2>
//       <div>
//         {options.map((option, index) => (
//           <button key={index} onClick={() => onSelect(option)}>
//             {option}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Question;

import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';

const Question = ({ question, options, onSelect }) => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>{question}</Card.Title>
          <div className="d-grid gap-2 mt-3">
            {options.map((option, index) => (
              <Button
                key={index}
                variant="primary"
                onClick={() => onSelect(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Question;
