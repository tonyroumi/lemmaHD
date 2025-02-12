import React, { useEffect, useState } from 'react'
import { gapi } from 'gapi-script'

const Calendar = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const CALENDAR_ID = 'c_790b49e6d3b6169c1d89e411d2413a7ba9e30d13535e7d78ce7d5c10d99c9465@group.calendar.google.com'
  const API_KEY = 'AIzaSyDE60JZnqQICDqBiZkkvJu-BBeQ7TWYKwo'
  const CLIENT_ID = '413073229415-j6666dne9gmqph645nmdl2ri7p6nr9r7.apps.googleusercontent.com'

  useEffect(() => {
    const initializeGapi = async () => {
      try {
        await gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
          scope: 'https://www.googleapis.com/auth/calendar.events.readonly'
        })

        // Check if already signed in
        const authInstance = gapi.auth2.getAuthInstance()
        setIsAuthenticated(authInstance.isSignedIn.get())

        // Listen for sign-in state changes
        authInstance.isSignedIn.listen((signedIn) => {
          setIsAuthenticated(signedIn)
          if (signedIn) {
            loadEvents()
          }
        })

        if (authInstance.isSignedIn.get()) {
          loadEvents()
        } else {
          setLoading(false)
        }

      } catch (err) {
        setError('Failed to initialize Google API')
        setLoading(false)
        console.error('Error initializing:', err)
      }
    }

    gapi.load('client:auth2', initializeGapi)
  }, [])

  const loadEvents = async () => {
    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: CALENDAR_ID,
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime'
      })

      setEvents(response.result.items)
      setLoading(false)
    } catch (err) {
      setError('Failed to load calendar events')
      setLoading(false)
      console.error('Error loading calendar:', err)
    }
  }

  const handleSignIn = () => {
    const authInstance = gapi.auth2.getAuthInstance()
    authInstance.signIn()
  }

  const handleSignOut = () => {
    const authInstance = gapi.auth2.getAuthInstance()
    authInstance.signOut()
  }

  const handleBookAppointment = async (timeSlot) => {
    try {
      const event = {
        summary: 'New Appointment',
        start: {
          dateTime: timeSlot.start,
          timeZone: 'America/Los_Angeles'
        },
        end: {
          dateTime: timeSlot.end,
          timeZone: 'America/Los_Angeles'
        }
      }

      await gapi.client.calendar.events.insert({
        calendarId: CALENDAR_ID,
        resource: event
      })

      // Refresh the events list
      const response = await gapi.client.calendar.events.list({
        calendarId: CALENDAR_ID,
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime'
      })

      setEvents(response.result.items)
    } catch (err) {
      setError('Failed to book appointment')
      console.error('Error booking appointment:', err)
    }
  }

  if (loading) return <div className="max-w-4xl mx-auto p-4">Loading calendar...</div>
  if (error) return <div className="max-w-4xl mx-auto p-4 text-red-500">{error}</div>

  if (!isAuthenticated) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <button 
          onClick={handleSignIn}
          className="px-4 py-2 bg-stone-300 text-white rounded hover:bg-stone-400"
        >
          Sign in with Google
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Available Appointments</h2>
        <button 
          onClick={handleSignOut}
          className="px-4 py-2 bg-stone-300 text-white rounded hover:bg-stone-400"
        >
          Sign Out
        </button>
      </div>
      <div className="grid gap-4">
        {events.map((event, index) => (
          <div key={index} className="p-4 border border-stone-300 rounded-lg bg-white">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{event.summary}</h3>
                <p className="text-gray-600">
                  {new Date(event.start.dateTime).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => handleBookAppointment(event)}
                className="px-4 py-2 bg-stone-300 text-white rounded hover:bg-stone-400"
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
