// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const userNameInput = React.useRef(null)
  // const [error, setError] = React.useState(null)
  const [usernameValue, setUsernameValue] = React.useState('')

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  function handleChange(event) {
    setUsernameValue(event.target.value.toLowerCase())
    // const isValid = value === value.toLowerCase()
    // setError(isValid ? null : 'Username must be lower case')
  }
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onSubmitUsername(event.target.userNameInput.value)
        return console.dir(userNameInput.current.value)
      }}
    >
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          type="text"
          id="userNameInput"
          ref={userNameInput}
          onChange={handleChange}
          value={usernameValue}
        />
      </div>
      {/* {error && (
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      )} */}
      {/* <button type="submit" disabled={Boolean(error)}>
        Submit
      </button> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
