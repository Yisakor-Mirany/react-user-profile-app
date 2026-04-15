import { useState } from 'react'

/**
 * UserProfile
 * ----------
 * Demonstrates how to manage a nested state object with useState.
 *
 * The `userProfile` state holds a top-level `name` and `email`, plus a
 * nested `address` object. When the user submits the form, we update ONLY
 * the `address` field while preserving the rest of the profile, using the
 * spread operator for an immutable update.
 */
function UserProfile() {
  // The single source of truth for our profile data.
  const [userProfile, setUserProfile] = useState({
    name: 'Ada Lovelace',
    email: 'ada@example.com',
    address: {
      street: '10 Analytical Engine Ave',
      city: 'London',
      country: 'United Kingdom',
    },
  })

  // Local form state for the controlled inputs.
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  /**
   * Immutably update the nested `address` object.
   * 1. Copy the previous profile with `...prev`
   * 2. Replace `address` with a NEW object built from the previous address
   *    plus the new field values. This keeps `name` and `email` intact.
   */
  const updateAddress = (street, city, country) => {
    setUserProfile((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        street,
        city,
        country,
      },
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Only update fields the user actually filled in; otherwise keep the
    // existing value. This makes the form forgiving for partial updates.
    updateAddress(
      street.trim() || userProfile.address.street,
      city.trim() || userProfile.address.city,
      country.trim() || userProfile.address.country,
    )
    setStreet('')
    setCity('')
    setCountry('')
  }

  return (
    <section className="profile-card">
      <header className="profile-header">
        <div className="avatar" aria-hidden="true">
          {userProfile.name.charAt(0)}
        </div>
        <div>
          <h1 className="profile-name">{userProfile.name}</h1>
          <p className="profile-email">{userProfile.email}</p>
        </div>
      </header>

      <div className="profile-section">
        <h2 className="section-title">Current Address</h2>
        <ul className="address-list">
          <li>
            <span className="label">Street</span>
            <span className="value">{userProfile.address.street}</span>
          </li>
          <li>
            <span className="label">City</span>
            <span className="value">{userProfile.address.city}</span>
          </li>
          <li>
            <span className="label">Country</span>
            <span className="value">{userProfile.address.country}</span>
          </li>
        </ul>
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>
        <h2 className="section-title">Update Address</h2>

        <label className="field">
          <span>Street</span>
          <input
            type="text"
            value={street}
            placeholder={userProfile.address.street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </label>

        <label className="field">
          <span>City</span>
          <input
            type="text"
            value={city}
            placeholder={userProfile.address.city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>

        <label className="field">
          <span>Country</span>
          <input
            type="text"
            value={country}
            placeholder={userProfile.address.country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>

        <button type="submit" className="primary-btn">
          Update Address
        </button>
      </form>
    </section>
  )
}

export default UserProfile
