# Project 3
+ By: *Antonie Kowal*
+ Production URL: <http://e28p3.antonievue.xyz>

## Outside resources
none

## Notes for instructor
When you first log in, you will be able to see your favorite posts. If you navigate away and back to the
account page, the favorites array is set back to null and I couldn't figure out why. I was also forced
to add ```.wait(2000)``` to a few e2e test assertions, as a few of my tests seemed to fail since Cypress would interact
with the Vue app so quickly. I wasn't sure how to circumvent this in a more proper way.
