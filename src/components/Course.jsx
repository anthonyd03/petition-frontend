import React, { use } from 'react'
import { useState } from 'react'

function Course(props) {
  const {course, setCourses} = props

  return (
    <div>
      <h2>{course.company}</h2>
      <h3>{course.title}</h3>
    </div>
  )
}

export default Course