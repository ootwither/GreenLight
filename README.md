# GreenLight

The dream was to make this a task / todo manager for tasks that need to be repeated regularly, like stretching and staying hydrated during the workday, remembering to do laundry every two days, and taking the recycling out on wednesdays - but unfortunately a combination of illness and family crisis meant I only had a small time to work on it and so the feature set is very limited. Sorry! You'll find there are some obvious issues in the codebase to fix, but if you want a legacy project that's mainly about adding features, this is one for you!

# Startup
You'll need a mongoDB instance running on the default port, and you can then use
```nodemon index.js``` from /server for the server, and
```npm run dev``` from /client to start the frontend.

The app runs well enough for you to input some tasks yourself using the included form.

Code cleanup tasks:

Pull the fetch() calls out of the react components into the apiService I started.
Write some tests and hook them in to the front and back end.
Perform more validation from the front and back end on data saved to the DB (for example, character limits for the short button text). Currently there's some but not enough.

Features:
Replace the interval text field with a proper slider.
Provide some way to see the full description attached to a button - possibly on mouseover?
Provide a way to delete a button.
Allow other kinds of intervals for tasks to reset at - like, reset at a particular time each day, or only be active between x and y o'clock, or only reset on wednesday mornings, or some combination.
Allow for different button panels grouped by some theme (e.g. work / self-care / house tasks) and provide some way to customise those panels.
