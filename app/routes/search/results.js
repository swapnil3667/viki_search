import Ember from 'ember';

export default  Ember.Route.extend({

  model: function(params) {
    return $.getJSON("http://api.viki.io/v4/search.json?sort=views&app=100462a&c=" + params.keyword).then(function(data){
      return data.map(function(video) {
        return Ember.Object.create({
          name: video.tt,
          url: "http://www.viki.com" + video.u.w
        });
      })
    });
  },
  serialize: function(keyword) {
    return {keyword: keyword};
  }
});
