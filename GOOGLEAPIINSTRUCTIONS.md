https://developers.google.com/books/docs/v1/using#auth

Using the API
Introduction
This document is intended for developers who want to write applications that can interact with the Books API. Google Books has a mission to digitize the world's book content and make it more discoverable on the Web. The Books API is a way to search and access that content, as well as to create and view personalization around that content.

If you're unfamiliar with Google Books concepts, you should read Getting Started before starting to code.

Authorizing requests and identifying your application
Every request your application sends to the Books API needs to identify your application to Google. There are two ways to identify your application: using an OAuth 2.0 token (which also authorizes the request) and/or using the application's API key. Here's how to determine which of those options to use:

If the request requires authorization (such as a request for an individual's private data), then the application must provide an OAuth 2.0 token with the request. The application may also provide the API key, but it doesn't have to.
If the request doesn't require authorization (such as a request for public data), then the application must provide either the API key or an OAuth 2.0 token, or both—whatever option is most convenient for you.
About authorization protocols
Your application must use OAuth 2.0 to authorize requests. No other authorization protocols are supported. If your application uses Google Sign-In, some aspects of authorization are handled for you.

Authorizing requests with OAuth 2.0
Requests to the Books API for non-public user data must be authorized by an authenticated user.

The details of the authorization process, or "flow," for OAuth 2.0 vary somewhat depending on what kind of application you're writing. The following general process applies to all application types:

When you create your application, you register it using the Google API Console. Google then provides information you'll need later, such as a client ID and a client secret.
Activate the Books API in the Google API Console. (If the API isn't listed in the API Console, then skip this step.)
When your application needs access to user data, it asks Google for a particular scope of access.
Google displays a consent screen to the user, asking them to authorize your application to request some of their data.
If the user approves, then Google gives your application a short-lived access token.
Your application requests user data, attaching the access token to the request.
If Google determines that your request and the token are valid, it returns the requested data.
Some flows include additional steps, such as using refresh tokens to acquire new access tokens. For detailed information about flows for various types of applications, see Google's OAuth 2.0 documentation.

Here's the OAuth 2.0 scope information for the Books API:

https://www.googleapis.com/auth/books

To request access using OAuth 2.0, your application needs the scope information, as well as information that Google supplies when you register your application (such as the client ID and the client secret).

Tip: The Google APIs client libraries can handle some of the authorization process for you. They are available for a variety of programming languages; check the page with libraries and samples for more details.

Acquiring and using an API key
Requests to the Books API for public data must be accompanied by an identifier, which can be an API key or an access token.

To acquire an API key:

Open the Credentials page in the API Console.
This API supports two types of credentials. Create whichever credentials are appropriate for your project:
OAuth 2.0: Whenever your application requests private user data, it must send an OAuth 2.0 token along with the request. Your application first sends a client ID and, possibly, a client secret to obtain a token. You can generate OAuth 2.0 credentials for web applications, service accounts, or installed applications.

For more information, see the OAuth 2.0 documentation.

API keys: A request that does not provide an OAuth 2.0 token must send an API key. The key identifies your project and provides API access, quota, and reports.

The API supports several types of restrictions on API keys. If the API key that you need doesn't already exist, then create an API key in the Console by clicking Create credentials > API key. You can restrict the key before using it in production by clicking Restrict key and selecting one of the Restrictions.

To keep your API keys secure, follow the best practices for securely using API keys.

After you have an API key, your application can append the query parameter key=yourAPIKey to all request URLs.

The API key is safe for embedding in URLs; it doesn't need any encoding.

Google Books IDs
You need to specify ID fields with certain API method calls. There are three types of IDs used within Google Books:

Volume IDs - Unique strings given to each volume that Google Books knows about. An example of a volume ID is _LettPDhwR0C. You can use the API to get the volume ID by making a request that returns a Volume resource; you can find the volume ID in its id field.
Bookshelf IDs - Numeric values given to a bookshelf in a user's library. Google provides some pre-defined shelves for every user with the following IDs:
Favorites: 0
Purchased: 1
To Read: 2
Reading Now: 3
Have Read: 4
Reviewed: 5
Recently Viewed: 6
My eBooks: 7
Books For You: 8 If we have no recommendations for the user, this shelf does not exist.
Custom shelves have IDs greater than 1000. A bookshelf ID is unique for a given user, i.e., two users can have a bookshelf with the same ID that refer to different bookshelves. You can use the API to get the bookshelf ID by making a request that returns a Bookshelf resource; you can find the bookshelf ID in its id field.
User IDs - Unique numeric values assigned to each user. These values are not necessarily the same ID value used in other Google services. Currently, the only way retrieve the user ID is to extract it from the selfLink in a Bookshelf resource retrieved with an authenticated request. Users can also obtain their own user ID from the Books site. A user cannot obtain the user ID for another user via the API or the Books site; the other user would have to share that information explicitly, by email for example.
IDs on Google Books site
The IDs you use with the Books API are the same IDs used on the Google Books site.

Volume ID
When viewing a particular volume on the site, you can find the volume ID in the id URL parameter. Here is an example:

https://books.google.com/ebooks?id=buc0AAAAMAAJ&dq=holmes&as_brr=4&source=webstore_bookcard

Bookshelf ID
When viewing a particular bookshelf on the site, you can find the bookshelf ID in the as_coll URL parameter. Here is an example:

https://books.google.com/books?hl=en&as_coll=0&num=10&uid=11122233344455566778&source=gbs_slider_cls_metadata_0_mylibrary

User ID
When viewing your library on the site, you can find the user ID in the uid URL parameter. Here is an example:

https://books.google.com/books?uid=11122233344455566778&source=gbs_lp_bookshelf_list

Setting User Location
Google Books respects copyright, contract, and other legal restrictions associated with the end user's location. As a result, some users might not be able to access book content from certain countries. For example, certain books are "previewable" only in the United States; we omit such preview links for users in other countries. Therefore, the API results are restricted based on your server or client application's IP address.

Working with volumes
Performing a search
You can perform a volumes search by sending an HTTP GET request to the following URI:

https://www.googleapis.com/books/v1/volumes?q=search+terms

This request has a single required parameter:

q - Search for volumes that contain this text string. There are special keywords you can specify in the search terms to search in particular fields, such as:
intitle: Returns results where the text following this keyword is found in the title.
inauthor: Returns results where the text following this keyword is found in the author.
inpublisher: Returns results where the text following this keyword is found in the publisher.
subject: Returns results where the text following this keyword is listed in the category list of the volume.
isbn: Returns results where the text following this keyword is the ISBN number.
lccn: Returns results where the text following this keyword is the Library of Congress Control Number.
oclc: Returns results where the text following this keyword is the Online Computer Library Center number.
Request
Here is an example of searching for Daniel Keyes' "Flowers for Algernon":

GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

Note: Performing a search does not require authentication, so you do not have to provide the Authorization HTTP header with the GET request. However, if the call is made with authentication, each Volume will include user-specific information, such as purchased status.

Response
If the request succeeds, the server responds with a 200 OK HTTP status code and the volume results:

200 OK

{
 "kind": "books#volumes",
 "items": [
  {
   "kind": "books#volume",
   "id": "_ojXNuzgHRcC",
   "etag": "OTD2tB19qn4",
   "selfLink": "https://www.googleapis.com/books/v1/volumes/_ojXNuzgHRcC",
   "volumeInfo": {
    "title": "Flowers",
    "authors": [
     "Vijaya Khisty Bodach"
    ],
   ...
  },
  {
   "kind": "books#volume",
   "id": "RJxWIQOvoZUC",
   "etag": "NsxMT6kCCVs",
   "selfLink": "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
   "volumeInfo": {
    "title": "Flowers",
    "authors": [
     "Gail Saunders-Smith"
    ],
    ...
  },
  {
   "kind": "books#volume",
   "id": "zaRoX10_UsMC",
   "etag": "pm1sLMgKfMA",
   "selfLink": "https://www.googleapis.com/books/v1/volumes/zaRoX10_UsMC",
   "volumeInfo": {
    "title": "Flowers",
    "authors": [
     "Paul McEvoy"
    ],
    ...
  },
  "totalItems": 3
}

Optional query parameters
In addition to the standard query parameters, you can use the following query parameters when performing a volumes search.

Download Format
You use the download parameter to restrict the returned results to volumes that have an available download format of epub by setting the to the value epub.

The following example searches for books with an epub download available:

GET https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=yourAPIKey

Filtering
You can use the filter parameter to restrict the returned results further by setting it the to one of the following values:

partial - Returns results where at least parts of the text are previewable.
full - Only returns results where all of the text is viewable.
free-ebooks - Only returns results that are free Google eBooks.
paid-ebooks - Only returns results that are Google eBooks with a price.
ebooks - Only returns results that are Google eBooks, paid or free. Examples of non-eBooks would be publisher content that is available in limited preview and not for sale, or magazines.
The following example restricts search results to those available as free eBooks:

GET https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=yourAPIKey

Pagination
You can paginate the volumes list by specifying two values in the parameters for the request:

startIndex - The position in the collection at which to start. The index of the first item is 0.
maxResults - The maximum number of results to return. The default is 10, and the maximum allowable value is 40.
Print Type
You can use the printType parameter to restrict the returned results to a specific print or publication type by setting it to one of the following values:

all - Does not restrict by print type (default).
books - Returns only results that are books.
magazines - Returns results that are magazines.
The following example restricts search results to magazines:

GET https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey

Projection
You can use the projection parameter with one of the following values to specify a predefined set of Volume fields to return:

full - Returns all Volume fields.
lite - Returns only certain fields. See field descriptions marked with double asterisks in the Volume reference to find out which fields are included.
The following example returns search results with limited volume information:

GET https://www.googleapis.com/books/v1/volumes?q=flowers&projection=lite&key=yourAPIKey

Sorting
By default, a volumes search request returns maxResults results, where maxResults is the parameter used in pagination (above), ordered by relevance to search terms.

You can change the ordering by setting the orderBy parameter to be one of these values:

relevance - Returns results in order of the relevance of search terms (this is the default).
newest - Returns results in order of most recently to least recently published.
The following example lists results by published date, newest to oldest:

GET https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=yourAPIKey

Retrieving a specific volume
You can retrieve information for a specific volume by sending an HTTP GET request to the Volume resource URI:

https://www.googleapis.com/books/v1/volumes/volumeId

Replace the volumeId path parameter with the ID of the volume to retrieve. See the Google Books IDs section for more information on volume IDs.

Request
Here is an example of a GET request that gets a single volume:

GET https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey

Note: Retrieving volume information does not require authentication, so you do not have to provide the Authorization HTTP header with the GET request. However, if the call is made with authentication, the Volume will include user-specific information, such as purchased status.

Response
If the request succeeds, the server responds with the 200 OK HTTP status code and the Volume resource requested:

200 OK

{
 "kind": "books#volume",
 "id": "zyTCAlFPjgYC",
 "etag": "f0zKg75Mx/I",
 "selfLink": "https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC",
 "volumeInfo": {
  "title": "The Google story",
  "authors": [
   "David A. Vise",
   "Mark Malseed"
  ],
  "publisher": "Random House Digital, Inc.",
  "publishedDate": "2005-11-15",
  "description": "\"Here is the story behind one of the most remarkable Internet
  successes of our time. Based on scrupulous research and extraordinary access
  to Google, ...",
  "industryIdentifiers": [
   {
    "type": "ISBN_10",
    "identifier": "055380457X"
   },
   {
    "type": "ISBN_13",
    "identifier": "9780553804577"
   }
  ],
  "pageCount": 207,
  "dimensions": {
   "height": "24.00 cm",
   "width": "16.03 cm",
   "thickness": "2.74 cm"
  },
  "printType": "BOOK",
  "mainCategory": "Business & Economics / Entrepreneurship",
  "categories": [
   "Browsers (Computer programs)",
   ...
  ],
  "averageRating": 3.5,
  "ratingsCount": 136,
  "contentVersion": "1.1.0.0.preview.2",
  "imageLinks": {
   "smallThumbnail": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
   "thumbnail": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
   "small": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api",
   "medium": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api",
   "large": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=4&edge=curl&source=gbs_api",
   "extraLarge": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=6&edge=curl&source=gbs_api"
  },
  "language": "en",
  "infoLink": "https://books.google.com/books?id=zyTCAlFPjgYC&ie=ISO-8859-1&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/The_Google_story.html?id=zyTCAlFPjgYC"
 },
 "saleInfo": {
  "country": "US",
  "saleability": "FOR_SALE",
  "isEbook": true,
  "listPrice": {
   "amount": 11.99,
   "currencyCode": "USD"
  },
  "retailPrice": {
   "amount": 11.99,
   "currencyCode": "USD"
  },
  "buyLink": "https://books.google.com/books?id=zyTCAlFPjgYC&ie=ISO-8859-1&buy=&source=gbs_api"
 },
 "accessInfo": {
  "country": "US",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
  "epub": {
   "isAvailable": true,
   "acsTokenLink": "https://books.google.com/books/download/The_Google_story-sample-epub.acsm?id=zyTCAlFPjgYC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
   "isAvailable": false
  },
  "accessViewStatus": "SAMPLE"
 }
}

Access Info
The accessInfo section is of particular interest in determining what features are available for an eBook. An epub is a flowing text format ebook, the epub section will have an isAvailable property indicating if this type of ebook is available. It will have a download link if there is a sample for the book or if the user can read the book either due to having purchased it or due to it being public domain in the user's location. A pdf for Google books indicates a scanned pages version of the ebook with similar details such as if it is available and a download link. Google recommends epub files for eReaders and SmartPhones, as scanned pages may be hard to read on these devices. If there is no accessInfo section, the volume is not available as a Google eBook.

Optional query parameters
In addition to the standard query parameters, you can use the following query parameter when retrieving a specific volume.

Projection
You can use the projection parameter with one of the following values to specify a predefined set of Volume fields to return:

full - Returns all Volume fields.
lite - Returns only certain fields. See field descriptions marked with double asterisks in the Volume reference to find out which fields are included.
The following example returns limited volume information for a single volume:

GET https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?projection=lite&key=yourAPIKey

Working with bookshelves
Retrieving a list of a user's public bookshelves
You can retrieve a list of a user's public bookshelves by sending an HTTP GET request to the URI with the following format:

https://www.googleapis.com/books/v1/users/userId/bookshelves

Replace the userId path parameter with the ID of the user whose bookshelves you would like to retrieve. See the Google Books IDs section for more information on user IDs.

Request
Here is an example:

GET https://www.googleapis.com/books/v1/users/1112223334445556677/bookshelves&key=yourAPIKey

Since a user does not have to be authenticated to retrieve information regarding public bookshelves, you do not have to provide the Authorization HTTP header with the GET request.

Response
If the request succeeds, the server responds with the 200 OK HTTP status code and the list of bookshelves:

200 OK

{
 "kind": "books#bookshelves",
 "items": [
  {
   ...
  },
  {
   "kind": "books#bookshelf",
   "id": 3,
   "selfLink": "https://www.googleapis.com/books/v1/users/1112223334445556677/bookshelves/3",
   "title": "Reading now",
   "description": "",
   "access": "PUBLIC",
   "updated": "2011-02-02T20:34:20.146Z",
   "created": "2011-02-02T20:34:20.146Z",
   "volumeCount": 2,
   "volumesLastUpdated": "2011-02-02T20:34:20.110Z"
  },
  ...
 ]
}

Optional query parameters
You can use the standard query parameters when retrieving the list of a user's public bookshelves.

Retrieving a specific public bookshelf
You can retrieve a specific public bookshelf by sending an HTTP GET request to the URI with the following format:

https://www.googleapis.com/books/v1/users/userId/bookshelves/shelf

Replace the userId and shelf path parameters with the IDs that specify the user and the bookshelf you want to retrieve. See the Google Books IDs section for more information.

Request
Here is an example:

GET https://www.googleapis.com/books/v1/users/1112223334445556677/bookshelves/3?key=yourAPIKey

Since a user does not have to be authenticated to retrieve information regarding public bookshelves, you do not have to provide the Authorization HTTP header with the GET request.

Response
If the request succeeds, the server responds with the 200 OK HTTP status code and the bookshelf resource:

200 OK

{
  "kind": "books#bookshelf",
  "id": 3,
  "selfLink": "https://www.googleapis.com/books/v1/users/1112223334445556677/bookshelves/3",
  "title": "Reading now",
  "description": "",
  "access": "PUBLIC",
  "updated": "2011-02-02T20:34:20.146Z",
  "created": "2011-02-02T20:34:20.146Z",
  "volumeCount": 2,
  "volumesLastUpdated": "2011-02-02T20:34:20.110Z"
}

Optional query parameters
You can use the standard query parameters when retrieving a specific public bookshelf.

Retrieving a list of volumes on a public bookshelf
You can retrieve a list of volumes on a user's public bookshelf by sending an HTTP GET request the a URI with the following format:

https://www.googleapis.com/books/v1/user/userId/bookshelves/shelf/volumes

Request
Here is an example:

GET https://www.googleapis.com/books/v1/users/1112223334445556677/bookshelves/3/volumes?key=yourAPIKey

Replace the userId and shelf path parameters with the IDs that specify the user and the bookshelf you want to retrieve. See the Google Books IDs section for more information.

Since a user does not have to be authenticated to retrieve information regarding public bookshelves, you do not have to provide the Authorization HTTP header with the GET request.

Response
If the request succeeds, the server responds with a 200 OK HTTP status code and the list of the user's bookshelves:

200 OK

{
 "kind": "books#volumes",
 "items": [
  {
   "kind": "books#volume",
   "id": "AZ5J6B1-4BoC",
   "etag": "kIzQA7IUObk",
   "selfLink": "https://www.googleapis.com/books/v1/volumes/AZ5J6B1-4BoC",
   "volumeInfo": {
    "title": "The Girl Who Kicked the Hornet's Nest",
    "authors": [
     "Stieg Larsson"
    ],
    "publisher": "Knopf",
    "publishedDate": "2010-05-25",
    ...
  },
  {
   "kind": "books#volume",
   "id": "UvK1Slvkz3MC",
   "etag": "otKmdbRgdFQ",
   "selfLink": "https://www.googleapis.com/books/v1/volumes/UvK1Slvkz3MC",
   "volumeInfo": {
    "title": "The Girl who Played with Fire",
    "authors": [
     "Stieg Larsson"
    ],
    "publisher": "Knopf",
    "publishedDate": "2009-07-28",
    ...
  },
  {
   "kind": "books#volume",
   "id": "OBM3AAAAIAAJ",
   "etag": "xb47kTr8HsQ",
   "selfLink": "https://www.googleapis.com/books/v1/volumes/OBM3AAAAIAAJ",
   "volumeInfo": {
    "title": "The Sign of Four",
    "authors": [
     "Sir Arthur Conan Doyle"
    ],
    "publishedDate": "1890",
    ...
  }
 ],
 "totalItems": 3
}

Optional query parameters
In addition to the standard query parameters, you can use the following query parameter when retrieving a list of volumes on a public bookshelf.

Pagination
You can paginate the volumes list by specifying two values in the parameters for the request:

startIndex - The position in the collection at which to start. The index of the first item is 0.
maxResults - The maximum number of results to return. The default is 10, and the maximum allowable value is 40.
Working with bookshelves in "My Library"
All "My Library" requests apply to the authenticated user's data.

Retrieving a list of my bookshelves
You can retrieve a listing of all of the authenticated user's bookshelves by sending an HTTP GET request to the URI with the following format:

https://www.googleapis.com/books/v1/mylibrary/bookshelves

Request
Here is an example:

GET https://www.googleapis.com/books/v1/mylibrary/bookshelves?key=yourAPIKey
Authorization: /* auth token here */

Note: The user must be authenticated to retrieve a listing of "My Library" bookshelves. So you must provide the Authorization HTTP header with the GET request.

Response
If the request succeeds, the server responds with the 200 OK HTTP status code and the list of all bookshelves for the current authenticated user:

200 OK

{
 "kind": "books#bookshelves",
 "items": [
  {
   "kind": "books#bookshelf",
   "id": 0,
   "selfLink": "https://www.googleapis.com/books/v1/users/1112223334445556677/bookshelves/0",
   "title": "Favorites",
   "access": "PRIVATE",
   "updated": "2011-04-22T04:03:15.416Z",
   "created": "2011-04-22T04:03:15.416Z",
   "volumeCount": 0,
   "volumesLastUpdated": "2011-04-22T04:03:17.000Z"
  },
  {
   "kind": "books#bookshelf",
   "id": 3,
   "selfLink": "https://www.googleapis.com/books/v1/users/1112223334445556677/bookshelves/3",
   "title": "Reading now",
   "access": "PUBLIC",
   "updated": "2010-11-11T19:44:22.377Z",
   "created": "2010-11-11T19:44:22.377Z",
   "volumeCount": 1,
   "volumesLastUpdated": "2010-11-11T19:44:22.341Z"
  }
 ]
}

Optional query parameters
You can use the standard query parameters when retrieving the list of the authenticated user's bookshelves.

Retrieving a list of volumes on my bookshelf
You can retrieve a listing of the volumes on the authenticated user's bookshelf by sending an HTTP GET request to the URI with the following format:

https://www.googleapis.com/books/v1/mylibrary/bookshelves/shelf/volumes

Replace the shelf path parameter with the ID of the bookshelf. See the Google Books IDs section for more information on bookshelf IDs.

Request
Here is an example:

GET https://www.googleapis.com/books/v1/mylibrary/bookshelves/7/volumes?key=yourAPIKey
Authorization: /* auth token here */

Note: The user must be authenticated to retrieve a listing of "My Library" volumes. So you must provide the Authorization HTTP header with the GET request.

Response
If the request succeeds, the server responds with the 200 OK HTTP status code and list of bookshelf volumes:

200 OK

{
 "kind": "books#volumes",
 "items": [
  {
   "kind": "books#volume",
   "id": "AZ5J6B1-4BoC",
   "etag": "kIzQA7IUObk",
   "selfLink": "https://www.googleapis.com/books/v1/volumes/AZ5J6B1-4BoC",
   "volumeInfo": {
    "title": "The Girl Who Kicked the Hornet's Nest",
    "authors": [
     "Stieg Larsson"
    ],
    "publisher": "Knopf",
    "publishedDate": "2010-05-25",
    ...
  },
  {
   "kind": "books#volume",
   "id": "UvK1Slvkz3MC",
   "etag": "otKmdbRgdFQ",
   "selfLink": "https://www.googleapis.com/books/v1/volumes/UvK1Slvkz3MC",
   "volumeInfo": {
    "title": "The Girl who Played with Fire",
    "authors": [
     "Stieg Larsson"
    ],
    "publisher": "Knopf",
    "publishedDate": "2009-07-28",
    ...
  },
  {
   "kind": "books#volume",
   "id": "OBM3AAAAIAAJ",
   "etag": "xb47kTr8HsQ",
   "selfLink": "https://www.googleapis.com/books/v1/volumes/OBM3AAAAIAAJ",
   "volumeInfo": {
    "title": "The Sign of Four",
    "authors": [
     "Sir Arthur Conan Doyle"
    ],
    "publishedDate": "1890",
    ...
  }
 ],
 "totalItems": 3
}

Optional query parameters
In addition to the standard query parameters, you can use the following query parameter when retrieving a list of volumes on one of the authenticated user's bookshelves.

Pagination
You can paginate the volumes list by specifying two values in the parameters for the request:

startIndex - The position in the collection at which to start. The index of the first item is 0.
maxResults - The maximum number of results to return. The default is 10.
Adding a volume to my bookshelf
To add a volume to the authenticated user's bookshelf, send an HTTP POST request to the URI with the following format:

https://www.googleapis.com/books/v1/mylibrary/bookshelves/shelf/addVolume

Replace the shelf path parameter with the ID of the bookshelf. See the Google Books IDs section for more information on bookshelf IDs.

The request has a single required query parameter:

volumeId - The ID of the volume. See the Google Books IDs section for more information on volume IDs.
Request
Here is an example to add "Flowers for Algernon" to the "Favorites" bookshelf:

POST https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/addVolume?volumeId=NRWlitmahXkC&key=yourAPIKey
Authorization: /* auth token here */
Content-Type: application/json
Content-Length: CONTENT_LENGTH

Note: The user must be authenticated to make modifications to a bookshelf, so you must provide the Authorization HTTP header with the POST request. No data, however, is required with this POST.

Response
If the request succeeds, the server responds with the 204 No Content HTTP status code.

Optional query parameters
You can use the standard query parameters when adding a volume to one of the authenticated user's bookshelves.

Removing a volume from my bookshelf
To remove a volume from the authenticated user's bookshelf, send an HTTP POST to the URI with the following format:

https://www.googleapis.com/books/v1/mylibrary/bookshelves/shelf/removeVolume

Replace the shelf path parameter with the ID of the bookshelf. See the Google Books IDs section for more information on bookshelf IDs.

The request has a single required query parameter:

volumeId - The ID of the volume. See the Google Books IDs section for more information on volume IDs.
Request
Here is an example to remove "Flowers for Algernon" from the "Favorites" bookshelf:

POST https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/removeVolume?volumeId=NRWlitmahXkC&key=yourAPIKey
Authorization: /* auth token here */
Content-Type: application/json
Content-Length: CONTENT_LENGTH

Note: The user must be authenticated to make modifications to a bookshelf, so you must provide the Authorization HTTP header with the POST request. No data, however, is required with this POST.

Response
If the request succeeds, the server responds with a 204 No Content status code.

Optional query parameters
You can use the standard query parameters when removing a volume from one of the authenticated user's bookshelves.

Clearing all volumes from my bookshelf
To remove all of the volumes from the authenticated user's bookshelf, send an HTTP POST to the URI with the following format:

https://www.googleapis.com/books/v1/mylibrary/bookshelves/shelf/clearVolumes

Replace the shelf path parameter with the ID of the bookshelf. See the Google Books IDs section for more information on bookshelf IDs.

Request
Here is an example to clear the "Favorites" bookshelf:

POST https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/clearVolumes?key=yourAPIKey
Authorization: /* auth token here */
Content-Type: application/json
Content-Length: CONTENT_LENGTH
  

Note: The user must be authenticated to make modifications to a bookshelf, so you must provide the Authorization HTTP header with the POST request. No data, however, is required with this POST.

Response
If the request succeeds, the server responds with a 204 No Content status code.

Optional query parameters
You can use the standard query parameters when clearing all volumes from one of the authenticated user's bookshelves.

Query parameter reference
The query parameters you can use with the Books API are summarized in this section.  All parameter values need to be URL encoded.

Standard query parameters
Query parameters that apply to all Books API operations are documented at System Parameters.

API-specific query parameters
Request parameters that apply only to specific operations in the Books API are summarized in the following table.

Parameter	Meaning	Notes	Applicability
download	Restrict to volumes by download availability.	
Currently, the only supported value is epub.
Purchase may be required for download access.
Performing a search
filter	Filter search results by volume type and availability.	
Supported filters are:
filter=partial - Restrict results to volumes where at least part of the text are previewable.
filter=full - Restrict results to volumes where all of the text is viewable.
filter=free-ebooks - Restrict results to free Google eBooks.
filter=paid-ebooks - Restrict results to Google eBooks with a price for purchase.
filter=ebooks - Restrict results to Google eBooks, paid or free.Examples of non-eBooks would be publisher content that is available in limited preview and not for sale, or magazines.
 

Performing a search
langRestrict	Restricts the volumes returned to those that are tagged with the specified language.	
Restrict the search results to those with a certain language by specifying langRestrict to a two-letter ISO-639-1 code, such as "en" or "fr".
Performing a search
maxResults	The maximum number of elements to return with this request.	
For any request for all items in a collection, you can paginate results by specifying startIndex and maxResults in the parameters for the request.
Default: maxResults=10
Maximum allowable value: maxResults=40.
Performing a search
List user bookshelves
List user bookshelf volumes
List my bookshelves
List my bookshelf volumes
orderBy	
Order of the volume search results.

By default, a search request returns maxResults results, where maxResults is the parameter used in pagination, ordered by most relevant first.
You can change the ordering by setting the orderBy parameter to be one of these values:
orderBy=relevance - Returns search results in order of the most relevant to least (this is the default).
orderBy=newest - Returns search results in order of the newest published date to the oldest.
Performing a search
printType	Restrict to books or magazines.	
Supported values are:
printType=all - Return all volume content types (no restriction). This is the default.
printType=books - Return just books.
printType=magazines - Return just magazines.
Performing a search
projection	Restrict volume information returned to a subset of fields.	
Supported projections are:
projection=full - Includes all volume metadata (default).
projection=lite - Includes only a subject of volume and access metadata.
Performing a search
Retrieving a volume
List user bookshelf volumes
List my bookshelf volumes
q	Full-text query string.	
When creating a query, list search terms separated by a '+', in the form q=term1+term2_term3. (Alternatively, you can separate them with a space, but as with all of the query parameter values, the spaces must then be URL encoded.) The API returns all entries that match all of the search terms (like using AND between terms). Like Google's web search, the API searches on complete words (and related words with the same stem), not substrings.
To search for an exact phrase, enclose the phrase in quotation marks: q="exact phrase".
To exclude entries that match a given term, use the form q=-term.
The search terms are case-insensitive.
Example: to search for all entries that contain the exact phrase "Elizabeth Bennet" and the word "Darcy" but don't contain the word "Austen", use the following query parameter value:
q="Elizabeth+Bennet"+Darcy-Austen
There are special (case-sensitive) keywords you can specify in the search terms to search in particular fields, such as:
intitle: Returns results where the text following this keyword is found in the title.
inauthor: Returns results where the text following this keyword is found in the author.
inpublisher: Returns results where the text following this keyword is found in the publisher.
subject: Returns results where the text following this keyword is listed in the category list of the volume.
isbn: Returns results where the text following this keyword is the ISBN number.
lccn: Returns results where the text following this keyword is the Library of Congress Control Number.
oclc: Returns results where the text following this keyword is the Online Computer Library Center number.
Performing a search
startIndex	The position in the collection at which to start the list of results.	
For any request for all items in a collection, you can paginate results by specifying startIndex and maxResults in the parameters for the request.
The index of the first item is 0.
Performing a search
List user bookshelves
List user bookshelf volumes
List my bookshelves
List my bookshelf volumes
volumeId	Identifies a volume associated with the request.	
Specifies the volume to add or remove from a bookshelf.
Adding a volume to my bookshelf
Removing a volume from my bookshelf
