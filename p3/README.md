# Project 3
+ By: *Antonie Kowal*
+ Production URL: <http://e28p3.antonievue.xyz>

## Outside resources
<https://stackoverflow.com/questions/46850694/in-cypress-how-to-count-a-selection-of-items-and-get-the-length>

## Notes for instructor
When you first log in (must be with either credentials present in the user seed to replicate), you will initially be able to see your favorite posts. 
If you navigate away and back to the account page, the ```favorites``` array is reverted back to null and I couldn't figure out why. I was also forced
to add ```.wait(2000)``` to a few e2e test assertions, as a few of my tests seemed to fail since Cypress would interact
with the Vue app so quickly. I wasn't sure how to circumvent this properly.

you can find test login credentials at e28-api hosted on my server at <http://e28-api.antonievue.xyz>,
or you can register your own email/password in the 'account' page.