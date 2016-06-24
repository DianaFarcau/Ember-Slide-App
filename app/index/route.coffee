`import Ember from 'ember'`

IndexRoute = Ember.Route.extend
  model: () ->
    return Ember.RSVP.hash({
      slides: this.store.findAll('slide')
    })

`export default IndexRoute`
