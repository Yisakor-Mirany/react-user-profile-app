import UserProfile from './UserProfile.jsx'

function App() {
  return (
    <main className="app">
      <div className="app-inner">
        <h1 className="app-title">User Profile with Nested State</h1>
        <p className="app-subtitle">
          A small React + Vite demo showing how to update nested state
          immutably using the spread operator.
        </p>
        <UserProfile />
        <footer className="app-footer">
          Built with React &amp; Vite &middot; Classroom assignment
        </footer>
      </div>
    </main>
  )
}

export default App
