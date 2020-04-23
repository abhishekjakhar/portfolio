---
title: 'Plan My Trip'
subTitle:
  'PlanMyTrip is a Google chrome extension which can help you plan your trip by
  just running extension on any Text, Image or Video on internet. The extension
  uses Google Vision API, Video Intelligence API, Basetrip API and Yatra API in
  combination.'
coverImage: '/assets/projects/plan-my-trip/plan-my-trip-bg.png'
result: 'We were in top 3 teams out of more than 100 teams but, couldnt win it.'
contribution:
  'I developed the Google chrome extension with 1 other designer at Yatra
  Hacktahon.'
description:
  [
    {
      type: 'image',
      value: '/assets/projects/plan-my-trip/plan-my-trip-hero.png',
    },
    {
      type: 'message',
      name: 'Browser Preview',
      value:
        'Right clicking any text, image or video would open up the google chrome
        menu which contained the extension called Plan My Trip and clicking on
        it would run the extension.',
    },
    {
      type: 'image',
      value: '/assets/projects/plan-my-trip/plan-my-trip-image-1.png',
    },
    {
      type: 'message',
      name: 'Text',
      value:
        "The text based search was implemented by capturing the text using
        JavaScript which was then passed to the Basetrip API to get relevant
        details like Currency, Weather, Language etc. The prices of flights,
        hotels and packages were calculated by passing the destination and
        origin(current location) to the Yatra Flight's, Hotel's and Holiday's
        API. Clicking the Plan Now CTA would take the user to Yatra's search
        result page.",
    },
    {
      type: 'image',
      value: '/assets/projects/plan-my-trip/plan-my-trip-image-2.png',
    },
    {
      type: 'message',
      name: 'Image',
      value:
        "The image based search was implemented by capturing image URL using
        JavaScript and passing it to the Google's Vision API to get the
        location(destination) which was then passed to the Bastrip API to get
        relevant details like Currency, Weather, Language etc. The prices of
        flights, hotels and packages were calculated by passing the destination
        and origin(current location) to the Yatra Flight's, Hotel's and
        Holiday's API. Clicking the Plan Now CTA would take the user to Yatra's
        search result page.",
    },
    {
      type: 'image',
      value: '/assets/projects/plan-my-trip/plan-my-trip-image-3.png',
    },
    {
      type: 'message',
      name: 'Video',
      value:
        "The video based search was implemented by captuing the URL of video
        using JavaScript and passing it the Video Intelligence API to get the
        artifacts(all the possible locations in a video). The process was very
        slow because Google's Video Intelligence API was processing the complete
        video to generate artifacts and more than 1 artifact was returned by the
        API so, basically the results were not precise. This approach failed
        because Video Intelligence API was new and it was not trained properly.
        This approach might work in future when the API's will become more
        mature.",
    },
  ]
website: ''
code: ''
type:
  - JavaScript
  - Chrome Extension
---
