import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";


import { Container} from 'react-bootstrap';


const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest ocean?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
  {
    year: 2023,
    question: "Which of the following sorting algorithms is not a stable sort?",
    options: ["Merge sort", "Insertion sort", "Bubble sort", "Quick sort"],
    answer: "Quick sort",
  },
  {
    year: 2022,
    question: "In the context of operating systems, what is a page fault?",
    options: [
      "A situation where a page is not found in the cache",
      "An error in page file access",
      "A memory management error",
      "A syntax error in page files",
    ],
    answer: "A situation where a page is not found in the cache",
  },
  {
    question: "Which of the following is a valid variable name in C?",
    options: ["int 1var", "float var_name", "char @var", "double var-name"],
    answer: "float var_name",
  },
  {
    question: "What does the 'sizeof' operator in C return?",
    options: [
      "Size of a variable",
      "Size of a data type",
      "Memory address",
      "None of the above",
    ],
    answer: "Size of a data type",
  },
  {
    question: "Which data structure is used for implementing LRU cache?",
    options: ["Stack", "Queue", "Linked List", "Hash Map"],
    answer: "Hash Map",
  },
  {
    question: "In a binary search tree, the inorder traversal produces a:",
    options: [
      "Preorder traversal",
      "Postorder traversal",
      "Sorted sequence",
      "None of the above",
    ],
    answer: "Sorted sequence",
  },
  {
    question: "What is the time complexity of binary search algorithm?",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
  },
  // Add more questions here
  {
    question:
      "In the context of operating systems, what does 'deadlock' refer to?",
    options: [
      "A situation where a process is unable to proceed due to waiting for resources",
      "A process that is running infinitely",
      "A process that has completed its execution",
      "A process that is waiting for user input",
    ],
    answer:
      "A situation where a process is unable to proceed due to waiting for resources",
  },
  {
    question:
      "Which of the following sorting algorithms has the worst-case time complexity of O(n^2)?",
    options: ["Quick sort", "Merge sort", "Bubble sort", "Heap sort"],
    answer: "Bubble sort",
  },
  {
    question:
      "What is the main difference between stack and queue data structures?",
    options: [
      "Stack is FIFO, queue is LIFO",
      "Stack is LIFO, queue is FIFO",
      "Both are FIFO",
      "Both are LIFO",
    ],
    answer: "Stack is LIFO, queue is FIFO",
  },

  {
    questions: [
      {
        question:
          "If ‘→’ denotes increasing order of intensity, then the meaning of the words [dry → arid → parched] is analogous to [diet → fast → ________ ]. Which one of the given options is appropriate to fill the blank?",
        options: [
          { A: "starve" },
          { B: "reject" },
          { C: "feast" },
          { D: "deny" },
        ],
        answer: "A",
      },
      {
        question:
          "If two distinct non-zero real variables x and y are such that (x + y) is proportional to (x − y) then the value of x/y",
        options: [
          { A: "depends on xy" },
          { B: "depends only on x and not on y" },
          { C: "depends only on y and not on x" },
          { D: "is a constant" },
        ],
        answer: "D",
      },
      {
        question:
          "Consider the following sample of numbers: 9, 18, 11, 14, 15, 17, 10, 69, 11, 13. The median of the sample is",
        options: [{ A: "13.5" }, { B: "14" }, { C: "11" }, { D: "18.7" }],
        answer: "B",
      },
      {
        question:
          "The number of coins of ₹1, ₹5, and ₹10 denominations that a person has are in the ratio 5:3:13. Of the total amount, the percentage of money in ₹5 coins is",
        options: [{ A: "21%" }, { B: "14 2/7 %" }, { C: "10%" }, { D: "30%" }],
        answer: "B",
      },
      {
        question:
          "For positive non-zero real variables p and q, if log(p^2 + q^2) = log p + log q + 2 log 3, then, the value of (p^4 + q^4) / (p^2 q^2) is",
        options: [{ A: "79" }, { B: "81" }, { C: "9" }, { D: "83" }],
        answer: "B",
      },
      {
        question:
          "In the given text, the blanks are numbered (i)−(iv). Select the best match for all the blanks. Steve was advised to keep his head (i) before heading (ii) to bat; for, while he had a head (iii) batting, he could only do so with a cool head (iv) his shoulders.",
        options: [
          { A: "(i) down (ii) down (iii) on (iv) for" },
          { B: "(i) on (ii) down (iii) for (iv) on" },
          { C: "(i) down (ii) out (iii) for (iv) on" },
          { D: "(i) on (ii) out (iii) on (iv) for" },
        ],
        answer: "B",
      },
      {
        question:
          "A rectangular paper sheet of dimensions 54 cm × 4 cm is taken. The two longer edges of the sheet are joined together to create a cylindrical tube. A cube whose surface area is equal to the area of the sheet is also taken. Then, the ratio of the volume of the cylindrical tube to the volume of the cube is",
        options: [{ A: "1/π" }, { B: "2/π" }, { C: "3/π" }, { D: "4/π" }],
        answer: "B",
      },
      {
        question:
          "The pie chart presents the percentage contribution of different macronutrients to a typical 2,000 kcal diet of a person. The typical energy density (kcal/g) of these macronutrients is given in the table.",
        options: [{ A: "44.4" }, { B: "77.8" }, { C: "100" }, { D: "3,600" }],
        answer: "B",
      },
      {
        question:
          "A rectangular paper of 20 cm × 8 cm is folded 3 times. Each fold is made along the line of symmetry, which is perpendicular to its long edge. The perimeter of the final folded sheet (in cm) is",
        options: [{ A: "18" }, { B: "24" }, { C: "20" }, { D: "21" }],
        answer: "D",
      },
      {
        question:
          "The least number of squares to be added in the figure to make AB a line of symmetry is",
        options: [{ A: "6" }, { B: "4" }, { C: "5" }, { D: "7" }],
        answer: "A",
      },
      {
        question:
          "Let f: ℝ → ℝ be a function such that f(x) = max{x, x^3}, x ∈ ℝ, where ℝ is the set of all real numbers. The set of all points where f(x) is NOT differentiable is",
        options: [
          { A: "{−1, 1, 2}" },
          { B: "{−2, −1, 1}" },
          { C: "{0, 1}" },
          { D: "{−1, 0, 1}" },
        ],
        answer: "D",
      },
      {
        question:
          "The product of all eigenvalues of the matrix [1 2 3 4 5 6 7 8 9] is",
        options: [{ A: "−1" }, { B: "0" }, { C: "1" }, { D: "2" }],
        answer: "B",
      },
      {
        question:
          "Consider a system that uses 5 bits for representing signed integers in 2’s complement format. In this system, two integers A and B are represented as A=01010 and B=11010. Which one of the following operations will result in either an arithmetic overflow or an arithmetic underflow?",
        options: [
          { A: "A + B" },
          { B: "A − B" },
          { C: "B − A" },
          { D: "2 * B" },
        ],
        answer: "A",
      },
      {
        question:
          "Consider a permutation sampled uniformly at random from the set of all permutations of {1, 2, 3, ⋯ , n} for some n ≥ 4. Let X be the event that 1 occurs before 2 in the permutation, and Y the event that 3 occurs before 4. Which one of the following statements is TRUE?",
        options: [
          { A: "The events X and Y are mutually exclusive" },
          { B: "The events X and Y are independent" },
          { C: "Either event X or Y must occur" },
          { D: "Event X is more likely than event Y" },
        ],
        answer: "B",
      },
      {
        question: "Which one of the following statements is FALSE?",
        options: [
          {
            A: "In the cycle stealing mode of DMA, one word of data is transferred between an I/O device and main memory in a stolen cycle",
          },
          {
            B: "For bulk data transfer, the burst mode of DMA has a higher throughput than the cycle stealing mode",
          },
          {
            C: "Programmed I/O mechanism has a better CPU utilization than the interrupt driven I/O mechanism",
          },
          {
            D: "The CPU can start executing an interrupt service routine faster with vectored interrupts than with non-vectored interrupts",
          },
        ],
        answer: "C",
      },
      {
        question:
          "A user starts browsing a webpage hosted at a remote server. The browser opens a single TCP connection to fetch the entire webpage from the server. The webpage consists of a top-level index page with multiple embedded image objects. Assume that all caches (e.g., DNS cache, browser cache) are all initially empty. The following packets leave the user’s computer in some order. (i) HTTP GET request for the index page (ii) DNS request to resolve the web server’s name to its IP address (iii) HTTP GET request for an image object (iv) TCP SYN to open a connection to the web server. Which one of the following is the CORRECT chronological order (earliest in time to latest) of the packets leaving the computer?",
        options: [
          { A: "(iv), (ii), (iii), (i)" },
          { B: "(ii), (iv), (iii), (i)" },
          { C: "(ii), (iv), (i), (iii)" },
          { D: "(iv), (ii), (i), (iii)" },
        ],
        answer: "C",
      },
      {
        question:
          "Given an integer array of size N, we want to check if the array is sorted (in either ascending or descending order). An algorithm solves this problem by making a single pass through the array and comparing each element of the array only with its adjacent elements. The worst-case time complexity of this algorithm is",
        options: [
          { A: "O(N)" },
          { B: "O(N log N)" },
          { C: "O(N^2)" },
          { D: "O(1)" },
        ],
        answer: "A",
      },
      {
        question:
          "Which one of the following is the correct time complexity of checking if a given string (of length n) is a palindrome or not?",
        options: [
          { A: "O(1)" },
          { B: "O(n)" },
          { C: "O(n^2)" },
          { D: "O(log n)" },
        ],
        answer: "B",
      },
      {
        question:
          'Consider the following C program: #include <stdio.h> int main() { int a = 1, b = 0; for (a = 0; a < 5; a = a + 1) { b = b + 2; } printf("%d\\n", b); return 0; } The program prints',
        options: [{ A: "0" }, { B: "2" }, { C: "4" }, { D: "6" }],
        answer: "D",
      },
      {
        question:
          "Consider the following C++ program: #include <iostream> using namespace std; int main() { int x = 4; int y = 1; int z = 0; while(x > 0) { z = y; y = y * x; x = x - 1; } cout << y << endl; return 0; } The program will terminate with",
        options: [
          { A: "output 24" },
          { B: "output 12" },
          { C: "output 4321" },
          { D: "output 4321 as output" },
        ],
        answer: "A",
      },
      {
        question:
          "The following ER diagram correctly represents the specification: [INSERT ER DIAGRAM IMAGE HERE]",
        options: [
          { A: "Diagram A" },
          { B: "Diagram B" },
          { C: "Diagram C" },
          { D: "Diagram D" },
        ],
        answer: "B",
      },
      {
        question:
          "In a B-Tree, the requirement of at least half-full (50%) node occupancy is relaxed for",
        options: [
          { A: "Only the root node" },
          { B: "Every node except root node" },
          { C: "Leaf nodes" },
          { D: "All nodes" },
        ],
        answer: "A",
      },
      {
        question:
          "Which of the following statements is TRUE about a relation in first normal form (1NF)?",
        options: [
          { A: "R can have a multi-attribute key" },
          { B: "R can have a multi-valued attribute" },
          { C: "R cannot have a composite key" },
          { D: "R cannot have a nested relation" },
        ],
        answer: "D",
      },
      {
        question:
          "Let L1 and L2 be regular languages and L3 be a language that is not regular. Which one of the following statements is TRUE?",
        options: [
          { A: "L1 ∩ L3 is regular" },
          { B: "L1 ∪ L3 is regular" },
          { C: "L1 − L3 is regular" },
          { D: "L1 ∪ L2 ∪ L3 is not regular" },
        ],
        answer: "D",
      },
      {
        question: "Which of the following statements about threads is TRUE?",
        options: [
          {
            A: "Threads belonging to a process share the process’s memory space",
          },
          {
            B: "Threads belonging to a process are completely independent from each other",
          },
          { C: "Threads have their own memory space" },
          {
            D: "Threads belonging to a process are by default protected from each other",
          },
        ],
        answer: "A",
      },
      {
        question:
          "Which of the following process state transitions are NOT possible?",
        options: [
          { A: "New to Running" },
          { B: "Running to Terminated" },
          { C: "Ready to Waiting" },
          { D: "Waiting to Running" },
        ],
        answer: "C",
      },
      {
        question:
          "Which of the following parsing techniques are Bottom-Up Parsers?",
        options: [
          { A: "Shift-reduce Parser" },
          { B: "Recursive Descent Parser" },
          { C: "Top-Down Parser" },
          { D: "LR Parser" },
        ],
        answer: "A",
      },
      {
        question:
          "Which of the following statements about events with given probabilities are TRUE?",
        options: [
          { A: "P(A ∪ B) = 0.6" },
          { B: "P(A ∩ B) = 0.2" },
          { C: "P(A ∪ B) = 0.4" },
          { D: "P(A^c ∩ B^c) = 0.4" },
        ],
        answer: "D",
      },
      {
        question:
          "Which of the following statements about circuits with propagation delays is CORRECT?",
        options: [
          {
            A: "With propagation delays, the output Y can have a transient logic One after X transitions from logic Zero to logic One",
          },
          {
            B: "With propagation delays, the output Y can have a transient logic Zero after X transitions from logic One to logic Zero",
          },
          {
            C: "With propagation delays, the output Y can never be stable after X transitions",
          },
          {
            D: "With propagation delays, the output Y remains the same as X transitions",
          },
        ],
        answer: "A",
      },
      {
        question:
          "The TCP sequence number and acknowledgment number in a segment are chosen as follows. Which of the following statements is TRUE?",
        options: [
          { A: "The sequence number N_P is chosen randomly by P" },
          { B: "The acknowledgment number N_Q is chosen randomly by Q" },
          { C: "The sequence number N_P is equal to N_Q" },
          { D: "The acknowledgment number N_Q is equal to N_P + 1" },
        ],
        answer: "D",
      },
      {
        question:
          "Which of the following statements about forwarding in a pipelined processor is TRUE?",
        options: [
          {
            A: "In a pipelined execution, forwarding means the result from a source stage of an earlier instruction is passed on to the destination stage of a later instruction",
          },
          { B: "Forwarding prevents all pipeline stalls" },
          { C: "Forwarding is not used in modern processors" },
          { D: "Forwarding can be implemented in a non-pipelined processor" },
        ],
        answer: "A",
      },
      {
        question:
          "In a Network Address Translation (NAT) device, which of the following fields in the IP header of a packet going out of the NAT device may be modified?",
        options: [
          { A: "Source IP" },
          { B: "Destination IP" },
          { C: "Header Checksum" },
          { D: "Protocol Number" },
        ],
        answer: "A",
      },
      {
        question: "The number of possible values of |A| is",
        options: [{ A: "0" }, { B: "1" }, { C: "2" }, { D: "4" }],
        answer: "D",
      },
      {
        question:
          "The value of the expression 3 + 1 + 5 * 2 / 7 + 2 - 4 - 7 - 6 / 2 is",
        options: [{ A: "5" }, { B: "4" }, { C: "3" }, { D: "2" }],
        answer: "D",
      },
      {
        question:
          "The number of spanning trees in a complete graph of 4 vertices is",
        options: [{ A: "14" }, { B: "16" }, { C: "24" }, { D: "38" }],
        answer: "B",
      },
      {
        question:
          "The total number of tuples obtained by evaluating the expression is",
        options: [{ A: "4" }, { B: "6" }, { C: "8" }, { D: "10" }],
        answer: "B",
      },
      {
        question: "The time at which R receives all chunks of the file is",
        options: [
          { A: "8.000" },
          { B: "8.005" },
          { C: "8.010" },
          { D: "8.015" },
        ],
        answer: "C",
      },
      {
        question:
          'The value computed by the SDD (in the attribute S.val) for input "MMLK" is',
        options: [{ A: "54" }, { B: "60" }, { C: "64" }, { D: "65" }],
        answer: "B",
      },
      {
        question:
          "Which of the following grammar rules CORRECTLY fills the incomplete productions in the given SDD?",
        options: [
          { A: "S → Rf, T → cT, R → cR, R → ε" },
          { B: "S → cT, T → cT, R → ε, T → cT" },
          { C: "S → Rf, T → cT, R → cR, R → ε" },
          { D: "S → cT, T → cT, R → ε, R → cR" },
        ],
        answer: "A",
      },
      {
        question:
          "The number of bits needed to represent 4 million (2^22) integers in the worst-case scenario is",
        options: [{ A: "22" }, { B: "24" }, { C: "26" }, { D: "28" }],
        answer: "B",
      },
      {
        question:
          "Which of the following steps is NOT required in a relational database management system (RDBMS) to design a good schema?",
        options: [
          { A: "Determine functional dependencies" },
          { B: "Identify candidate keys" },
          { C: "Minimize redundancy" },
          { D: "Perform normalization" },
        ],
        answer: "C",
      },
    ],
  },

  // Add more questions as needed
];
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    if (questions[currentQuestion].answer === option) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/score', { state: { score } });
    }
  };

  return (
    <Container className="mt-5">
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onSelect={handleSelect}
      />
    </Container>
  );
};

export default Quiz;
// const Quiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const navigate = useNavigate();

//   const handleSelect = (option) => {
//     if (questions[currentQuestion].answer === option) {
//       setScore(score + 1);
//     }
//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       navigate("/score", { state: { score } });
//     }
//   };

//   return (
//     <div>
//       <Question
//         question={questions[currentQuestion].question}
//         options={questions[currentQuestion].options}
//         onSelect={handleSelect}
//       />
//     </div>
//   );
// };

// export default Quiz;
