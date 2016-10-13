Note: This Book Sucks! is the launch of what will be an even bigger and
better app!

We've all heard of GoodReads.com, right? It's great for non-readers who need
book recommendations. But what about voracious readers who need to remove
books from their elephantine to-read lists?

That's where This Book Sucks! comes in. Users can write scathing reviews
about terrible books in order to convince people to remove them from their
to-read-lists.

That part is still yet to come, but let's face it: Sometimes it's fun to read a
badly written book just to laugh at it! The user is able to choose from
a master list of list of ten, God-awful books, which of course includes "50 Shades
of Grey" as well as a number of reads by Jodi Picoult. They can add a book to
their to-read list. Or, if they've changed their mind and decide that they
can't even LAUGH AT the stupidity of "50 Shades of Grey", for example,
can remove the book.

Does the user have several books on their to-read list? They can add a note:
"Will read in November", for example. Or "I heard this one really sucks!"
Don't need the note after all? The user can delete it.

I drew a wireframe for the frontend as well as ERDs for the backend.

I went back and forth between the backend and frontend, but I'm realizing now
I probably should have completed as much of one as I could before moving
on to the other.

Unsolved issues include: Letting the user write and post reviews (mostly due to
lack of time-- that will come out in the next version).

I also would have liked to have more time to give the app a better visual design.

App as it stands now: https://julie1013.github.io/booksucks-front-end/
Link to back end: https://github.com/julie1013/booksucks-api
Wireframe 1: https://github.com/julie1013/booksucks-front-end/blob/master/IMG_1899.JPG
Wireframe 2: https://github.com/julie1013/booksucks-front-end/blob/master/IMG_1898.JPG
Wireframe 3: https://github.com/julie1013/booksucks-front-end/blob/master/IMG_1900.JPG

User stories, as they pertain to this current version of the project:

1. I want the user to be able to sign up, log in, change password, and log
out.
2. I want the user to be able to view a master list of books (GET)
2. I want the user to add a book to their to-read list. (POST)
3. I want the user to write a note on the book (PATCH-- message changes from default)
4. I want the user to remove a note on the book (PATCH-- message changes to default)
5. I want the user to remove a book from their to-read list (DELETE).
