// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import React from 'react'
// import Course from './components/Course'

// function App() {
//   const courseVal = [
//     {
//       name: 'Grace Marvin',
//       title: 'Software Engineer',
//       company: 'Tech Solutions Inc.',
//       email: 'grace@marvin.com'
//     },
//     {
//       name: 'Amy Smith',
//       title: 'Data Scientist',
//       company: 'Data Insights Ltd.',
//       email: 'amy@smith.com'
//     }
//   ]

//   const [courses, setCourses] = useState(courseVal)

//   return (
//     <div>
//       <h1>Courses</h1>
//       {
//         courses.map((c) => {
//           return <Course course={c} setCourses={setCourses} />
//         })
//       }
//     </div>
//   )
// }

// export default App

import PetitionPage from "./pages/PetitionPage";

function App() {
  return <PetitionPage />;
}

export default App;
